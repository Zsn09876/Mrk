//引组件
var express=require("express");
//创建router路由器
var router = express.Router();
const pool = require("../pool");
//注册用户名验证模块
router.get('/',(req,res)=>{
  var uname=req.query.uname;
  var reg=/^[a-z0-9_]{6,13}$/i;
  // if(!reg.test(uname)){
  //   res.send({code:-1,msg:"用户名已存在！"});
  // }else{
  //   res.send({code:1,msg:"欢迎使用"});
  // }
  var sql = "select count(id) as c from hp_login where uname = ?";
  pool.query(sql,[uname],(err,result)=>{
    if(err)throw err;
    if(result[0].c > 0){
      res.send({code:-1,msg:"用户名已存在！"});
    }else{
      res.send({code:1,msg:"欢迎使用"});
    }
  })
});
module.exports=router;