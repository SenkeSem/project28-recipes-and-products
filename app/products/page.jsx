import React from 'react';
import ProductInput from '../../components/ProductInput';

// import { store } from '../redux/store';
// import { Provider } from 'react-redux';

export default function Page() {
  return (
    <div>
      <h2>Продуктовая страница</h2>
      <ProductInput />
      <h3>Продукты:</h3>
      <ul>
        <li>Подсолнечное масло</li>
        <li>Лук</li>
        <li>Морковка</li>
        <li>Томатная паста</li>
      </ul>
    </div>
  );
}
