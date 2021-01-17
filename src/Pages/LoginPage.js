import React, { useEffect, useState } from 'react';
import useHttp from './../hooks/http.hook';
import Loader from './../Components/Loader';

function LoginPage() {
	const [form, setForm] = useState({ email: '', password: '' });
	const { request, loading, error } = useHttp();
	useEffect(() => window.M.updateTextFields(), []);

	const changeHandler = e =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const loginHandler = async () => {
		const data = await request('/auth/login', 'POST', { ...form });
		console.log(data);
	};

	if (loading) {
		return <Loader />;
	}
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
