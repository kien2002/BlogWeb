export default async function getPost(id?: any) {
  const res = await fetch("http://localhost:3000/api/post");
  const posts = await res.json();
  if (id) {
    return posts.find((value:any) => (value.id == id));
  }
  return posts;
}
