# 指令
https://v2.cn.vuejs.org/v2/guide/forms.html

v-bind === ：：属性可动态绑定
v-html ：解释为普通文本
v-if：条件
v-for：列表
v-on === @ ：事件 /
v-model ：双向绑定/表单

v-text
v-html.
v-show
v-if
v-else
v-else-if
v-for
v-on.
v-bind.
v-model.
v-slot
v-pre
v-cloak
v-once. 执行一次性地插值，当数据改变时，插值处的内容不会更新

# 特殊 attribute
key. :key="item.id"
ref
is
slot
slot-scope
scope

# 全局 API
Vue.extend
Vue.nextTick
Vue.set
Vue.delete
Vue.directive
Vue.filter
Vue.component. 注册或获取全局组件。注册还会自动使用给定的 id 设置组件的名称
Vue.use. 通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成：
Vue.mixin
Vue.compile
Vue.observable
Vue.version
# vue2生命周期钩子
beforeCreate
created. //created 钩子可以用来在一个实例被创建之后执行代码
beforeMount
mounted.
beforeUpdate
updated.
activated
deactivated
beforeDestroy
destroyed
errorCaptured

# uniapp 生命周期钩子
https://blog.csdn.net/sslcsq/article/details/108669451

## 应用生命周期（仅可在App.vue中监听）
1. onLaunch ：当 uni-app 初始化完成时触发（全局只触发一次）
App.vue里的onLaunch中option作用：获取用户进入小程序或退出小程序的场景值

2. onShow ：当 uni-app 启动，或从后台进入前台显示 //监听用户进入小程序
3. onHide :当 uni-app 从前台进入后台 //监听用户离开小程序
4. onError :当 uni-app 报错时触发
5. onUniNViewMessage :对 nvue 页面发送的数据进行监听

## 页面生命周期（在页面中添加）
1. onLoad （监听页面加载）
2. onShow （监听页面显示）
3. onReady （监听页面初次渲染完成）
4. onHide （监听页面隐藏）
5. onUnload :监听页面卸载
6. onResize :监听窗口尺寸变化
7. onPullDownRefresh :监听用户下拉动作，一般用于下拉刷新
在这里插入图片描述当页面中需要用到下拉刷新功能时，打开pages.json，在"globalStyle"里设置"enablePullDownRefresh":true
............

# API
https://v2.cn.vuejs.org/v2/api/#silent

#

`
export const login = (data) => {
	const sm2 = require('sm-crypto').sm2
	const publicKey =
		'04298364ec840088475eae92a591e01284d1abefcda348b47eb324bb521bb03b0b2a5bc393f6b71dabb8f15c99a0050818b56b23f31743b93df9cf8948f15ddb54'
	const encryptData = sm2.doEncrypt(data.password, publicKey, 1)
	data.password = encryptData
	return request._http(
		`${getApp().globalData.baseUrl}/login`,
		'post',
		data
	)
}

`
您提供的 `login` 函数是用于处理登录请求的，其中对密码进行了SM2加密，并随后通过POST请求发送到后端服务器。下面是该函数的详细解释：

### 函数定义

```javascript
export const login = (data) => {
  // ... 函数体 ...
}
```

这个函数被定义为一个箭头函数，并导出以供其他模块使用。它接受一个参数 `data`，通常是一个包含用户登录信息的对象（如账号和密码）。

### 导入依赖

```javascript
const sm2 = require('sm-crypto').sm2
```

这里导入了 `sm-crypto` 库中的 `sm2` 模块，用于后续的密码加密操作。

### 定义公钥

```javascript
const publicKey =
  '04298364ec840088475eae92a591e01284d1abefcda348b47eb324bb521bb03b0b2a5bc393f6b71dabb8f15c99a0050818b56b23f31743b93df9cf8948f15ddb54'
```

定义了一个SM2公钥，这个公钥用于加密密码。这个公钥应该是从某处获取的，可能是服务器提供的，或者存储在应用的某个配置文件中。

### 加密密码

```javascript
const encryptData = sm2.doEncrypt(data.password, publicKey, 1)
data.password = encryptData
```

使用 `sm2.doEncrypt` 方法对原始密码 `data.password` 进行加密，加密后得到的密文存储在 `encryptData` 变量中。然后，将加密后的密码替换原始的 `data.password`，这样在后续的请求中就会发送加密后的密码。

### 发送登录请求

```javascript
return request._http(
  `${getApp().globalData.baseUrl}/login`,
  'post',
  data
)
```

最后，函数发送一个POST请求到登录接口。请求URL是由基础URL（通过 `getApp().globalData.baseUrl` 获取）和固定的 `/login` 路径拼接而成。`request._http` 方法用于发送HTTP请求，并传入请求方法（'post'）、请求数据（加密后的 `data` 对象）。

### 注意事项

1. **安全性**：使用SM2算法对密码进行加密增加了数据传输的安全性，但请确保公钥的正确性和保密性。

2. **错误处理**：这个函数没有显示任何错误处理逻辑。在实际应用中，应该添加错误处理代码，以处理网络错误、加密错误等异常情况。

3. **依赖管理**：`sm-crypto` 和 `request`（或类似的HTTP库）需要作为项目依赖被安装和管理。

4. **全局状态**：`getApp().globalData.baseUrl` 依赖于全局应用状态来获取基础URL。这通常是在某种框架（如微信小程序）中常见的做法，但在其他环境中可能不适用。

5. **函数返回**：这个函数返回了 `request._http` 的调用结果，调用者可以据此处理登录请求的响应。

# 组件
Vue 组件都是 Vue 实例
当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入到 Vue 的响应式系统中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值