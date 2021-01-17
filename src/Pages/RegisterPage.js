import React, { useState, useEffect } from 'react';
import Loader from './../Components/Loader';
import useHttp from './../hooks/http.hook';

function RegisterPage() {
	const { request, error, loading } = useHttp();
	const [form, setForm] = useState({
		username: '',
		email: '',
		password: '',
		cpassword: '',
	});
	useEffect(() => {
		window.M.updateTextFields();
		window.M.AutoInit();
	}, []);

	const registerHandler = async () => {
		const data = await request('/auth/register', 'POST', { ...form });
	};

	const changeHandler = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	if (loading) {
		return <Loader />;
	}

	return (
		<div className='row'>
			<div className='col s8 offset-s2'>
				<div className='card'>
					<div className='card-content white-text'>
						<span className='card-title  center-align blue-text'>Register</span>
						<div className='row'>
							<div className='input-field col s6 offset-s3'>
								<input
									id='username'
									placeholder='Username'
									name='username'
									type='text'
									className='validate'
									onChange={changeHandler}
								/>
								<label htmlFor='username'>Username</label>
							</div>
						</div>
						<div className='row'>
							<div className='input-field col s6 offset-s3'>
								<input
									id='password'
									placeholder='Password'
									name='password'
									type='password'
									className='validate'
									onChange={changeHandler}
								/>
								<label htmlFor='password'>Password</label>
							</div>
						</div>
						<div className='row'>
							<div className='input-field col s6 offset-s3'>
								<input
									id='cpassword'
									placeholder='Password'
									name='cpassword'
									type='password'
									className='validate'
									onChange={changeHandler}
								/>
								<label htmlFor='cpassword'>Confirm password</label>
							</div>
						</div>
						<div className='row'>
							<div className='input-field col s6 offset-s3'>
								<input
									id='email'
									placeholder='Email'
									name='email'
									type='email'
									className='validate'
									onChange={changeHandler}
								/>
								<label htmlFor='email'>Email</label>
							</div>
						</div>

						<div className='row' style={{ textAlign: 'center' }}>
							<button
								className='btn btn-large blue lighten-2'
								onClick={registerHandler}
							>
								Register
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RegisterPage;
