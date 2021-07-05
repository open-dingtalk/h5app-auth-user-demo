## h5app-auth-user-demo
> 钉钉用户授权获取用户信息，统一授权组件需要登陆[开发者后台](https://open-dev.dingtalk.com/)，申请**通讯录个人信息读权限**和**个人手机号信息**权限。
>
> **fronted**文件夹下是接入钉钉js-sdk，实现授权和取消授权功能获取authCode，之后使用npm run build打包，将打包好的静态资源放入backend子模块。
>
> **backend**子模块是用户授权后，使用authCode获取user_access_token,之后使用user_access_token获取用户信息功能，服务启动之后，可以在钉钉中访问服务(仅支持在钉钉中使用用户授权和取消授权功能)。

##### 申请个人手机号信息权限

![img](https://img.alicdn.com/imgextra/i3/O1CN01Ob9ahn1d271YQHaAG_!!6000000003677-2-tps-2826-1136.png)

##### 申请通讯录个人信息读取权限

![img](https://img.alicdn.com/imgextra/i4/O1CN01A4Y2DI27qR12lifYu_!!6000000007848-2-tps-2870-934.png)



## Getting Started



### 克隆代码仓库到本地
git clone
```
https://github.com/open-dingtalk/h5app-auth-user-demo.git
```

### 修改后端服务域名&clientId&corpId

![img](https://img.alicdn.com/imgextra/i3/O1CN01Fxyg6F1PjFhyCzk34_!!6000000001876-2-tps-2368-1388.png)

### 使用命令行安装依赖&打包

```txt
cd fronted/
```

![img](https://img.alicdn.com/imgextra/i2/O1CN01jxPtVb1U9ax7tWtCt_!!6000000002475-2-tps-2850-658.png)

```txt
npm install
```

![img](https://img.alicdn.com/imgextra/i4/O1CN01CARq6g1CqUyEdpsdS_!!6000000000132-2-tps-2872-1290.png)

```txt
npm run build
```

![img](https://img.alicdn.com/imgextra/i4/O1CN01kLve9J26L0DUmoZUQ_!!6000000007644-2-tps-1910-876.png)

### 将打包好的静态资源文件放入后端服务

![img](https://img.alicdn.com/imgextra/i2/O1CN01drjW6i1EQy7twIHqQ_!!6000000000347-2-tps-1766-1002.png)

### 替换应用配置

![img](https://img.alicdn.com/imgextra/i4/O1CN01TAoIMJ1q4U55vhBSx_!!6000000005442-2-tps-1814-1032.png)

### 启动项目使用钉钉访问服务

![img](https://img.alicdn.com/imgextra/i2/O1CN011FkcHE1pt2B893Ehb_!!6000000005417-2-tps-1242-2208.png)

![img](https://img.alicdn.com/imgextra/i3/O1CN01OSsciI1X0qEO7JEuy_!!6000000002862-2-tps-1242-2208.png)

### 参考文档

1. ##### 个人授权js-sdk唤起，文档链接：https://developers.dingtalk.com/document/app/features

2. ##### 获取用户个人access_token，文档链接：https://developers.dingtalk.com/document/app/obtain-user-token

3. ##### 获取个人用户信息，文档链接：https://developers.dingtalk.com/document/app/dingtalk-retrieve-user-information

4. ##### 服务商解除授权，文档链接：https://developers.dingtalk.com/document/app/instructions-for-use
