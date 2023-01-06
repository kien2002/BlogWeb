import data from "./data";

export default function handler(req: any, res: any) {
  const { Trending } = data;
  if (Trending) return res.status(200).json(Trending)
  return res.status(404).json({error:"Data not found"})
}
