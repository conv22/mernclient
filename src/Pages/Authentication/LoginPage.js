import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors } from './../../Redux/Actions/errorActions';
import { login } from '../../Redux/Actions/authActions';
import { createError, email, required } from './Validation';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import './materialize-alert.css';

function LoginPage() {
	const dispatch = useDispatch();
	const error = useSelector(state => state.error);
	const [form, setForm] = useState({ email: '', password: '' });

	// Form handlers

	const changeHandler = e =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const loginHandler = e => {
		e.preventDefault();
		clearErrors();
		dispatch(login(form));
	};
	//

	return (
		<div className='row'>
			<div className='col s8 offset-s2'>
				<div className='card'>
					<div className='card-content'>
						<span className='card-title center-align blue-text'>Login</span>
						<Form onSubmit={loginHandler}>
							<div className='row'>
								{error.id === 'LOGIN ERROR' ? createError(error.message) : null}
								<div className='input-field col s8 offset-s2 '>
									<Input
										type='text'
										name='email'
										id='email'
										placeholder='Email'
										onChange={changeHandler}
										value={form.email}
										validations={[email, required]}
									/>
									<label htmlFor='email' className='active'>
										Enter your email
									</label>
								</div>
							</div>
							<div className='row'>
								<div className='input-field col s8 offset-s2'>
									<Input
										type='password'
										name='password'
										id='password'
										placeholder='Password'
										onChange={changeHandler}
										validations={[required]}
									/>
									<label htmlFor='password' className='active'>
										Enter your password
									</label>
								</div>
							</div>
							<div className='row' style={{ textAlign: 'center' }}>
								<CheckButton
									className='btn btn-large blue lighten-2'
									onClick={loginHandler}
								>
									Login
								</CheckButton>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
