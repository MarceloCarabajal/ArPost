import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { guardarEnvio } from '../features/envio/envioSlice'

const esquemaValidacion = Yup.object().shape({
  nombre: Yup.string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres'),
  apellido: Yup.string()
    .required('El apellido es obligatorio')
    .min(2, 'El apellido debe tener al menos 2 caracteres'),
  peso: Yup.number()
    .typeError('El peso debe ser un número')
    .required('El peso es obligatorio')
    .positive('El peso debe ser un número positivo')
    .integer('El peso debe ser un número entero'),
  email: Yup.string()
    .email('Debe ser un correo electrónico válido')
    .required('El correo electrónico es obligatorio'),
  estado: Yup.string()
    .required('El estado es obligatorio'),
})

const FormularioEnvioFormikRedux = () => {
  const dispatch = useDispatch();

  return (
<Formik
      initialValues={{
        nombre: "",
        apellido: "",
        peso: "",
        email: "",
        estado: "MINL Normal",
      }}
      validationSchema={esquemaValidacion}
      onSubmit={(values, { resetForm }) => {
        dispatch(guardarEnvio(values));
        alert("Formulario guardado en Redux");
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="grid gap-4 max-w-md mx-auto">
          <div>
            <label>Nombre</label>
            <Field name="nombre" className="w-full border px-2 py-1" />
            <ErrorMessage name="nombre" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label>Apellido</label>
            <Field name="apellido" className="w-full border px-2 py-1" />
            <ErrorMessage name="apellido" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label>Peso (kg)</label>
            <Field name="peso" type="number" className="w-full border px-2 py-1" />
            <ErrorMessage name="peso" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label>Email</label>
            <Field name="email" type="email" className="w-full border px-2 py-1" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label>Estado</label>
            <Field as="select" name="estado" className="w-full border px-2 py-1">
              <option value="MINL Normal">MINL Normal</option>
              <option value="MIAT En tránsito">MIAT En tránsito</option>
              <option value="MIMS Fuera de curso">MIMS Fuera de curso</option>
              <option value="MIRD Siendo devuelto/redirigido">MIRD Redirigido</option>
              <option value="MIRT Siendo devuelto">MIRT Devuelto</option>
            </Field>
            <ErrorMessage name="estado" component="div" className="text-red-500 text-sm" />
          </div>

          <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-4 py-2 rounded">
            Guardar Envío
          </button>
        </Form>
      )}
    </Formik>
  )
}



export default FormularioEnvioFormikRedux
