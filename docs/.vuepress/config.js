module.exports = {
  title: "VuePress + Github Pages 搭建博客",
  description: "VuePress + Github Pages 搭建博客",
  base: "/Blogs/",
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/pages/Home" },
      {
        text: "LHC087",
        items: [
          {
            text: "Github",
            link: "https://github.com/LHC087",
            target: "_blank",
          },
          {
            text: "CSDN",
            link: "https://blog.csdn.net/weixin_43829905",
            target: "_blank",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "简介",
        path: "/pages/Home",
        collapsable: false, // 不折叠
        children: [{ title: "简介说明", path: "/pages/Home" }],
      },
      {
        title: "实现步骤",
        path: "/pages/StepsOne",
        collapsable: false, // 不折叠
        children: [
          { title: "创建GitHub仓库", path: "/pages/StepsOne" },
          { title: "创建 VuePress 项目", path: "/pages/StepsTwo" },
          { title: "部署 GitHub Pages", path: "/pages/StepsThree" },
        ],
      },
    ],
  },
};
