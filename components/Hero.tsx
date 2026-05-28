"use client";

import Image from "next/image";
import { profileData } from "@/lib/data";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-slate-950 dark:via-purple-950/20 dark:to-blue-950/20 pt-16 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                你好，我是
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent block mt-2">
                  {profileData.name}
                </span>
              </h1>
              <p className="text-2xl text-purple-600 dark:text-purple-400 font-semibold mb-2">
                {profileData.title}
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-400 italic font-light">
                "{profileData.tagline}"
              </p>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
              {profileData.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all"
              >
                查看作品
              </a>
              <a
                href="https://pcnrv0hah2br.feishu.cn/docx/VZSFdQkWEouqwsxKYZncQZcpnWe?from=from_copylink"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-pink-600 dark:border-pink-400 text-pink-600 dark:text-pink-400 font-bold rounded-lg hover:bg-pink-50 dark:hover:bg-pink-950/20 transition-all"
              >
                完整作品集
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-bold rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-all"
              >
                联系我
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-3xl opacity-30 animate-pulse" />
              <Image
                src={profileData.avatar}
                alt={profileData.name}
                width={400}
                height={400}
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <MdKeyboardArrowDown size={32} className="text-purple-600 dark:text-purple-400" />
        </div>
      </div>
    </section>
  );
}
