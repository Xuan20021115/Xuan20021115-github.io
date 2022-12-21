

window.onload=function(){



$('#err1').hide();
$('#err2').hide();
$('#err3').hide();
$('#err4').hide();

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



$(function(){$("#div_add").click(function() {
  if(getCookie("username")==null){
    alert("请先登录后评论");
    window.location.href="login.html";
  }
            $('#adduse').show();
        })

        $("#cancle").click(function() {
            $('#adduse').hide();
        })
      })


function del(my){
 my.parentNode.parentNode.parentNode.removeChild(my.parentNode.parentNode);


}

function del1(my){
item=$(my).parent().parent();
num=item.attr("id");
localStorage.removeItem("username"+num);
localStorage.removeItem("time"+num);
localStorage.removeItem("feel"+num);
localStorage.removeItem("rank"+num);
localStorage.removeItem("content"+num);
location.reload();
// var web=localStorage.getItem("web");
// if(web==null || web==='') {
//             web = "[]"
//         }
//     var webJson = JSON.parse(web)
//     for(var i=0 ;i<webJson.length;i++)
//     {
//         if(webJson[i].id1 == num)
//         {
//             new_arr = webJson.splice(i, 1);
//             break
//         }
//     }
//     localStorage.setItem("web", JSON.stringify(webJson))
//     var cname="chat"+num;
//     window.localStorage.removeItem(cname);
//     item.remove();


 }

$(function(){
$("#save").click(function(){

  let title=document.getElementById("title");
  if(title.value.trim()==""){
    $('#err1').show();
   
  }

  if(document.getElementById("rank").validity.rangeOverflow){
    $('#err2').show();
    return false;
  }

let content2=document.getElementById("content");
if(content2.value.trim()==""){
  $('#err4').show();
  return false;
}
  
//计数
  var num0=localStorage.getItem("num");
  if(num0){
    var num=parseInt(num0)+1;
  }
  else{
    var num=0;
  }
  localStorage.setItem("num",num);


  var username=getCookie("username");
  localStorage.setItem("username"+num,"用户："+username);

  // var p1=document.createElement("p");
  // p1.appendChild(username);
  // var usermes=document.createElement("div");
  // usermes.classList.add("usermes");
  // usermes.appendChild(p1);

  //获取当前时间
  //小于10的拼接上0字符串
  function addZero(s) {
    return s < 10 ? ('0' + s) : s;
}

var date1 = new Date();
//年 getFullYear()：四位数字返回年份
var year = date1.getFullYear(); //getFullYear()代替getYear()
//月 getMonth()：0 ~ 11
var month = date1.getMonth() + 1;
//日 getDate()：(1 ~ 31)
var day = date1.getDate();
//时 getHours()：(0 ~ 23)
var hour = date1.getHours();
//分 getMinutes()： (0 ~ 59)
var minute = date1.getMinutes();
//秒 getSeconds()：(0 ~ 59)
var second = date1.getSeconds();

    var time = year + '-' + addZero(month) + '-' + addZero(day) + ' ' + addZero(hour) + ':' + addZero(minute) + ':' + addZero(second);
  
  localStorage.setItem("time"+num,time);
  // var p2=document.createElement("p");
  // p2.appendChild(date);
  // var div2=document.createElement("div");
  // div2.classList.add("date");
  // div2.appendChild(p2);

  // var rank=document.createTextNode("评分"+" "+document.add.rank.value+" ");
  localStorage.setItem("rank"+num,"评分"+" "+$('#rank').val());
  // var span=document.createElement("span");
  // span.classList.add("grade");
  // span.appendChild(rank);

  var obj=document.getElementsByName("feel");
  var i=0;
  for(i=0;i<obj.length;i++){
    if(obj[i].checked){
      // var felt=document.createTextNode(obj[i].value);
      localStorage.setItem("feel"+num,obj[i].value);
      break;
    }
 
  }
 

  
  // var span2=document.createElement("span");
  // span2.classList.add("feel");
  // span2.appendChild(felt);
  

  // var div3=document.createElement("div");
  // div3.classList.add("user");
  // div3.appendChild(usermes);
  // div3.appendChild(div2);
  // div3.appendChild(span);
  // div3.appendChild(span2);

  // var content=document.createTextNode(document.add.content.value);
  localStorage.setItem("content"+num,$('#content').val());
  // var span3=document.createElement("span");
  // span3.appendChild(content);

  // var delet=document.createTextNode("删除评论");
  // var button=document.createElement("button");
  // button.setAttribute("id","DEL");
  // button.setAttribute("class","DEL");
  // button.addEventListener("click",function del(){
  //   this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
  // });
  // button.appendChild(delet);
  
  // var div4=document.createElement("div");
  // div4.classList.add("commentcontent");
  // div4.appendChild(span3);
  // var br=document.createElement("br");
  // div4.appendChild(br);

  // div4.appendChild(button);
  // var div5=document.createElement("div");
  // div5.classList.add("comment");
  // div5.appendChild(div3);
  // div5.appendChild(div4);

  // var title=document.createTextNode(document.add.title.value);
  // var div=document.createElement("div");
  // div.classList.add("title");
  // div.appendChild(title);
  
  // var shortcomment=document.getElementById("comment");
  // shortcomment.appendChild(div5);





  $('#adduse').hide();
  $('#err1').hide();
$('#err2').hide();
$('#err3').hide();
$('#err4').hide();
  
  var form = document.getElementById("adduse");
  form.reset();
  location.reload();

  

})

})

$(function(){

$(document).ready(function(){
var num=parseInt(localStorage.getItem("num"));
for(var i=0;i<=num;i++){
  username=localStorage.getItem("username"+i);
  date=localStorage.getItem("time"+i);
  rank=localStorage.getItem("rank"+i);
  feel=localStorage.getItem("feel"+i);
  content=localStorage.getItem("content"+i);
  if(username!=null){
  $('#comment').append(
   '<div class="comment"'+'id="'+i+'">'+
    '<div class="user">'+
    '<div class="usermes"><p>'+username+'</p></div>'+
    
    '<div class="date"><p>'+date+'</p></div>'+
    '<span class="grade">'+rank+" "+'</span>'+
    '<span class="feel">'+feel+'</span>'+
    
    
    '</div>'+

  '<div class="commentcontent">'+
  '<p class="content">'+
    '<span>'+content+'</span>'+
   
  '</p>'+
'<br>'+
  
  '<button class="del" id="DEL" onclick="del1(this)">删除评论</button>'+
  
 '</div>'+
  
  
  
  '</div>'


  







  )
  }
}






})

})
