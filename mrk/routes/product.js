//引入服务器模块
const express=require("express");
//创建一个空的路由器
var router=express.Router();
//引入自己写的mysql连接池
const pool=require('../pool');
//产品查询模块
router.get('/',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
    var sql="select pid,pname,pnowprice,poldprice,pdetail,pimg from hp_project";
    //var sql = "select count(pid) from hp_project";
    pool.query(sql,function(err,result){
        if(err) throw err;
        var obj=result;
        if(obj!=null){
            res.send({code:1,msg:obj});
        }else{
            res.send({code:-1,msg:"404"})
        }
    })


  // var rows = [
  //   {pid:1,pimg:"http://127.0.0.1:3000/picture/1_main_246560_360.jpg"},
  //   {pid:2,pimg:"http://127.0.0.1:3000/picture/1_mall_peitu_1_240.jpg"},
  //   {pid:3,pimg:"http://127.0.0.1:3000/picture/1_main_246560_360.jpg"},
  //   {pid:4,pimg:"http://127.0.0.1:3000/picture/1_mall_peitu_1_240.jpg"},
  //   {pid:5,pimg:"http://127.0.0.1:3000/picture/1_main_246560_360.jpg"},
  //   {pid:6,pimg:"http://127.0.0.1:3000/picture/1_mall_peitu_1_240.jpg"}
  // ]
  // res.send(rows);
})

//导出服务器
module.exports=router;