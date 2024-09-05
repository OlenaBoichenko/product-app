// CreateProductPage.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const CreateProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    category: '',
    description: '',
    price: '',
    image: '',
    title: ''
  };

  const validationSchema = Yup.object({
    category: Yup.string().required('Product category is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    image: Yup.string().required('Image URL is required'),
    title: Yup.string().required('Product name is required')
  });

  const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product,
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('Submitted values:', values);
    dispatch(addProduct(values));
    resetForm();
    navigate('/products'); 
  };

  return (
    <div className="create-product-page">
      <h1>Create New Product</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="category">Category</label>
            <Field type="text" id="category" name="category" />
            <ErrorMessage name="category" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <Field type="text" id="description" name="description" />
            <ErrorMessage name="description" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <Field type="number" id="price" name="price" />
            <ErrorMessage name="price" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="image">Image URL</label>
            <Field type="text" id="image" name="image" />
            <ErrorMessage name="image" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="title">Title</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>

          <button type="submit">Create Product</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateProductPage;

