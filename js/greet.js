$(function(){
  var userName=getCookie("username");
  $(".log1").text("欢迎你，"+userName);
}
);

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
