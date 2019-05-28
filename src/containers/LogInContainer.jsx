import React from 'react';
import PropTypes from 'prop-types';
import { postRequest } from '../utils/makeRequest';
import useFormControls from '../hooks/useFormControls';
import Form from '../components/Form';

const LogInContainer = ({ closeModal }) => {
  const login = async () => {
    console.log(controls);
    await postRequest('/auth/login', {
      email: controls.email,
      password: controls.password,
    }).then(data => console.log(data));
  };
  const initialState = {
    email: '',
    password: '',
    username: '',
  };
  const { controls, handleSubmit, handleControlChange } = useFormControls(
    login,
    initialState,
  );
  return (
    <div>
      <span>Реєстрація</span>
      <Form Margin="25px 0 0 0" onSubmit={handleSubmit}>
        <Form.Label>
          <Form.Span>Електронна адреса</Form.Span>
          <Form.Input
            type="email"
            name="email"
            value={controls.email}
            onChange={handleControlChange}
            placeholder="example@mail.com"
            required
          />
        </Form.Label>
        <Form.Label>
          <Form.Span>Пароль</Form.Span>
          <Form.Input
            type="password"
            name="password"
            value={controls.password}
            onChange={handleControlChange}
            placeholder="nickname"
            required
          />
        </Form.Label>
        <Form.Row Margin="50px 0 0 0" alignItems="center">
          <Form.Button onClick={closeModal} text>
            Cancel
          </Form.Button>
          <Form.Button type="submit" primary>
            Увійти
          </Form.Button>
        </Form.Row>
      </Form>
    </div>
  );
};

LogInContainer.propTypes = {
  closeModal: PropTypes.func,
};

export default LogInContainer;
