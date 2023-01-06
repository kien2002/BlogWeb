import data from "../data";

export default function handler(req: any, res: any) {
  const { postsId } = req.query;
  const { Posts } = data;
  if (postsId) {
    const post = Posts.find((value) => value.id == postsId);
    return res.status(200).json(post);
  }
  return res.status(404).json({error:"Post not found"})
}
