var express=require("express");
//创建router路由器
var router = express.Router();
const pool = require("../pool");

router.get("/",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    // console.log(req.query);
    var uname=req.query.uname;
    var phone=req.query.phone;
    var mrk_address=req.query.mrk_address;
    var mrk_message=req.query.mrk_message;
    var sql=`INSERT INTO mrk VALUE(NULL,?,?,?,?)`;
    pool.query(sql,[uname,phone,mrk_address,mrk_message],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"成功"});
            return;
        }else{
            res.send({code:-1,msg:"失败"});
            return;
        }
    })
})
module.exports=router;