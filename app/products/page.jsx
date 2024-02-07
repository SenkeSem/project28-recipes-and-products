'use client';
import ProductInput from '@/components/ProductInput';

export default function ProductPage() {
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
