import { hash } from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const result = await hash(req.body.password, 10);
    res.send({ result });
  } else {
    res.status(405).json({ message: "nope" });
  }
}
