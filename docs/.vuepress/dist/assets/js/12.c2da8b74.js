(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{549:function(s,t,e){s.exports=e.p+"assets/img/stepstwo1.9ab56f36.png"},561:function(s,t,e){"use strict";e.r(t);var a=e(12),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"创建-vuepress-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-vuepress-项目"}},[s._v("#")]),s._v(" 创建 VuePress 项目")]),s._v(" "),a("h4",{attrs:{id:"前提条件-vuepress-需要-node-js-8-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件-vuepress-需要-node-js-8-6"}},[s._v("#")]),s._v(" 前提条件 VuePress 需要 Node.js >= 8.6")]),s._v(" "),a("h3",{attrs:{id:"_1-本地搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-本地搭建"}},[s._v("#")]),s._v(" 1. 本地搭建")]),s._v(" "),a("ol",[a("li",[s._v("在本地电脑克隆新建仓库的 git 地址，初始化项目")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone (git 地址）\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("进入一个目录，并安装依赖")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd Blogs # npm install -D vuepress\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("创建你的第一篇文档，VuePress 会以 docs 为文档根目录，所以这个 README.md 相当于主页：")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mkdir docs && echo '# Hello VuePress' > docs/README.md\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("在 package.json 中添加一些 scripts")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "scripts": {\n    "docs:dev": "vuepress dev docs",\n    "docs:build": "vuepress build docs"\n  }\n}\n')])])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("在本地启动服务器")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run docs:dev\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("VuePress 会在 http://localhost:8080 (opens new window) 启动一个热重载的开发服务器。")])]),s._v(" "),a("p",[a("code",[s._v("success [09:15:51] Build 28e606 finished in 312 ms! ( http://localhost:8080/Blogs/ )")])]),s._v(" "),a("h3",{attrs:{id:"_2-基础配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-基础配置"}},[s._v("#")]),s._v(" 2. 基础配置")]),s._v(" "),a("ol",[a("li",[s._v("整个项目结构是这样的")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(549),alt:"目录结构"}})]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("在文档目录下创建一个 .vuepress 目录，所有 VuePress 相关的文件都会被放在这里")])]),s._v(" "),a("p",[s._v("创建 config.js 文件设置基本配置")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('module.exports = {\n  title: "VuePress + Github Pages 搭建博客",   // 标题\n  description: "VuePress + Github Pages 搭建博客", // 说明\n  base: "/Blogs/",   // 路径名为 "/<REPO>/" 这里设置和git仓库名一致\n  theme: "reco",    // 更换主题 需要安装 vuepress-theme-rec （npm install vuepress-theme-reco --save-dev）\n  locales: {\n    "/": {\n      lang: "zh-CN",  // 设置语言\n    },\n  },\n  themeConfig: {   // 导航栏结构\n    subSidebar: "auto",  // 右侧开启目录结构\n    nav: [\n      { text: "首页", link: "/pages/Home" },\n      {\n        text: "LHC087",\n        items: [\n          {\n            text: "Github",\n            link: "https://github.com/LHC087",\n            target: "_blank",\n          },\n          {\n            text: "CSDN",\n            link: "https://blog.csdn.net/weixin_43829905",\n            target: "_blank",\n          },\n        ],\n      },\n    ],\n    sidebar: [    // 侧边栏结构\n      {\n        title: "简介",\n        path: "/pages/Home",\n        collapsable: false, // 不折叠\n        children: [{ title: "简介说明", path: "/pages/Home" }],\n      },\n      {\n        title: "实现步骤",\n        path: "/pages/StepsOne",\n        collapsable: false, // 不折叠\n        children: [\n          { title: "创建GitHub仓库", path: "/pages/StepsOne" },\n          { title: "创建 VuePress 项目", path: "/pages/StepsTwo" },\n          { title: "部署 GitHub Pages", path: "/pages/StepsThree" },\n        ],\n      },\n    ],\n  },\n};\n\n')])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("创建 pages 文件夹放置 md 文件（遵循 Markdown 的语法写文章）")])]),s._v(" "),a("p",[s._v("pages 文件夹下面放置自己写的文章，访问的路径在 config.js 里面配置对应的侧边栏或者是导航栏即可访问")]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("创建.gitignore 文件，内容如下，可以提交代码时不提交 node_modules 模块到 git 仓库上（此步骤可跳过）")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/node_modules\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("创建一个脚本文件：deploy.sh 用于部署代码到 git 仓库，注意修改一下对应的用户名和仓库名")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#!/usr/bin/env sh\n\n# 确保脚本抛出遇到的错误\nset -e\n\n# 生成静态文件\nnpm run docs:build\n\n# 进入生成的文件夹\ncd docs/.vuepress/dist\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n# 如果发布到 https://<USERNAME>.github.io/<REPO>\ngit push -f https://github.com/LHC087/Blogs.git master:gh-pages   // 打包后的文件直接放在gh-pages分支，在设置GitHub Pages时直接访问这个分支即可访问到打包后的静态资源文件了\ncd -\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);