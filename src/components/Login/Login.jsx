import React from 'react';
import s from './Login.module.css'
import { Formik, Field } from 'formik';
import { Redirect } from 'react-router';
import * as yup from 'yup';
const LoginForm = (props) => {
	const validationSchema = yup.object().shape({
		email: yup.string().typeError('Should be string').required('Fill in the field'),
		password: yup.string().typeError('Should be string').required('Fill in the field'),
	});
	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
				rememberMe: false,
			}}
			validateOnBlur
			onSubmit={(values) => {
				props.postLogin(values.email, values.password, values.rememberMe);
			}}
			validationSchema={validationSchema}
		>
			{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
				<div className={s.formBlock}>				<form className={s.form}>
					<h1 className={s.formTitle}>LOGIN</h1>
					<div><Field name={`email`} placeholder='Email' onChange={handleChange} onBlur={handleBlur} value={values.name} /></div>
					{touched.email && errors.email && <p className={s.error}>{errors.email}</p>}
					<div><Field name={`password`} type={'password'} onChange={handleChange} onBlur={handleBlur} value={values.name} /></div>
					{touched.password && errors.password && <p className={s.error}>{errors.password}</p>}
					<div><Field type='checkbox' className={s.formRememberMe} name={'rememberMe'} onChange={handleChange} defaultChecked={values.rememberMe} /><label>Remember Me</label></div>
					{props.isError && <div className={s.error}>{props.errorMessage}</div>}
					<div><button className={s.submitBtn} disabled={!isValid && !dirty} onClick={handleSubmit} type={`submit`}>Login</button></div>
				</form>
				</div>

			)}
		</Formik>
	);
};

const Login = (props) => {
	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	}
	return (
		<div>
			<LoginForm postLogin={props.postLogin} isError={props.isError} errorMessage={props.errorMessage} />
		</div>
	);
};

export default Login;