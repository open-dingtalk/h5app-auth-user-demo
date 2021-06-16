## h5app-auth-user-demo
> 钉钉用户授权获取用户信息，统一授权组件需要登陆[开发者后台](https://open-dev.dingtalk.com/)，申请**通讯录个人信息读权限**和**个人手机号信息**权限。
>
> **fronted**文件夹下是接入钉钉js-sdk，实现授权和取消授权功能获取authCode，之后使用npm run build打包，将打包好的静态资源放入backend子模块。
>
> **backend**子模块是用户授权后，使用authCode获取user_access_token,之后使用user_access_token获取用户信息功能，服务启动之后，可以在钉钉中访问服务(仅支持在钉钉中使用用户授权和取消授权功能)。

##### 申请个人手机号信息权限

![img](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/RNErEm4k2S2KW0jV/c5bb93ff04d14f8281b637437264905f2460.png)

##### 申请通讯录个人信息读取权限

![img](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/RNErEm4k2S2KW0jV/42805a9279204d9c98c0b605fe8c326a2460.png)



## Getting Started



### 克隆代码仓库到本地
git clone
```
https://github.com/open-dingtalk/h5app-auth-user-demo.git
```

### 修改后端服务域名&clientId&corpId

![img](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/RNErEm4k2S2KW0jV/6ec5fb1993df4d06a9b5c35e2489cf6b2460.png)

### 使用命令行安装依赖&打包

```txt
cd fronted/
```

![img](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/RNErEm4k2S2KW0jV/3649214819e947a2852628380b05b84a2460.png)

```txt
npm install
```

![img](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/RNErEm4k2S2KW0jV/b1c957a13774471dad7e997697ac6ebe2460.png)

```txt
npm run build
```

![img](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/RNErEm4k2S2KW0jV/787534cb80df4e1ea4b001498c3133e32460.png)

### 将打包好的静态资源文件放入后端服务

![img](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/RNErEm4k2S2KW0jV/007d4f9cab004616afddf803109b79af2460.png)

### 替换应用配置

![img](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/RNErEm4k2S2KW0jV/6e560e7afc9a434f8e659cf3859374cc2460.png)

### 启动项目使用钉钉访问服务

![img](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/RNErEm4k2S2KW0jV/01029527c5ab4ba2b0d296d2ae4f59772460.png)

![img](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/a/RNErEm4k2S2KW0jV/a328aed617334cc6ad2bd4de472289242460.png)

### 参考文档

1. ##### 个人授权js-sdk唤起，文档链接：https://developers.dingtalk.com/document/app/features

2. ##### 获取用户个人access_token，文档链接：https://developers.dingtalk.com/document/app/obtain-user-token

3. ##### 获取个人用户信息，文档链接：https://developers.dingtalk.com/document/app/dingtalk-retrieve-user-information

4. ##### 服务商解除授权，文档链接：https://developers.dingtalk.com/document/app/instructions-for-use
