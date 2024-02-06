import React from 'react'
import Link from 'next/link';

async function getData() {
  const responce = await fetch('https://jsonplaceholder.typicode.com/posts');

  return responce.json();
}

export default async function RecipeList() {
  const posts = await getData();

  return (
    <main>
      <h3>Тут будут отображаться рецепты</h3>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/recipes/${post.id}`}>Рецепт: {post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}