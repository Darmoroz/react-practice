import { Formik, Form, Field } from 'formik';
export const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.resetForm();
    actions.isSubmitting(false);
  };

  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => {
        return (
          <Form className="formik">
            <label>
              Description <Field name="title" type="text" />
            </label>
            <label>
              Link <Field name="link" type="url" />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Add material
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
