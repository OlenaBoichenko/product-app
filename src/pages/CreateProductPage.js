import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../store/productSlice';

const CreateProductPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && image) {
      const newProduct = {
        id: Date.now(),
        name,
        description,
        image,
        isLiked: false,
      };
      dispatch(createProduct(newProduct));
      setName('');
      setDescription('');
      setImage('');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Product Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />
      <input 
        type="url" 
        placeholder="Image URL" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
        required 
      />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default CreateProductPage;
