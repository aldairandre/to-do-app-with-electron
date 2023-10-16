"use client"
import { useFormik } from 'formik'
import React from 'react'



function AddTask() {

  const taskData: TaskData = {
    taskName: '',
    description: '',
  }

  const onSubmit = (values: TaskData) => {
    alert(JSON.stringify(values, null, 2));
  }

  const formik = useFormik({
    initialValues: taskData,
    onSubmit: onSubmit,
    
  })

  return (
    <form onSubmit={formik.handleSubmit}
      className='flex flex-col text-center items-center'
    >
      <label htmlFor="taskName" className='mb-4'>Task Name</label>
      <input
        id="taskName"
        name="taskName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.taskName}
        className='w-full text-black'
      />

      <label htmlFor="description" className='mb-4 mt-10'>Descrição</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.taskName}
        className='w-full text-black'
      />

      <button type="submit" className='mt-8 py-5 w-1/2 bg-green-500 rounded-xl'>Submit</button>
      <button type="submit" className='mt-8 py-5 w-1/2 underline' onClick={formik.handleReset}>Cancelar</button>
    </form>
  )
}

export default AddTask
