import { z } from "zod";

export const TaskDataSchema = z.object({
  taskName: z.string(),
  description: z.string()
})

export type TaskData = z.infer<typeof TaskDataSchema>