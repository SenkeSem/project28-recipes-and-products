'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '../redux/store';
import { initialProduct } from '../redux/slices/productsSlice';

export default function StoreProvider({ product, children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(initialProduct(product));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
