# axios

## 使用 axios API

axios({
    url:'目标资源地址(协议/域名/端口：资源路径)',

    method:'请求方法'
        请求方法：
            get获取数据/
            post提交数据/
            put修改数据（全部）/
            delete删除数据/
            patch修改数据（部分）

    data：{ //提交数据
        参数名：
    }
    params:{  //请求数据
        参数名：值（后端给的）
    },
    
}).then((result)=>{
    //查询数据和绑定
})

##  
