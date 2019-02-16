$(function(){
    
    $("#login").click(function(){
        var uname=$("[name=uname]")[0].value;
        var phone=$("[name=phone]")[0].value;
        var mrk_address=$("[name=mrk_address]")[0].value;
        var mrk_message=$("[name=mrk_message]")[0].value;
        $.ajax({
            url:"http://127.0.0.1:3000/mrk_login",
            type:"get",
            data:{uname,phone,mrk_address,mrk_message},
            dataType:"json"
        }).then((success)=>{
            if(success.code==1){
                alert("添加成功");
               window.location.href="http://127.0.0.1:5500/www.mrkgym.com/html/index.html";
            }else{
                alert("失败");
                this.uname="";
                this.phone="";
                this.mrk_address="";
                this.mrk_message="";
            }
        })
        
    })
 
})
