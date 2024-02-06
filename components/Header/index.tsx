import React from 'react'
import Link from 'next/link';
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.nav}>
      <Link href="/">Главная страница</Link>
      <Link href="/recipes">Рецепты</Link>
      <Link href="/products">Продуктовая база</Link>
    </header>
  );
}