import { NextResponse } from "next/server";
import { pool } from "@/utils/database";
import { taskSchema } from "@/lib/validations";
import { ZodError } from "zod";

export async function GET() {
  try {
    const query = "SELECT * FROM tasks ORDER BY created_on DESC";
    const response = await pool.query(query);
    return NextResponse.json(response.rows);
  } catch (error: any) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json(
      { message: "Failed to fetch tasks" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input using Zod schema
    const validatedData = taskSchema.parse(body);

    const query =
      "INSERT INTO tasks(title, description) VALUES ($1, $2) RETURNING *";
    const values = [
      validatedData.title,
      validatedData.description || null,
    ];
    const response = await pool.query(query, values);

    return NextResponse.json(response.rows[0], { status: 201 });
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

    console.error("Error creating task:", error);
    
    // Handle duplicate key error
    if (error.code === "23505") {
      return NextResponse.json(
        { message: "A task with this title already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { message: "Failed to create task" },
      { status: 500 }
    );
  }
}
