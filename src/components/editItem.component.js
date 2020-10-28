import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AuthService from "../services/auth.service";

const id = JSON.parse(localStorage.getItem('id'));

export default class EditItem extends React.Component {
  render() {
    const { idSanPham } = this.props.match.params
    return (
      <Formik
        initialValues={{
          ten_san_pham: '',
          gia: ''
        }}
        validationSchema={Yup.object().shape({
          ten_san_pham: Yup.string()
            .required('Tên sản phẩm không được để trống')
            .min(5, 'Tên sản phẩm phải dài hơn 5 ký tự'),
          gia: Yup.string()
            .required('Giá không được để trống')
        })}
        onSubmit={fields => {
          console.log(idSanPham);
          AuthService.updateItem(idSanPham, fields.ten_san_pham, fields.gia)
            .then(alert('Thành công'))
            .catch(err => {
              alert(err)
            })


          // alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
          // this.props.history.push('/home');
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="ten_san_pham">Tên sản phẩm</label>
              <Field name="ten_san_pham" type="text" className={'form-control' + (errors.ten_san_pham && touched.ten_san_pham ? ' is-invalid' : '')} />
              <ErrorMessage name="ten_san_pham" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="gia">Giá</label>
              <Field name="gia" type="text" className={'form-control' + (errors.gia && touched.gia ? ' is-invalid' : '')} />
              <ErrorMessage name="gia" component="div" className="invalid-feedback" />
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
