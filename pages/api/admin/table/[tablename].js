import singletonDB from "@utils/database";

export default async function getTableDataByName(req,res) {
  if(req.method==="GET"){
    const { tablename, offset, limit } = req.query;
    if(tablename&&offset&&limit){
      try{
        const result = await singletonDB.query("SELECT * FROM $1~ LIMIT $2 OFFSET $3",[tablename,limit,offset]);
        res.send(result);
      } catch(err){
        res.status(500).send({ message: err.message });
      }
    }else{
      res.status(404).send({});
    }
  } else {
    res.status(405).send({});
  }
}
