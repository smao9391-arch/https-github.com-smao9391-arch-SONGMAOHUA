export const translations = {
  zh: {
    nav: {
      home: "首页",
      about: "关于",
      experience: "经验",
      projects: "作品集",
      blog: "博客",
      contact: "联系",
    },
    home: {
      greeting: "你好，我是",
      tagline: "心有猛虎，细嗅蔷薇",
      cta: "了解更多",
      scroll: "向下滚动探索",
    },
    about: {
      title: "关于我",
      bio: "专注于AI视频制作与创意设计，致力于探索AIGC在影视创意中的应用与创新。",
      skills: "核心技能",
    },
    experience: {
      title: "工作经验",
      duration: "时间",
      position: "职位",
    },
    projects: {
      title: "作品集",
      viewProject: "查看作品",
      category: "分类",
    },
    blog: {
      title: "博客",
      readMore: "阅读更多",
      date: "日期",
    },
    contact: {
      title: "联系我",
      name: "姓名",
      email: "邮箱",
      message: "消息",
      submit: "发送",
      success: "感谢您的消息，我会尽快回复！",
      error: "发送失败，请稍后重试",
    },
    footer: {
      copyright: "版权所有",
      rights: "保留所有权利",
    },
    theme: {
      light: "浅色",
      dark: "深色",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
    },
    home: {
      greeting: "Hi, I'm",
      tagline: "Fierce Tiger in Heart, Fragrant Rose in Soul",
      cta: "Learn More",
      scroll: "Scroll to explore",
    },
    about: {
      title: "About Me",
      bio: "Focused on AI video production and creative design, dedicated to exploring AIGC applications and innovations in film and television creativity.",
      skills: "Core Skills",
    },
    experience: {
      title: "Experience",
      duration: "Duration",
      position: "Position",
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
      category: "Category",
    },
    blog: {
      title: "Blog",
      readMore: "Read More",
      date: "Date",
    },
    contact: {
      title: "Get In Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send",
      success: "Thank you for your message, I'll get back to you soon!",
      error: "Failed to send, please try again later",
    },
    footer: {
      copyright: "Copyright",
      rights: "All rights reserved",
    },
    theme: {
      light: "Light",
      dark: "Dark",
    },
  },
};

export type TranslationKey = keyof typeof translations.zh;
