'use client';
import { useRef } from 'react';
import { useAppSelector, useAppDispatch, useAppStore } from '../redux/hooks';
import { initializeProduct, addProduct } from '../redux/slices/productsSlice';

export default function ProductName({ product }) {
  // Initialize the store with the product information
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(initializeProduct(product));
    initialized.current = true;
  }
  const name = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  return <input value={name} onChange={(e) => dispatch(addProduct(e.target.value))} />;
}
