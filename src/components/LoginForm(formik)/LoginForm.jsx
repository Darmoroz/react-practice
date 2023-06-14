import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.number().min(6).max(10).required(),
});

const initialsValues = {
  login: '',
  password: '',
};
const InputStyled = styled(Field)`
  color: #ff0000;
`;

export const LoginFormFormik = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    // schema.isValid(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialsValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Login
          <InputStyled type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label>
          Password <InputStyled type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
