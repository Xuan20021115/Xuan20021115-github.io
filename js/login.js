

window.onload=function(){
  
  var userName=getCookie("username");
  if(userName!=undefined){
  $(".log1").text("欢迎你，"+userName);
  }
  
  }


//cookie相关函数，创建cookie
function setCookie(key, value, time) {
  var date = new Date();
  date.setDate(date.getDate() + time);
  document.cookie = key + '=' + value + ';expires=' + date;
}


//cookie相关函数，获取cookie的value
function getCookie(key) {
  var cookies = document.cookie;
  var arry = cookies.split('; ');
  for (var i = 0; i < arry.length; i++) {
      var n_arry = arry[i].split('=');
      // console.log(n_arry);
      if (n_arry[0] == key) {
          return (n_arry[1]);
      }
  }
}





      function check_login()
      {
       var name=$("#user_name").val();
       var pass=$("#password").val();
       namesj=getCookie("username");
		   pwdsj=getCookie("password");
       if(name=="admin" && pass=="123"|| name==namesj && pass==pwdsj)
       {
    
        alert("登录成功！");
        $("#user_name").val("");
        $("#password").val("");
        setCookie("username",name, 7);
        setCookie("password",pass,7);
        $(".log1").text("欢迎你，"+userName);
       
       
       }
       else
       {
        alert("登录失败！");
       }
      }

      
      function check_register(){
        var name = $("#r_user_name").val();
        var pass = $("#r_password").val();
        if(name!="" && pass!="")
         {
          alert("创建成功！");
          $("#user_name").val("");
          $("#password").val("");
          var AccountValue = name;
			    var passwordValue = pass;
          setCookie("username",AccountValue, 7);
          setCookie("password",passwordValue,7);
          
         }
         else
         {
          alert("创建失败！");  
       
         }
      }
      $(function(){
        $("#create").click(function(){
          check_register();
          return false;
        })
        $("#login").click(function(){
          check_login();
          return false;
        })
        $('.message a').click(function () {
            $('form').animate({
                height: 'toggle',
                opacity: 'toggle'
            }, 'slow');
        });
      })
    
