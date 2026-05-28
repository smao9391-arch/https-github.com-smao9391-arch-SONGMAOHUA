"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            作品集
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            精选的AI视频制作和创意设计项目
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:border-purple-600 dark:hover:border-purple-400"
              }`}
            >
              {cat === "all" ? "全部" : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {project.year}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">
                  {project.category}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                {project.platform && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    📱 {project.platform}
                  </p>
                )}
                <a
                  href={project.videoUrl || "#"}
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-colors"
                >
                  查看详情
                  <FaExternalLinkAlt size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
