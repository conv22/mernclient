import React, { useEffect, useState } from 'react';
import useHttp from './../hooks/http.hook';
import Loader from './../Components/Loader';
import { useDispatch } from 'react-redux';
import { login } from './../Redux/Actions/authActions';

function LoginPage() {
	const dispatch = useDispatch();
	const [form, setForm] = useState({ email: '', password: '' });
	useEffect(() => window.M.updateTextFields(), []);

	const changeHandler = e =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const loginHandler = e => {
		dispatch(login({ ...form }));
	};

	return (
		<div className='row'>
			<div className='col s8 offset-s2'>
				<div className='card'>
					<div className='card-content'>
						<span className='card-title center-align blue-text'>Login</span>
						<div className='row'>
							<div className='input-field col s8 offset-s2 '>
								<input
									type='text'
									name='email'
									id='email'
									placeholder='Email'
									onChange={changeHandler}
									required
								/>
								<label htmlFor='email'>Enter your email</label>
							</div>
						</div>
						<div className='row'>
							<div className='input-field col s8 offset-s2'>
								<input
									type='password'
									name='password'
									id='password'
									placeholder='Password'
									onChange={changeHandler}
									required
								/>
								<label htmlFor='password'>Enter your password</label>
							</div>
						</div>
						<div className='row' style={{ textAlign: 'center' }}>
							<button
								className='btn btn-large blue lighten-2'
								onClick={loginHandler}
							>
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
