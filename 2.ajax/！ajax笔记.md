# axios

## 使用 axios API
axios({
1    url:'目标资源地址(协议/域名/端口：资源路径)',
2    method:'请求方法'
        <!-- 请求方法：
            get获取数据/
            post提交数据/
            put修改数据（全部）/
            delete删除数据/
            patch修改数据（部分） -->
3    data：{ //提交数据
        参数名：
    }
3    params:{  //请求数据
        参数名：值（后端给的）
    },
}).then((result)=>{
    //查询数据和绑定
})

## 提交数据：axios -post
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

## 请求数据-get
axios({
  url:'目标资源地址'，
  params:{
    参数名：值 //参数名是后端给的
  }
}).then((result)=>{
  //对服务器返回的数据做后续处理
})

# 请求体的值（发送给后端的数据）
网络=》fetch=>载荷

# 响应报文
响应行（状态行）网络状态码：网络=》fetch=>标头=》响应标头
响应体：返回的资源：网络=》fetch=>标头=》响应