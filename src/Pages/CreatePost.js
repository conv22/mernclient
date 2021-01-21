import React, { useState } from 'react';
import { useAxios } from './../hooks/axios.hook';

function CreatePost() {
	const [form, setForm] = useState({ title: '', text: '' });
	const [file, setFile] = useState(null);
	const { request, error, loading } = useAxios();

	const changeHandler = e =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const submitHandler = () => {
		const data = new FormData();
		data.append('title', form.title);
		data.append('text', form.text);
		data.append('file', file);
		request('/main/create', 'post', data);
	};

	return (
		<div className='row'>
			<div className='col s8 offset-s2'>
				<div className='card'>
					<div className='card-content white-text'>
						<span className='card-title  center-align blue-text'>
							Posting...
						</span>
						<div className='row'>
							<div className='input-field col s6 offset-s3'>
								<input
									type='text'
									name='title'
									id='title'
									className='validate'
									onChange={changeHandler}
								/>
								<label htmlFor='title'>Post title</label>
							</div>
						</div>
						<div className='row'>
							<div className='input-field col s6 offset-s3'>
								<textarea
									id='textarea1'
									name='text'
									className='materialize-textarea'
									onChange={changeHandler}
								></textarea>
								<label htmlFor='textarea1'>Post description</label>
							</div>
						</div>
						<div className='row'>
							<div className='file-field input-field col s6 offset-s3'>
								<div className='btn blue lighten-2'>
									<span>Image</span>
									<input
										type='file'
										name='file'
										onChange={e => setFile(e.target.files[0])}
									/>
								</div>
								<div className='file-path-wrapper'>
									<input className='file-path validate' type='text' />
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col s6 offset-s3 center-align'>
								<button
									className='btn btn-medium blue lighten-2'
									onClick={submitHandler}
								>
									Add post
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreatePost;
