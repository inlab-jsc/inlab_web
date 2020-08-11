import { NextApiRequest, NextApiResponse } from "next";
import { IDatabase } from "pg-promise";
import singletonDB from "@utils/database";
import withAdminPermission from "@utils/authentication/admin.ts";
// temporary any type
// expect type ExtendedProtocol = IDatabase<IExtensions> & IExtensions
// check https://github.com/vitaly-t/pg-promise-demo/tree/master/TypeScript

interface TableDetail {
  table: string;
  schema: {
    column: string;
    type: string;
  }[];
  rowCount: number;
}

const getTableDetail = async (
  tableName: string,
  dbConnection: IDatabase<any>
): Promise<TableDetail> => {
  const arr: { column: string; type: string }[] = [];
  const queryTableDetail = await dbConnection.query(
    "SELECT column_name, data_type FROM information_schema.columns WHERE table_name =$1;",
    tableName
  );
  for (let i = 0; i < queryTableDetail.length; i++) {
    const { column_name: column, data_type: type } = queryTableDetail[i];
    arr.push({ column, type });
  }
  const rowCount = await dbConnection.query(
    "SELECT COUNT(*) FROM $1~;",
    tableName
  );
  return {
    table: tableName,
    schema: arr,
    rowCount: rowCount[0].count,
  };
};

export default withAdminPermission(async function getTableSchema(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "GET") {
    try {
      const arr = [];
      const table = await singletonDB.query(
        `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';`
      );
      for (let i = 0; i < table.length; i++) {
        arr.push(getTableDetail(table[i].table_name, singletonDB));
      }
      const result = await Promise.all(arr);
      res.send(result);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  } else {
    res.status(405).send({ message: "nope" });
  }
});
