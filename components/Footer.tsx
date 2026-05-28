import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              联系方式
            </h3>
            <a
              href="mailto:790738808@qq.com"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <FaEnvelope size={20} />
              790738808@qq.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              导航
            </h3>
            <ul className="space-y-2">
              {["首页", "关于", "作品", "博客", "联系"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              社交媒体
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-slate-800 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {currentYear} 十里画辰. 版权所有。
          </p>
        </div>
      </div>
    </footer>
  );
}
