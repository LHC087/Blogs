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
      { text: "首页", link: "/handbook/Home" },
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
        path: "/handbook/Home",
        collapsable: false, // 不折叠
        children: [{ title: "简介说明", path: "/handbook/Home" }],
      },
      {
        title: "实现步骤",
        path: "/handbook/StepsOne",
        collapsable: false, // 不折叠
        children: [
          { title: "创建GitHub仓库", path: "/handbook/StepsOne" },
          { title: "步骤二", path: "/handbook/StepsTwo" },
          { title: "步骤三", path: "/handbook/StepsThree" },
        ],
      },
    ],
  },
};
