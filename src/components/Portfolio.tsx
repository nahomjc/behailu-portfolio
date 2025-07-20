"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Play,
  Heart,
  Calendar,
  Youtube,
  Instagram,
  Film,
  Award,
} from "lucide-react";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Work", icon: Film },
    { id: "wedding", name: "Wedding Videos", icon: Heart },
    { id: "short-form", name: "Short-Form", icon: Instagram },
    { id: "long-form", name: "Long-Form", icon: Youtube },
    { id: "events", name: "Events", icon: Calendar },
  ];

  // Function to extract video ID and generate YouTube thumbnail
  const getYouTubeThumbnail = (url: string) => {
    const videoId = url.split("/embed/")[1];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const portfolioItems = [
    {
      id: "wedding-1",
      title: "Wedding Highlights - Beautiful Ceremony",
      category: "wedding",
      description:
        "Emotional wedding highlights with cinematic storytelling and beautiful color grading.",
      videoUrl: "https://www.youtube.com/embed/JzxH5GyGW2A",
      duration: "3:45",
      views: "2.5K",
      type: "Wedding Highlights",
    },
    {
      id: "short-1",
      title: "TikTok Dance Challenge",
      category: "short-form",
      description:
        "Viral TikTok content with trending effects and engaging transitions.",
      videoUrl: "https://www.youtube.com/embed/Fx59plUUW-0",
      duration: "0:30",
      views: "50K",
      type: "TikTok Video",
    },
    {
      id: "long-1",
      title: "Documentary - Ethiopian Culture",
      category: "long-form",
      description:
        "Cultural documentary exploring Ethiopian traditions and modern life.",
      videoUrl: "https://www.youtube.com/embed/vS647awlPzw",
      duration: "25:15",
      views: "8.2K",
      type: "Documentary",
    },
    {
      id: "event-1",
      title: "Event Coverage - Graduation Ceremony",
      category: "events",
      description:
        "Graduation ceremony coverage with highlight reel and professional editing.",
      videoUrl: "https://www.youtube.com/embed/Gbh73tbD_A4",
      duration: "8:20",
      views: "5.7K",
      type: "Event Coverage",
    },
    {
      id: "short-2",
      title: "Instagram Reel - Fashion Showcase",
      category: "short-form",
      description:
        "Fashion showcase reel with creative transitions and brand integration.",
      videoUrl: "https://www.youtube.com/embed/afX75HyS84o",
      duration: "0:45",
      views: "12K",
      type: "Instagram Reel",
    },
    {
      id: "long-2",
      title: "Podcast Episode - Tech Talk",
      category: "long-form",
      description:
        "Professional podcast editing with enhanced audio and visual elements.",
      videoUrl: "https://www.youtube.com/embed/adMETcDfnvI",
      duration: "45:30",
      views: "3.1K",
      type: "Podcast",
    },
    {
      id: "event-2",
      title: "Birthday Celebration Highlights",
      category: "events",
      description:
        "Birthday party highlights with fun transitions and music integration.",
      videoUrl: "https://www.youtube.com/embed/K3JniWTI4A0",
      duration: "4:15",
      views: "2.3K",
      type: "Event Video",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my best video editing work across different categories
            and styles
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              {/* Video Thumbnail */}
              <div
                className="relative group cursor-pointer"
                onClick={() => setSelectedVideo(item.videoUrl)}
              >
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={getYouTubeThumbnail(item.videoUrl)}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a default thumbnail if YouTube thumbnail fails
                      e.currentTarget.src = "/personal/image1.JPG";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-purple-600" />
                    </div>
                    <p className="text-sm text-white font-medium">
                      Click to Play
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {item.duration}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {item.views} views
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-purple-600">
                    {item.type}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Play className="w-4 h-4" />
                    <span className="text-sm">{item.views}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
              >
                ✕
              </button>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src={selectedVideo}
                  title="Video Player"
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
