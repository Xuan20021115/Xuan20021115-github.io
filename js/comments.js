
  // 创建Router构造函数
  // currentHash为当前hash值，routes为路径对象
  function Router() {
      this.currentHash = '/';
      this.routes = {};
  }

  // 注册路径，每个路径对应一个回调函数。 
  Router.prototype.route = function (path, callback) {
      this.routes[path] = callback;
  }

  // 更新页面函数
  Router.prototype.refresh = function () {
      // #/green => /green
      this.currentHash = location.hash.slice(1) || '/';
      // 调用对应路径注册的更新函数
      this.routes[this.currentHash]();
  }

  // 初始化
  Router.prototype.init = function () {
      var self = this;
      window.addEventListener('load', function () {
          self.refresh();
      }, false);  

      window.addEventListener('hashchange', function () {
          self.refresh();
      });
  }



  var value;
  var value2;
  var url=location.href;
  var num=url.indexOf("#");
  value2=url.substr(num+1);
  value=url.substr(num+2);
  var path="json/"+value+".json";

  var title = document.querySelector(".title");
  var content=document.querySelector(".content");
  var date=document.querySelector(".date");

  window.Router = new Router();

  Router.route(value2, function () {
    
    $.get(path,function(com){
   
     
      $(".title").html(com.com.title);
      $(".content").html(com.com.content);
      $(".date").html(com.com.date);
    })
      
  });


  Router.init();

