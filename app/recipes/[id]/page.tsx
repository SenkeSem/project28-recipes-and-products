type Props = {
  params: {
    id: string
  }
}

async function getData(id: string) {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return responce.json();
}

export default async function RecipeList({params: {id}}: Props) {
  const post = await getData(id);
  
  return (
    <main>
      <h3>Рецепт № {post.id}</h3>
      <p>{post.title}</p>
      <span>{post.body}</span>
    </main>
  );
}