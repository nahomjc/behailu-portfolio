"use client";

import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Diploma in Hardware Maintenance and Networking",
      institution: "Tegbared Polytechnic College",
      date: "2021",
      location: "Addis Ababa, Ethiopia",
      description:
        "Comprehensive technical education covering computer hardware maintenance, networking fundamentals, and system administration.",
      category: "Technical Education",
      icon: GraduationCap,
      color: "from-blue-600 to-purple-600",
      image: "/certficate/certificate1.jpg",
    },
    {
      id: 2,
      title: "Video Production & Editing Certification",
      institution: "Tom Videography & Photography School",
      date: "2022",
      location: "Addis Ababa, Ethiopia",
      description:
        "Professional training in video production, editing techniques, and post-production workflows using industry-standard software.",
      category: "Video Production",
      icon: Award,
      color: "from-purple-600 to-pink-600",
      image: "/certficate/certificate2.png",
    },
    {
      id: 3,
      title: "Photography & Visual Storytelling",
      institution: "Vintage Africa Photography School",
      date: "2022",
      location: "Addis Ababa, Ethiopia",
      description:
        "Advanced photography techniques, visual storytelling, and creative composition for professional photography.",
      category: "Photography",
      icon: Award,
      color: "from-green-600 to-blue-600",
      image: "/certficate/certificate3.png",
    },
  ];

  const skills = [
    "Adobe Premiere Pro",
    "After Effects",
    "Photoshop",
    "Lightroom",
    "DaVinci Resolve",
    "Final Cut Pro",
    "Color Grading",
    "Audio Editing",
    "Motion Graphics",
    "Visual Effects",
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Certifications</span> & Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and technical skills that demonstrate my
            expertise in video editing and content creation
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="certificate-card card-hover"
            >
              <div className="relative z-10">
                {/* Certificate Image */}
                <div className="mb-6">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden bg-white">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>

                <div
                  className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${cert.color} rounded-xl mb-6`}
                >
                  <cert.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm font-medium text-white/80">
                    {cert.category}
                  </span>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <span className="text-sm text-white/80">{cert.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {cert.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-white/90">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-sm">{cert.institution}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/90">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{cert.location}</span>
                  </div>
                </div>

                <p className="text-white/80 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proficient in industry-standard software and tools for
              professional video editing and content creation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Professional Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                2+ Years Experience
              </h4>
              <p className="text-gray-600">
                Professional video editing experience across multiple platforms
                and industries
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                50+ Projects
              </h4>
              <p className="text-gray-600">
                Successfully completed projects for various clients and
                production companies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                100% Satisfaction
              </h4>
              <p className="text-gray-600">
                Consistently delivering high-quality work that exceeds client
                expectations
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
