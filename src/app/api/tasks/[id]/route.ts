import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/utils/database";
import { taskUpdateSchema } from "@/lib/validations";
import { ZodError } from "zod";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const text = "SELECT * FROM tasks WHERE id = $1";
    const { id } = await params;
    const values = [id];
    const result = await pool.query(text, values);

    if (result.rowCount === 0)
      return NextResponse.json({ message: "Task Not Found" }, { status: 404 });

    return NextResponse.json(result.rows[0]);
  } catch (error: any) {
    console.error("Error fetching task:", error);
    return NextResponse.json(
      { message: "Failed to fetch task" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();
    
    // Validate input using Zod schema
    const validatedData = taskUpdateSchema.parse(body);
    
    const { id } = await params;
    
    // Build dynamic update query based on provided fields
    const updates: string[] = [];
    const values: any[] = [];
    let paramCount = 1;
    
    if (validatedData.title !== undefined) {
      updates.push(`title = $${paramCount}`);
      values.push(validatedData.title);
      paramCount++;
    }
    
    if (validatedData.description !== undefined) {
      updates.push(`description = $${paramCount}`);
      values.push(validatedData.description || null);
      paramCount++;
    }
    
    if (updates.length === 0) {
      return NextResponse.json(
        { message: "No fields to update" },
        { status: 400 }
      );
    }
    
    values.push(id);
    const text = `UPDATE tasks SET ${updates.join(", ")} WHERE id = $${paramCount} RETURNING *`;
    
    const result = await pool.query(text, values);
    
    if (result.rowCount === 0) {
      return NextResponse.json({ message: "Task Not Found" }, { status: 404 });
    }
    
    return NextResponse.json(result.rows[0]);
  } catch (error: any) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    console.error("Error updating task:", error);
    
    // Handle duplicate key error
    if (error.code === "23505") {
      return NextResponse.json(
        { message: "A task with this title already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { message: "Failed to update task" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const text = "DELETE FROM tasks WHERE id = $1 RETURNING *";
    const { id } = await params;
    const values = [id];
    const result = await pool.query(text, values);

    if (result.rowCount === 0)
      return NextResponse.json({ message: "Task Not Found" }, { status: 404 });

    return NextResponse.json(result.rows[0]);
  } catch (error: any) {
    console.error("Error deleting task:", error);
    return NextResponse.json(
      { message: "Failed to delete task" },
      { status: 500 }
    );
  }
}
