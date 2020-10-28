import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AuthService from "../services/auth.service";
export default class Register extends React.Component {
  render() {
    // const {history} = this.props;
    return (
      <Formik
        initialValues={{
          ten_shop: '',
          ho_va_ten: '',
          sdt: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={Yup.object().shape({
          ten_shop: Yup.string()
            .required('First Name is required')
            .min(5, 'Tên shop phải dài hơn 5 ký tự'),
          ho_va_ten: Yup.string()
            .required('Last Name is required')
            .min(5, 'Tên shop phải dài hơn 5 ký tự'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          sdt: Yup.string()
            .matches(/^[0-9]*$/)
            .required('SĐT is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
        })}
        onSubmit={fields => {
          AuthService.register(fields.ten_shop, fields.ho_va_ten, fields.email, fields.sdt, fields.password)
            .then(alert(fields.ten_shop + fields.ho_va_ten+ fields.email+ fields.sdt+ fields.password))
            .catch(err => {
              alert('Lỗi: ' + err)
            })
          // alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
          // this.props.history.push('/home');
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="ten_shop">Tên Shop</label>
              <Field name="ten_shop" type="text" className={'form-control' + (errors.ten_shop && touched.ten_shop ? ' is-invalid' : '')} />
              <ErrorMessage name="ten_shop" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="ho_va_ten">Họ và Tên</label>
              <Field name="ho_va_ten" type="text" className={'form-control' + (errors.ho_va_ten && touched.ho_va_ten ? ' is-invalid' : '')} />
              <ErrorMessage name="ho_va_ten" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="sdt">SĐT</label>
              <Field name="sdt" type="text" className={'form-control' + (errors.sdt && touched.sdt ? ' is-invalid' : '')} />
              <ErrorMessage name="sdt" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
              <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary mr-2">Register</button>
              <button type="reset" className="btn btn-secondary">Reset</button>
            </div>
          </Form>
        )}
      />
    )
  }
}
