import validator from 'validator';

export const createError = text => {
	return (
		<div className='materialert error'>
			<div className='material-icons'>error_outline</div>
			{text}
		</div>
	);
};

export const email = value => {
	if (!validator.isEmail(value)) {
		return createError('Enter valid email');
	}
};

export const required = value => {
	if (!value.toString().trim().length) {
		return createError('This field is required');
	}
};

export const minlength = value => {
	if (value.length < 6) {
		return createError('Should be at least 6 chars long');
	}
};
export const confirmPassword = (value, props, components) => {
	if (value !== components['password'][0].value) {
		return createError('Password should match');
	}
};
