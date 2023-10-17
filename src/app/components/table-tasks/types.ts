import { string, z } from "zod"

const schemaTasks = z.object({
  id : z.string(),
  title : z.string(),
  description : z.string(),
  createAt : z.string()
})



export type Tasks = z.infer<typeof schemaTasks>