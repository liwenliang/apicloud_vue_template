apicloud对应的前端项目脚手架，通过这个脚手架可以方便的使用vue语法开发apicloud项目

> npm install           安装依赖

> npm run dev           本地开发运行

> npm run dev:build     打包测试环境

> npm run build         打包正式环境

代码中使用了vueg作为转场动画的处理库：
- vueg根据url深度判断是入场还是离场，默认情况下我们进入
到某个页面认为他比当前有更深的目录层级，这种约定还是不错的

打包后将dist文件里的内容复制到apicloud项目里即可。

目前项目使用默认UI为MuseUI，如果不能满足需求完全可以把这个UI去掉。

注：

有时候apicloud会弹出js错误，需要关闭在config.xml文件里的debug配置
`<preference name="debug" value="false"/>`

