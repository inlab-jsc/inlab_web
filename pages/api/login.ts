import { NextApiRequest, NextApiResponse } from "next";
import singletonDB from "@utils/database";
import { compare } from "bcrypt";
import cookie from "cookie";
import { sign } from "jsonwebtoken";

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "POST") {
    // hard code username and password
    // this should be database query
    const person = {
      id: 1,
      password: "$2b$10$.G1XNV1NrcVU.Az25alni.egYRDHbvAHyRHAPn/KXIgFPauVjbUpO",
      email: "",
    };
    const result = await compare(req.body.password, person.password);
    if (result) {
      const claims = { sub: person.id, myPersonEmail: person.email };
      const jwt = sign(claims, process.env.SECRET_KEY, { expiresIn: "1h" });

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("auth", jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          sameSite: "strict",
          maxAge: 3600,
          path: "/",
        })
      );
      res.json({ token: jwt });
    } else {
      res.status(401).send({ message: "Password or Username wrong" });
    }
  } else {
    res.status(405).json({ message: "Wrong method" });
  }
}
