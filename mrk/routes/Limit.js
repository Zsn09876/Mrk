const express = require("express");
const pool = require("../pool");
const mysql = require("mysql");
var router = express.Router();

router.get('/',(req,res)=>{
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //默认值
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 1;
  }
  var reg = /^[0,9]{1,}$/;
  if(!reg.test(pno)){
    res.send({});
  }

})