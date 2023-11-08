/* import { createRxDatabase } from "rxdb";
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie'
import { schemaTaskCollection } from "./schemaTask";

const db = await createRxDatabase({
  name : process.env.DATABASE_NAME || 'todoApp',
  storage : getRxStorageDexie(),
  password : process.env.DATABASE_PASSWORD,
  multiInstance : true,
  eventReduce : true,
  cleanupPolicy : {},
})


await db.addCollections({
  todos : {
    schema : schemaTaskCollection
  }
})

export {db} */