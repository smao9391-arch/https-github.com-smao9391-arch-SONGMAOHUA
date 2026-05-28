import { blogPosts } from "@/lib/data";
import { FaCalendar, FaTag } from "react-icons/fa";
import { MdArrowRight } from "react-icons/md";

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            博客
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            分享AI创意、技术心得和行业洞察
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaCalendar size={16} className="text-purple-600 dark:text-purple-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString("zh-CN")}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 font-semibold">
                  <FaTag size={14} />
                  {post.category}
                </span>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  <MdArrowRight size={20} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-block px-8 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-bold rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-all"
          >
            查看所有文章
          </a>
        </div>
      </div>
    </section>
  );
}
