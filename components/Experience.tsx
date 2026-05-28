import { experience, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          工作经验
        </h2>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-20">
          {experience.map((job, index) => (
            <div
              key={job.id}
              className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-blue-600 rounded-l-2xl" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">公司</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {job.company}
                  </h3>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">职位</p>
                  <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                    {job.position}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">时间</p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {job.duration}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {job.description}
              </p>

              {job.achievements && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    主要成就：
                  </p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-purple-600 dark:text-purple-400 font-bold">
                          •
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            教育背景
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {edu.school}
                </h4>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                  {edu.major}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {edu.degree} • {edu.duration}
                </p>
                {edu.achievement && (
                  <p className="text-sm text-yellow-600 dark:text-yellow-400 font-semibold">
                    🎓 {edu.achievement}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
