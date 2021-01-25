import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { register } from '../../Redux/Actions/authActions';
import { clearErrors } from '../../Redux/Actions/errorActions';
import {
  createError,
  email,
  required,
  minlength,
  confirmPassword,
} from './Validation';
import './materialize-alert.css';

function RegisterPage(props) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: '',
  });
  const [file, setFile] = useState(null);

  //	Form handlers

  const registerHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(form).forEach((x) => data.append(x, form[x]));
    data.append('file', file);
    clearErrors();
    dispatch(register(data));
    return props.history.push('/');
  };
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="row">
      <div className="col s8 offset-s2">
        <div className="card">
          <div className="card-content white-text">
            <span className="card-title  center-align blue-text">Register</span>
            <Form onSubmit={registerHandler}>
              <div className="row">
                {error.id === 'REGISTER ERROR'
                  ? createError(error.message)
                  : null}
                <div className="input-field col s6 offset-s3">
                  <Input
                    id="username"
                    placeholder="Username"
                    name="username"
                    type="text"
                    className="validate"
                    value={form.username}
                    onChange={changeHandler}
                    validations={[required, minlength(6)]}
                  />
                  <label htmlFor="username" className="active">
                    Username
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6 offset-s3">
                  <Input
                    id="password"
                    placeholder="Password"
                    name="password"
                    type="password"
                    className="validate"
                    value={form.password}
                    onChange={changeHandler}
                    validations={[minlength(6), required]}
                  />
                  <label htmlFor="password" className="active">
                    Password
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6 offset-s3">
                  <Input
                    id="cpassword"
                    placeholder="Password"
                    name="cpassword"
                    type="password"
                    className="validate"
                    value={form.cpassword}
                    onChange={changeHandler}
                    validations={[required, confirmPassword]}
                  />
                  <label htmlFor="cpassword" className="active">
                    Confirm password
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6 offset-s3">
                  <Input
                    id="email"
                    placeholder="Email"
                    name="email"
                    type="email"
                    className="validate"
                    onChange={changeHandler}
                    value={form.email}
                    validations={[email, required]}
                  />
                  <label htmlFor="email" className="active">
                    Email
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="file-field input-field col s6 offset-s3">
                  <div className="btn blue lighten-2">
                    <span>Avatar</span>
                    <Input
                      type="file"
                      name="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                  </div>
                </div>
              </div>

              <div className="row" style={{ textAlign: 'center' }}>
                <CheckButton className="btn btn-large blue lighten-2">
                  Register
                </CheckButton>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
