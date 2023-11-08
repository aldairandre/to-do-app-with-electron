"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik';
import * as Yup from "yup";


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  description: Yup.string().required('Required')
});

const TextArea: React.FC<FieldProps> = ({ field, form, ...props }) => {
  return (
    <div className="py-2">
      <label className="block text-gray-700 text-sm font-bold">Comentário:</label>
      <textarea
        {...field} {...props}
        className="w-full h-24 p-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-black"
      />
    </div>
  )
}


function TestForm() {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          description: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          const { name,description } = values
          /* alert(JSON.stringify(values, null, 2)); */
          console.log(values);
          actions.setSubmitting(false);
          actions.resetForm()
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name" className="mb-4 text-black" />

            {errors.name && touched.name ? (
              <div className='text-red-600'>{errors.name}</div>
            ) : null}


            <Field name="description" placeholder="description" component={TextArea}/>

            <button type="submit" className='mt-8 py-5 w-1/2 bg-green-500 rounded-xl'>Submit</button>

          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TestForm
