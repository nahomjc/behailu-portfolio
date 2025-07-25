"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink, Video, Camera, Edit3 } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All", icon: Video },
    { id: "wedding", name: "Wedding", icon: Camera },
    { id: "short-form", name: "Short-Form", icon: Edit3 },
    { id: "long-form", name: "Long-Form", icon: Video },
    { id: "event", name: "Event", icon: Camera },
    { id: "commercial", name: "Commercial", icon: Edit3 },
  ];

  const videos = [
    {
      id: 1,
      title: "Wedding Highlights - Cinematic Storytelling",
      category: "wedding",
      description:
        "Beautiful wedding ceremony highlights with emotional storytelling, cinematic shots, and professional color grading.",
      videoUrl: "https://youtu.be/JzxH5GyGW2A?si=uwpY2KseyNOl2m8Q",
      thumbnail: "/personal/image1.JPG",
      duration: "3:45",
      views: "2.5K",
    },
    {
      id: 2,
      title: "TikTok Viral Dance Challenge",
      category: "short-form",
      description:
        "Trending TikTok dance challenge with viral effects, smooth transitions, and engaging social media content.",
      videoUrl: "https://vm.tiktok.com/ZMSqthv1v/",
      thumbnail: "/personal/image2.JPG",
      duration: "0:30",
      views: "50K",
    },
    {
      id: 3,
      title: "Ethiopian Culture Documentary",
      category: "long-form",
      description:
        "Comprehensive documentary exploring Ethiopian traditions, cultural heritage, and modern life in Ethiopia.",
      videoUrl: "https://youtu.be/vS647awlPzw?si=GTBD7X7bccXDemE3",
      thumbnail: "/personal/image3.JPG",
      duration: "25:15",
      views: "8.2K",
    },
    {
      id: 4,
      title: "Graduation Ceremony Coverage",
      category: "event",
      description:
        "Professional graduation ceremony coverage with highlight reel, emotional moments, and polished editing.",
      videoUrl: "https://youtu.be/Gbh73tbD_A4?si=p2R64obUFqy0WWyT",
      thumbnail: "/personal/image1.JPG",
      duration: "8:20",
      views: "5.7K",
    },
    {
      id: 5,
      title: "Fashion Showcase Instagram Reel",
      category: "short-form",
      description:
        "Creative fashion showcase reel with trendy transitions, brand integration, and Instagram-optimized content.",
      videoUrl: "https://youtu.be/Fx59plUUW-0?si=PaX7PPppPm_1--By",
      thumbnail: "/personal/image2.JPG",
      duration: "0:45",
      views: "12K",
    },
    {
      id: 6,
      title: "Vintage Pixels Creative Agency",
      category: "commercial",
      description:
        "Professional brand showcase for Vintage Pixels creative agency featuring advertising and production services.",
      videoUrl: "https://youtu.be/adMETcDfnvI?si=yAHTgtDEKPWNQWWv",
      thumbnail: "/personal/image3.JPG",
      duration: "2:30",
      views: "3.1K",
    },
  ];

  const getYouTubeThumbnail = (videoUrl: string) => {
    // Handle TikTok videos differently
    if (videoUrl.includes("tiktok.com")) {
      console.log("TikTok video detected, using fallback thumbnail");
      return null; // Will use fallback thumbnail
    }

    const videoId = videoUrl.match(
      /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})/
    )?.[1];
    if (videoId) {
      console.log("YouTube video ID:", videoId);
      // Try different thumbnail qualities
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      console.log("YouTube thumbnail URL:", thumbnailUrl);
      return thumbnailUrl;
    }
    console.log("No video ID found for URL:", videoUrl);
    return null;
  };

  const getThumbnailSrc = (video: {
    videoUrl: string;
    thumbnail: string;
    title: string;
  }) => {
    const youtubeThumbnail = getYouTubeThumbnail(video.videoUrl);
    console.log(
      "Video:",
      video.title,
      "YouTube thumbnail:",
      youtubeThumbnail,
      "Fallback:",
      video.thumbnail
    );
    return youtubeThumbnail || video.thumbnail;
  };

  const filteredVideos =
    selectedCategory === "all"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Video <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my latest video editing projects showcasing various styles
            and techniques
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => handleVideoClick(video.videoUrl)}
            >
              <div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={getThumbnailSrc(video)}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      console.log("Image failed to load, using fallback");
                      const target = e.target as HTMLImageElement;
                      target.src = video.thumbnail;
                    }}
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="flex items-center justify-between text-white text-sm">
                      <span>{video.duration}</span>
                      <span>{video.views} views</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 mx-auto"
          >
            <ExternalLink className="w-5 h-5" />
            <span>View All Projects</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${
                  selectedVideo.match(
                    /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})/
                  )?.[1]
                }?autoplay=1`}
                title="Video Player"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
