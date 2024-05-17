# 代理：vue.config.js
 `
 proxy: {
    host: "127.0.0.1", //代理服务器的主机地址
    port: 9000,  // 代理服务器的端口号

    <!-- 代理服务器的认证信息，包括用户名和密码。 -->
    auth: {
      username: "mikeymike",
      password: "rapunz3l"
    }
  },
 `
 # 请求数据：axios -post
 axios({  
  method: 'post',  
  url: '/user/12345',  
  data: {  
    firstName: 'Fred',  
    lastName: 'Flintstone'  
  },  
  headers: {  
    'Content-Type': 'application/json'  
  }  
})  
.then(function (response) {  
  // 处理响应数据  
  console.log(response.data);  
})  
.catch(function (error) {  
  // 处理错误  
  console.error(error);  
});

# 请求数据
axios({
  url:'目标资源地址'，
  params:{
    参数名：值 //参数名是后端给的
  }
}).then((result)=>{
  //对服务器返回的数据做后续处理
})
