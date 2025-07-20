"use client";

import { motion } from "framer-motion";
import {
  Video,
  Camera,
  Edit3,
  Play,
  Instagram,
  Youtube,
  Heart,
  GraduationCap,
  Calendar,
  Film,
} from "lucide-react";

export default function Services() {
  const shortFormServices = [
    {
      title: "TikTok Videos",
      description:
        "Engaging short-form content optimized for TikTok platform with trending effects and transitions.",
      icon: Video,
      features: [
        "Trending Effects",
        "Viral Transitions",
        "Music Sync",
        "Engagement Optimization",
      ],
    },
    {
      title: "Instagram Reels",
      description:
        "Professional reels with creative transitions and engaging visual effects for Instagram.",
      icon: Instagram,
      features: [
        "Creative Transitions",
        "Visual Effects",
        "Brand Integration",
        "Storytelling",
      ],
    },
    {
      title: "YouTube Shorts",
      description:
        "Vertical video content optimized for YouTube Shorts with attention-grabbing intros.",
      icon: Youtube,
      features: [
        "Vertical Format",
        "Hook Intros",
        "SEO Optimization",
        "Thumbnail Design",
      ],
    },
    {
      title: "Promo Videos",
      description:
        "Compelling promotional content for businesses and products with professional editing.",
      icon: Play,
      features: [
        "Brand Messaging",
        "Call-to-Action",
        "Professional Quality",
        "Multi-Platform",
      ],
    },
    {
      title: "Wedding Highlights",
      description:
        "Beautiful wedding video highlights capturing the most precious moments of your special day.",
      icon: Heart,
      features: [
        "Emotional Storytelling",
        "Music Selection",
        "Color Grading",
        "Cinematic Style",
      ],
    },
  ];

  const longFormServices = [
    {
      title: "YouTube Full-Length Videos",
      description:
        "Complete video editing for long-form YouTube content with professional quality.",
      icon: Youtube,
      features: [
        "Full-Length Editing",
        "Thumbnail Design",
        "SEO Optimization",
        "Engagement Analysis",
      ],
    },
    {
      title: "Documentaries",
      description:
        "Professional documentary editing with narrative structure and compelling storytelling.",
      icon: Film,
      features: [
        "Narrative Structure",
        "Interview Editing",
        "B-Roll Integration",
        "Professional Narration",
      ],
    },
    {
      title: "Podcast Editing",
      description:
        "High-quality podcast editing with noise reduction and professional audio enhancement.",
      icon: Edit3,
      features: [
        "Audio Enhancement",
        "Noise Reduction",
        "Music Integration",
        "Episode Structure",
      ],
    },
    {
      title: "Online Course Videos",
      description:
        "Educational content editing for online courses with clear instruction and visual aids.",
      icon: GraduationCap,
      features: [
        "Educational Content",
        "Screen Recording",
        "Visual Aids",
        "Progress Tracking",
      ],
    },
    {
      title: "Wedding Videos",
      description:
        "Complete wedding video packages including ceremony, reception, and highlight films.",
      icon: Heart,
      features: [
        "Full Ceremony",
        "Reception Coverage",
        "Highlight Film",
        "Photo Integration",
      ],
    },
    {
      title: "Event Videos",
      description:
        "Professional event coverage for graduations, birthdays, and special celebrations.",
      icon: Calendar,
      features: [
        "Event Coverage",
        "Multi-Camera",
        "Highlight Reels",
        "Professional Audio",
      ],
    },
  ];

  const additionalServices = [
    {
      title: "Content Creation & Script Support",
      description:
        "Assistance with content planning, script writing, and creative direction for your projects.",
      icon: Edit3,
    },
    {
      title: "YouTube Thumbnails & Social Media Visuals",
      description:
        "Eye-catching thumbnails and social media graphics to increase engagement and views.",
      icon: Camera,
    },
    {
      title: "Freelance Photography & Videography",
      description:
        "On-location photography and videography services for events and special occasions.",
      icon: Camera,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive video editing and content creation services tailored
            to your needs
          </p>
        </motion.div>

        {/* Short-Form Video Editing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🔹 Short-Form Video Editing
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shortFormServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Long-Form Video Editing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🔸 Long-Form Video Editing
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {longFormServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🛠 Additional Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-600 to-slate-600 rounded-xl mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
