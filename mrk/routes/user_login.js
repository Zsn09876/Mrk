//引组件
var express=require("express");
//创建router路由器
var router = express.Router();
const pool = require("../pool");
//这里是用户登录的路由
router.get('/',(req,res)=>{
  var uname=req.query.uname;
  var pwd=req.query.pwd;
  var phone=req.query.phone;
  var ureg=/^[a-z0-9_]{3,12}$/i;
  var psreg=/^[a-z0-9]{6,18}$/i;
  var phreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/i;
  if(!ureg.test(uname)){
    res.send({code:-1,msg:"用户名不能少于3位,支持数字和字母！"});
    return;
  }
  if(!psreg.test(pwd)){
    res.send({code:-1,msg:"密码必须在6位以上,支持数字和字母！"});
    return;
  }
  if(!phreg.test(phone)){
    res.send({code:-1,msg:"手机号格式不正确"});
    return;
  }
  console.log(uname,phone,pwd);
  var sql=`INSERT INTO hp_login VALUE(NULL,?,?,?)`;
  pool.query(sql,[uname,phone,pwd],(err,result)=>{
    if(err) throw err;
    //根据结果作出相应
    if(result.affectedRows>0){
      res.send({code:1,msg:'登陆成功'});
      return;
    }else{
      res.send({code:-1,msg:'登陆失败'});
    }
  })
});
//导出服务器
module.exports=router;