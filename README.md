# 可视化航班大屏平台设计

![build](https://app.travis-ci.com/zhuominlooper/large-screen.svg?branch=main&status=passed)
![check](https://camo.githubusercontent.com/831ccb38bc0ef2619739df5c5d298511046f5a7a32e5cb86b90a5770406e74fc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636865636b732d70617373696e672d627269676874677265656e)

![chat](https://camo.githubusercontent.com/029166d85f92969845201e59c3fcd8c8345556036155ff18140f6a9e796173a3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d677265656e)
![author](https://camo.githubusercontent.com/7110f6a14e704d4f606f82d03fc5bdcdc7a686b42e8e63e676b1f579a7a4f3d8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f617574686f722d6c6f6f7065722e7a68756f2d6f72616e6765)

**该平台采用了 echarts 和 echarts 社区的资源，展示了航班的可视化大屏数据呈现和航班的实时轨迹图，采用 flexible 做成响应式界面,axios 模拟获取远程数据进行渲染**

## 项目启动步骤

```javascript
1.npm i 或者yarn add
2.安装完成执行 npm run serve启动项目
3.浏览器打开 http://localhost:8080/
```

## 项目架构

- 项目框架版本
  > 采用 vue2 作为基本框架  
  > 采用 echarts4 的版本
- 需要的第三方库
  > axios 用来模拟真实请求数据  
  > elementUI 做加载资源的动画  
  > echarts4 进行数据的渲染  
  > flexible 做界面响应式

# 自动化部署方案

**思路：利用 travis ci 脚本实现项目打包，生成 docker 镜像，推送到阿里云私有 docker 仓库，再利用 docker-compose 进行拉去最新的镜像进行部署**

## 前期准备工作

1.在 github 平台生成一个 token 并保留下来，(怎么生成 github 链接 [点击](https://blog.csdn.net/chengwenyang/article/details/120060010))  
2.在阿里云平台创建镜像私有库，(怎么生成阿里云私有库 [点击](https://blog.csdn.net/qq_54928486/article/details/124259891))  
3.在服务器安装 travis ci，用于在 travis ci 平台做免密登录服务器  
4.了解 docker 镜像制作，nginx 代理静态资源

## 整体流程

**ci:**

1.提交代码到 main 分支  
2.触发自动化脚本打包生成静态文件  
3.利用 dockerfile 生成 docker 镜像  
4.推送镜像到私有仓库，更新 latest 镜像源

**cd：**

1.利用 docker-compose 拉取最新镜像  
2.生成最新镜像的运行  
3.访问页面

## 服务器配置

1. 安装 rvm,ruby 的管理器，由于 travis ci 是 ruby 编写，所以需要先安装 ruby，安装成功再安装 travis

```javascript
1.curl -L get.rvm.io | bash -s stable
2.source /home/soldier/.rvm/scripts/rvm
3.rvm install ruby-2.4.1
4.gem install travis
5.travis --version(1.11.1)
```

2. travis ci 平台免密码登录服务器(**难点**)

```javascript
1.mkdir travis-test && cd travis-test && touch .travis.yml
2.travis login --github-token ghp_rlXenwUs42ruvDGqojHDaWxxx(github的token) --pro
3.travis encrypt-file ~/.ssh/id_rsa --add --org,对服务器的私钥加密，如果服务器没有id_rsa私钥，ssh-keygen -t rsa，一直回车就能生成密钥和公钥
4.执行完私钥加密后会生成id_rsa.enc文件，需要拷贝到项目根目录下
5.travis encrypt-file -r 作者/仓库名(Octoveau/sso-admin-portal) ~/.ssh/id_rsa --add --pro
6.此时.travis.yml会生成一段文本，注意需要把转义符‘/’去掉如下
before_install:
- openssl aes-256-cbc -K $encrypted_9b2d7e19d83c_key -iv $encrypted_9b2d7e19d83c_iv
  -in id_rsa.enc -out ~\/.ssh/id_rsa -d
7.把该段文本拷贝到自己项目的.travis.yml中，用来ssh免密登录
8.至此服务器的操作就完成了，主要就是配置ssh免密登录操作
```
