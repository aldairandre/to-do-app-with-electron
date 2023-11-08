export const schemaTaskCollection = {
  version : 0,
  primaryKey : 'id',
  type : 'object',
  properties : {
    id : {
      type : 'string',
      maxLength : 100,
    },
    title : {
      type : 'string',
    },
    description : {
      type : 'string',
    },
    createAt : {
      type : 'string',
    }
  },
  required : ['id','title','description','createAt']
}