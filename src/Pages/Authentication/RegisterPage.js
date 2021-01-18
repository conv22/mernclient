import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../Redux/Actions/authActions';
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import './materialize-alert.css';
import { clearErrors } from '../../Redux/Actions/errorActions';

function RegisterPage() {
	const dispatch = useDispatch();
	const error = useSelector(state => state.error);
	const [form, setForm] = useState({
		username: '',
		email: '',
		password: '',
		cpassword: '',
	});

	//Form handlers

	const registerHandler = e => {
		e.preventDefault();
		clearErrors();
		dispatch(register(form));
	};
	const changeHandler = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	//Client validation
	const createError = text => {
		return (
			<div className='materialert error'>
				<div className='material-icons'>error_outline</div>
				{text}
			</div>
		);
	};

	const email = value => {
		if (!validator.isEmail(value)) {
			return createError('Enter valid email');
		}
	};

	const required = value => {
		if (!value.toString().trim().length) {
			return createError('This field is required');
		}
	};

	const minlength = value => {
		if (value.length < 6) {
			return createError('Should be at least 6 chars long');
		}
	};
	const confirmPassword = (value, props, components) => {
		if (value !== components['password'][0].value) {
			return createError('Password should match');
		}
	};
	//

	return (
		<div className='row'>
			<div className='col s8 offset-s2'>
				<div className='card'>
					<div className='card-content white-text'>
						<span className='card-title  center-align blue-text'>Register</span>
						<Form onSubmit={registerHandler}>
							<div className='row'>
								{error.id === 'REGISTER ERROR'
									? createError(error.message)
									: null}
								<div className='input-field col s6 offset-s3'>
									<Input
										id='username'
										placeholder='Username'
										name='username'
										type='text'
										className='validate'
										value={form.username}
										onChange={changeHandler}
										validations={[required, minlength]}
									/>
									<label htmlFor='username' className='active'>
										Username
									</label>
								</div>
							</div>
							<div className='row'>
								<div className='input-field col s6 offset-s3'>
									<Input
										id='password'
										placeholder='Password'
										name='password'
										type='password'
										className='validate'
										value={form.password}
										onChange={changeHandler}
										validations={[minlength, required]}
									/>
									<label htmlFor='password' className='active'>
										Password
									</label>
								</div>
							</div>
							<div className='row'>
								<div className='input-field col s6 offset-s3'>
									<Input
										id='cpassword'
										placeholder='Password'
										name='cpassword'
										type='password'
										className='validate'
										value={form.cpassword}
										onChange={changeHandler}
										validations={[required, confirmPassword]}
									/>
									<label htmlFor='cpassword' className='active'>
										Confirm password
									</label>
								</div>
							</div>
							<div className='row'>
								<div className='input-field col s6 offset-s3'>
									<Input
										id='email'
										placeholder='Email'
										name='email'
										type='email'
										className='validate'
										onChange={changeHandler}
										value={form.email}
										validations={[email, required]}
									/>
									<label htmlFor='email' className='active'>
										Email
									</label>
								</div>
							</div>

							<div className='row' style={{ textAlign: 'center' }}>
								<CheckButton className='btn btn-large blue lighten-2'>
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
