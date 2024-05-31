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
  // 处理响应数据  服务器返回的数据，并进行进一步的处理。
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


# 解决方法的思路

## 渲染数据到页面
1. 准备容器（html）
2. 获取数据（接口）
3. 渲染数据（用遍历的方式map/forEach）

## 通过弹窗添加数据到列表
1. 新增弹窗->显示与隐藏
   1. 创建弹框对象
   2. 保存按钮->点击 -> 隐藏弹框 
2. 收集表单数据，并提交到服务器保存
   1. 提交服务器 
3. 添加成功后，重新请求并渲染图书列表
   1. 重置表单
   2. 隐藏弹框 

## 删除数据内容
1. 删除元素->点击(事件委托)
   1. 获取触发事件目标元素
   2. 判断点击的是删除元素
   3. 获取图书id(自定义属性id)
2. 调用删除接口=》(传递图书id)
3. 刷新图书列表



# F12
五、ajax
https://www.cnblogs.com/zhuzhubaoya/p/9758648.html



1.
Remote Address：这通常指的是与你的浏览器或客户端建立连接的远程服务器的IP地址。当你发起一个HTTP请求时，浏览器会尝试与这个IP地址上的服务器建立连接，并发送HTTP请求。在开发者工具的网络面板中，这个IP地址可能会显示在请求的详细信息中，帮助你了解请求被发送到了哪个具体的服务器。
2.
Referrer Policy: 是一种保护用户隐私和安全的策略，它在跨域请求时限制 Referer 头部的信息，而在同源请求时则发送完整的 URL 信息。



常见的请求头部字段

1.GET:
此方法用于请求指定的资源。GET请求应该安全且幂等，即多次执行相同的GET请求应该产生相同的结果。
2.POST:
此方法用于向指定的资源提交数据，以便根据所提供的数据创建/更新资源。POST请求不是幂等的，每次执行相同的POST请求可能会产生不同的结果。
3.PUT:
此方法用于完整地更新指定的资源。由于PUT请求是幂等的，多次执行相同的PUT请求应该产生相同的结果。
4.DELETE:
此方法用于删除指定的资源。
5.HEAD:
此方法与GET方法类似，只是服务器在响应中只返回HTTP头部，而不返回实际的数据。这用于检查资源的元数据
6.OPTIONS:
此方法用于获取指定的资源所支持的通信选项。这可以用于CORS(跨源资源共享)检查。
7.PATCH:
此方法用于对资源进行部分更新。
8.Host:
此头部字段指定请求的主机名和/或端口号。这是必需的，因为HTTP是一个基于TCP/IP的协议，没有主机名和端口号，服务器无法知道请求来自哪里。
9.User-Agent:
此头部字段提供了关于发送请求的应用程序或用户代理的信息。这可以包括浏览器的名称和版本、操作系统等信息,
10.Accept:
此头部字段指定客户端接受哪些类型的数据。例如，可以指定接受HTML、JSON、XML等格式的数据。
11.Content-fvpe;
此头部字段指定在POST或PUT请求中发送的数据的类型。例如，如果发送的是JSON数据，那么此头部字段应该设置为application/json。
12.Content-Length:
此头部字段指定POST或PUT请求中发送的数据的长度。
13.Cookie:
此头部字段包含由服务器发送的cookie信息，这些信息将在后续的请求中自动包含，以便服务器识别用户或保存状态信
息。
14.Authorization:
此头部字段用于向服务器提供身份验证信息，例如Bearer token或Basic authentication。
15.Referer:
此头部字段指定原始URL，即从哪个URL页面跳转到了当前页面。


header：{
"Authorization":包含了客户端提供的身份验证凭据，如用户名和密码、API 密钥或令牌。这允许服务器验证客户端的身份。
"Authorization":"用户名"+ this.token
}

