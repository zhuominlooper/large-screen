# 可视化航班大屏平台

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

## CI 部署

- travis login --github-token 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 --pro
- travis encrypt-file -r zhuominlooper/large-screen ~/.ssh/id_rsa --add --pro
