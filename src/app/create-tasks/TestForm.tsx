"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});


function TestForm() {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name" className="mb-4" />

            {errors.name && touched.name ? (
              <div className='text-red-600'>{errors.name}</div>
            ) : null}


            <Field name="email" type="email" />

            {errors.email && touched.email ? (
              <div className='text-red-600'>{errors.email}</div>
            ) : null}

            <div className="py-2">
              <label className="block text-gray-700 text-sm font-bold">Comentário:</label>
              <textarea
                className="w-full h-24 p-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Digite seu comentário aqui..."
              />
            </div>


            <button type="submit" className='mt-8 py-5 w-1/2 bg-green-500 rounded-xl'>Submit</button>

          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TestForm
