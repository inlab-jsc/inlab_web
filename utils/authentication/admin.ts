import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";

const withAdminPermission = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.cookies.auth)
    console.log(
      "verify:   ",
      verify(req.cookies.auth!, process.env.SECRET_KEY)
    );
  await fn(req, res);
  return;
};
export default withAdminPermission;
