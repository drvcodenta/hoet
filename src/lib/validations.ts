import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters")
    .trim(),
  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .trim()
    .optional()
    .or(z.literal("")),
  status: z.enum(["pending", "in-progress", "completed"]).default("pending").optional(),
  priority: z.enum(["low", "medium", "high"]).default("medium").optional(),
});

export const taskUpdateSchema = taskSchema.partial();

export type TaskInput = z.infer<typeof taskSchema>;
export type TaskUpdateInput = z.infer<typeof taskUpdateSchema>;
