"use client";

import { motion } from "framer-motion";
import {
  User,
  Award,
  MapPin,
  Calendar,
  Camera,
  Video,
  Edit3,
  Palette,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  const skills = [
    { name: "Adobe Premiere Pro", icon: Video, level: 95 },
    { name: "After Effects", icon: Edit3, level: 90 },
    { name: "Photoshop", icon: Palette, level: 85 },
    { name: "Lightroom", icon: Camera, level: 88 },
    { name: "DaVinci Resolve", icon: Video, level: 80 },
    { name: "Final Cut Pro", icon: Edit3, level: 75 },
  ];

  const experiences = [
    {
      title: "Freelance Video Editor",
      company: "Multiple Production Companies",
      duration: "2022 - Present",
      description:
        "Working with various clients on wedding videos, event coverage, and digital content creation.",
    },
    {
      title: "Content Creator",
      company: "YouTube & TikTok",
      duration: "2022 - Present",
      description:
        "Creating engaging short-form and long-form content for social media platforms.",
    },
    {
      title: "Photographer",
      company: "Vintage Africa Photography",
      duration: "2021 - 2022",
      description: "Specialized in event photography and portrait sessions.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate video editor, videographer, and photographer with over
            2 years of experience creating compelling visual content.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info with Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* Personal Image */}
              <div className="mb-8 text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src="/personal/image1.JPG"
                    alt="Behailu Mefkere - Video Editor"
                    fill
                    className="rounded-full object-contain shadow-lg"
                    sizes="(max-width: 768px) 192px, 192px"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Behailu Mefkere
                </h3>
                <p className="text-purple-600 font-medium">
                  Video Editor & Videographer
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Personal Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">
                    <strong>Name:</strong> Behailu Mefkere
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">
                    <strong>Location:</strong> Addis Ababa, Ethiopia
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">
                    <strong>Experience:</strong> 2+ Years
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">
                    <strong>Education:</strong> Diploma in Hardware Maintenance
                    and Networking
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  About My Work
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  I specialize in creating compelling visual stories through
                  video editing, photography, and content creation. With
                  expertise in Adobe Creative Suite and other professional
                  tools, I bring creative visions to life with attention to
                  detail and strong time management skills. My work spans from
                  wedding highlights to commercial content, always delivered
                  professionally and on time.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Skills */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <skill.icon className="w-4 h-4 text-purple-600" />
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Work Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-purple-600 pl-4"
                  >
                    <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                    <p className="text-purple-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
