/*搜索框传值查询*/
//引入express组件
const express = require("exprss");
//引入mysql数据库连接池
const pool = require("../pool");
//引入mysql组件
const mysql = require("mysql");
//创建路由
var router = exports.Router();

router.get('/',(req,res)=>{
  var pname = req.query.pname;
  var sql = "select count(pid) as c from hp_product where pname=?";
})