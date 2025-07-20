"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Behailu's assistant. How can I help you today? You can ask about my video editing services, pricing, or availability.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const responses = {
    greeting: [
      "Hello! 👋 I'm Behailu's AI assistant. I'm here to help you with any questions about video editing, photography, or our services. What would you like to know?",
      "Hi there! 😊 Welcome to Behailu's portfolio. I can help you learn about our video editing services, pricing, or show you some of our work. What interests you?",
      "Hey! 🎬 Great to see you here. I'm here to answer any questions about Behailu's video editing and photography services. How can I assist you today?",
    ],
    services: [
      "Behailu offers a wide range of professional services:\n\n🎥 **Video Editing:**\n• Wedding videos & highlights\n• Event coverage & documentaries\n• Commercial content & advertisements\n• Social media content (YouTube, TikTok, Instagram)\n\n📸 **Photography:**\n• Wedding photography\n• Event photography\n• Portrait sessions\n• Product photography\n\n🎨 **Post-Production:**\n• Color grading & correction\n• Motion graphics & effects\n• Audio editing & mixing\n• Video optimization for different platforms",
      "Our comprehensive services include:\n\n🎬 **Video Production:**\n• Cinematic wedding videos\n• Corporate event coverage\n• Documentary filmmaking\n• Commercial advertisements\n\n📱 **Digital Content:**\n• YouTube video editing\n• TikTok & Instagram content\n• Social media optimization\n• Brand storytelling\n\n✨ **Creative Services:**\n• Color grading & enhancement\n• Motion graphics & animations\n• Audio post-production\n• Multi-platform optimization",
      "We specialize in:\n\n💒 **Wedding & Events:**\n• Wedding cinematography\n• Event documentation\n• Graduation ceremonies\n• Birthday celebrations\n\n📺 **Commercial Work:**\n• Product advertisements\n• Brand videos\n• Corporate presentations\n• Marketing content\n\n🎯 **Digital Media:**\n• YouTube content creation\n• Social media videos\n• Podcast editing\n• Educational content",
    ],
    pricing: [
      "Our pricing is competitive and project-based:\n\n💒 **Wedding Videos:**\n• Basic Package: $200-300\n• Standard Package: $400-600\n• Premium Package: $700-1000\n\n📹 **Event Coverage:**\n• Half-day: $150-250\n• Full-day: $300-500\n• Multi-day: Custom quote\n\n🎬 **Commercial Projects:**\n• Short ads (30-60s): $200-400\n• Long-form content: $500-1000+\n• Corporate videos: $300-800\n\n📱 **Social Media:**\n• Single video: $50-150\n• Content packages: $200-500\n\n*All prices are estimates. Contact us for detailed quotes!*",
      "Pricing varies by project type and complexity:\n\n🎥 **Video Editing:**\n• Simple edits: $50-150\n• Complex projects: $200-500\n• Full productions: $500-1000+\n\n📸 **Photography:**\n• Portrait sessions: $100-300\n• Event coverage: $200-500\n• Wedding photography: $300-800\n\n⏰ **Turnaround Time:**\n• Rush projects: +50% fee\n• Standard: 1-2 weeks\n• Complex: 2-4 weeks\n\n*We offer discounts for multiple projects and long-term clients!*",
      "Here's our pricing structure:\n\n💰 **Starting Prices:**\n• Basic video editing: $50\n• Wedding highlights: $200\n• Event coverage: $150\n• Commercial content: $300\n\n📦 **Package Deals:**\n• Wedding + Photography: $500-800\n• Event + Social Media: $300-600\n• Multiple videos: 20% discount\n\n🎯 **Custom Projects:**\n• Documentary films: $1000+\n• Brand campaigns: $500-2000\n• YouTube series: $200-500 per episode\n\n*Contact us for personalized quotes based on your specific needs!*",
    ],
    contact: [
      "Here's how to reach Behailu:\n\n📧 **Email:** behailumefkere@gmail.com\n📱 **Phone:** +251 912 345 678\n📍 **Location:** Addis Ababa, Ethiopia\n⏰ **Hours:** Monday-Saturday, 9AM-6PM\n\n💬 **Social Media:**\n• YouTube: @BehailuMefkere\n• Instagram: @behailu_media\n• TikTok: @behailu_edits\n\n*Response time: Usually within 2-4 hours during business hours!*",
      "Get in touch with us:\n\n📞 **Direct Contact:**\n• Phone: +251 912 345 678\n• WhatsApp: +251 912 345 678\n• Email: behailumefkere@gmail.com\n\n🏢 **Location & Hours:**\n• Address: Addis Ababa, Ethiopia\n• Available: Mon-Sat, 9AM-6PM\n• Emergency calls: Available 24/7\n\n📱 **Online Presence:**\n• Portfolio: This website\n• YouTube: Behailu Mefkere\n• Instagram: @behailu_media\n\n*We offer free consultations for new clients!*",
      "Contact information:\n\n📧 **Primary Contact:**\n• Email: behailumefkere@gmail.com\n• Phone: +251 912 345 678\n\n📍 **Service Area:**\n• Addis Ababa, Ethiopia\n• Available for travel\n• Remote work possible\n\n⏰ **Availability:**\n• Weekdays: 9AM-6PM\n• Saturdays: 9AM-4PM\n• Sundays: By appointment\n\n*We're always happy to discuss your project needs!*",
    ],
    availability: [
      "Current availability:\n\n📅 **Schedule:**\n• Monday-Friday: 9AM-6PM\n• Saturday: 9AM-4PM\n• Sunday: By appointment\n\n⏱️ **Project Timeline:**\n• Simple edits: 3-5 days\n• Wedding videos: 1-2 weeks\n• Complex projects: 2-4 weeks\n• Rush orders: +50% fee\n\n🎯 **Booking:**\n• Wedding season: March-December\n• Peak months: May-October\n• Advance booking recommended\n\n*We can accommodate urgent projects with notice!*",
      "Our availability and timelines:\n\n📆 **Working Hours:**\n• Weekdays: 9AM-6PM (EAT)\n• Saturdays: 9AM-4PM\n• Emergency calls: 24/7\n\n⏰ **Project Turnaround:**\n• Quick edits: 24-48 hours\n• Standard projects: 1-2 weeks\n• Wedding packages: 2-3 weeks\n• Complex productions: 3-4 weeks\n\n📝 **Booking Process:**\n• Free consultation first\n• 50% deposit required\n• Balance due on completion\n\n*We're currently accepting new projects!*",
      "Availability and scheduling:\n\n🕐 **Office Hours:**\n• Monday-Friday: 9AM-6PM\n• Saturday: 9AM-4PM\n• Sunday: Emergency only\n\n📋 **Current Status:**\n• Accepting new projects\n• Wedding season: Open\n• Commercial work: Available\n• Social media: Always open\n\n⏱️ **Delivery Times:**\n• Express: 24-48 hours (+100%)\n• Standard: 1-2 weeks\n• Premium: 2-3 weeks\n\n*Contact us to check specific availability for your project!*",
    ],
    portfolio: [
      "Check out Behailu's work:\n\n📺 **Video Portfolio:**\n• Wedding highlights in the portfolio section above\n• YouTube channel: @BehailuMefkere\n• Instagram: @behailu_media\n• TikTok: @behailu_edits\n\n🎬 **Featured Work:**\n• Cinematic wedding videos\n• Event coverage & documentaries\n• Commercial advertisements\n• Social media content\n\n💡 **Recent Projects:**\n• Ethiopian culture documentary\n• Wedding ceremony highlights\n• TikTok viral content\n• Brand promotional videos\n\n*All samples are available for viewing on this website and social media!*",
      "Explore our portfolio:\n\n🎥 **Video Samples:**\n• Browse the portfolio section above\n• YouTube: Behailu Mefkere channel\n• Instagram: @behailu_media\n• TikTok: @behailu_edits\n\n📸 **Photo Gallery:**\n• Wedding photography\n• Event coverage\n• Portrait sessions\n• Commercial shoots\n\n🌟 **Recent Highlights:**\n• Wedding cinematography\n• Documentary filmmaking\n• Social media content\n• Brand storytelling\n\n*We're constantly adding new work to our portfolio!*",
      "View our latest work:\n\n📱 **Online Portfolio:**\n• This website's portfolio section\n• YouTube: @BehailuMefkere\n• Instagram: @behailu_media\n• TikTok: @behailu_edits\n\n🎬 **Project Types:**\n• Wedding videos & highlights\n• Event coverage & documentaries\n• Commercial content & ads\n• Social media videos\n• Photography sessions\n\n💫 **Style:**\n• Cinematic storytelling\n• Modern editing techniques\n• Professional color grading\n• Engaging social media content\n\n*We'd be happy to show you specific examples based on your needs!*",
    ],
    experience: [
      "Behailu's experience and expertise:\n\n🎓 **Background:**\n• 2+ years professional experience\n• Specialized in video editing & cinematography\n• Trained in Adobe Creative Suite\n• Experience with multiple platforms\n\n🎬 **Skills:**\n• Adobe Premiere Pro (Expert)\n• Adobe After Effects (Advanced)\n• Adobe Photoshop (Intermediate)\n• Color grading & correction\n• Motion graphics & effects\n• Audio editing & mixing\n\n📈 **Growth:**\n• Started with wedding videos\n• Expanded to commercial work\n• Now specializing in social media content\n• Constantly learning new techniques\n\n*Always staying updated with latest editing trends and techniques!*",
      "Professional experience:\n\n⏰ **Timeline:**\n• 2+ years in video editing\n• 100+ projects completed\n• 50+ happy clients\n• Multiple wedding seasons\n\n🎯 **Specializations:**\n• Wedding cinematography\n• Event documentation\n• Commercial advertising\n• Social media content\n• Documentary filmmaking\n\n🛠️ **Technical Skills:**\n• Adobe Premiere Pro\n• Adobe After Effects\n• Adobe Photoshop\n• DaVinci Resolve\n• Motion graphics\n• Color grading\n\n*We bring creativity and technical expertise to every project!*",
      "Behailu's professional journey:\n\n📊 **Experience Stats:**\n• 2+ years professional editing\n• 50+ projects completed\n• 30+ satisfied clients\n• 100+ videos produced\n\n🎨 **Creative Expertise:**\n• Cinematic storytelling\n• Modern editing styles\n• Color grading mastery\n• Motion graphics design\n• Audio post-production\n• Multi-platform optimization\n\n📈 **Recent Focus:**\n• Wedding cinematography\n• Social media content\n• Commercial advertising\n• Documentary work\n\n*We combine technical skills with creative vision for outstanding results!*",
    ],
    equipment: [
      "Professional equipment and setup:\n\n📹 **Video Equipment:**\n• Canon EOS R6 (4K video)\n• DJI Ronin-S gimbal\n• Professional lighting setup\n• High-quality audio recording\n• Multiple lenses for different shots\n\n💻 **Editing Setup:**\n• High-performance computer\n• 4K editing capability\n• Professional monitors\n• Color-calibrated displays\n• Fast storage solutions\n\n🎧 **Audio Equipment:**\n• Professional microphones\n• Audio interface\n• Noise reduction tools\n• High-quality speakers\n\n*We invest in the best equipment to deliver professional results!*",
      "Our technical setup:\n\n🎥 **Cameras & Gear:**\n• Canon EOS R6 (4K/60fps)\n• DJI Ronin-S stabilizer\n• Professional lighting kit\n• Wireless audio system\n• Multiple camera angles\n\n🖥️ **Post-Production:**\n• High-end editing workstation\n• 4K video processing\n• Color grading monitors\n• Professional audio setup\n• Fast rendering capabilities\n\n📱 **Delivery:**\n• Multiple format outputs\n• Platform optimization\n• Quality assurance\n• Backup systems\n\n*Professional equipment ensures consistent, high-quality results!*",
      "Equipment and capabilities:\n\n📸 **Production Gear:**\n• Canon EOS R6 camera\n• DJI gimbal stabilizer\n• Professional lighting\n• High-quality audio\n• Multiple lenses\n\n💻 **Editing Capabilities:**\n• 4K video editing\n• Color grading suite\n• Motion graphics\n• Audio post-production\n• Multi-format export\n\n🎯 **Quality Standards:**\n• 4K video quality\n• Professional color grading\n• Crystal clear audio\n• Optimized for all platforms\n\n*We use professional-grade equipment for studio-quality results!*",
    ],
    process: [
      "Our creative process:\n\n📋 **Step 1: Consultation**\n• Free initial meeting\n• Discuss your vision\n• Understand requirements\n• Provide recommendations\n\n📝 **Step 2: Planning**\n• Create project timeline\n• Develop shot list\n• Plan locations & logistics\n• Set expectations\n\n🎬 **Step 3: Production**\n• Professional filming\n• Multiple camera angles\n• High-quality audio\n• Lighting setup\n\n✂️ **Step 4: Editing**\n• Rough cut review\n• Fine editing & effects\n• Color grading\n• Audio mixing\n\n🎯 **Step 5: Delivery**\n• Multiple format outputs\n• Platform optimization\n• Quality assurance\n• Client approval\n\n*We keep you involved throughout the entire process!*",
      "How we work:\n\n🤝 **Discovery Phase:**\n• Initial consultation\n• Project requirements\n• Style preferences\n• Timeline discussion\n\n📋 **Pre-Production:**\n• Detailed planning\n• Location scouting\n• Equipment preparation\n• Shot planning\n\n🎥 **Production:**\n• Professional filming\n• Multiple takes\n• Audio recording\n• Lighting setup\n\n✂️ **Post-Production:**\n• Rough cut review\n• Fine editing\n• Color correction\n• Final delivery\n\n*We ensure quality at every step of the process!*",
      "Our workflow:\n\n💬 **Consultation:**\n• Free initial meeting\n• Project discussion\n• Budget planning\n• Timeline setting\n\n📋 **Preparation:**\n• Detailed planning\n• Equipment setup\n• Location scouting\n• Shot list creation\n\n🎬 **Filming:**\n• Professional recording\n• Multiple angles\n• Quality audio\n• Proper lighting\n\n✂️ **Editing:**\n• Story assembly\n• Color grading\n• Audio mixing\n• Final polish\n\n*We maintain open communication throughout the project!*",
    ],
    default: [
      "I'm not sure about that specific question, but I can help you with:\n\n• Video editing services & pricing\n• Photography packages\n• Contact information\n• Portfolio & samples\n• Availability & booking\n• Equipment & process\n\nFeel free to ask about any of these topics, or reach out directly at behailumefkere@gmail.com for specific inquiries!",
      "That's not something I have specific information about, but I can help you with:\n\n🎥 Video editing services\n💰 Pricing information\n📞 Contact details\n📸 Portfolio samples\n📅 Availability\n🛠️ Our process\n\nTry asking about one of these topics, or contact us directly for personalized assistance!",
      "I don't have detailed information about that, but I can assist you with:\n\n• Our video editing services\n• Pricing and packages\n• Contact information\n• Portfolio examples\n• Booking and availability\n• Our creative process\n\nWhat would you like to know about? Or email us at behailumefkere@gmail.com for specific questions!",
    ],
  };

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey") ||
      message.includes("good morning") ||
      message.includes("good afternoon") ||
      message.includes("good evening")
    ) {
      return responses.greeting[
        Math.floor(Math.random() * responses.greeting.length)
      ];
    }

    if (
      message.includes("service") ||
      message.includes("what do you do") ||
      message.includes("offer") ||
      message.includes("work") ||
      message.includes("specialize")
    ) {
      return responses.services[
        Math.floor(Math.random() * responses.services.length)
      ];
    }

    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("how much") ||
      message.includes("rate") ||
      message.includes("fee") ||
      message.includes("charge")
    ) {
      return responses.pricing[
        Math.floor(Math.random() * responses.pricing.length)
      ];
    }

    if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("phone") ||
      message.includes("reach") ||
      message.includes("call") ||
      message.includes("message")
    ) {
      return responses.contact[
        Math.floor(Math.random() * responses.contact.length)
      ];
    }

    if (
      message.includes("available") ||
      message.includes("when") ||
      message.includes("time") ||
      message.includes("schedule") ||
      message.includes("booking")
    ) {
      return responses.availability[
        Math.floor(Math.random() * responses.availability.length)
      ];
    }

    if (
      message.includes("portfolio") ||
      message.includes("work") ||
      message.includes("sample") ||
      message.includes("example") ||
      message.includes("show") ||
      message.includes("see")
    ) {
      return responses.portfolio[
        Math.floor(Math.random() * responses.portfolio.length)
      ];
    }

    if (
      message.includes("experience") ||
      message.includes("years") ||
      message.includes("background") ||
      message.includes("skill") ||
      message.includes("expertise")
    ) {
      return responses.experience[
        Math.floor(Math.random() * responses.experience.length)
      ];
    }

    if (
      message.includes("equipment") ||
      message.includes("camera") ||
      message.includes("gear") ||
      message.includes("setup") ||
      message.includes("tools")
    ) {
      return responses.equipment[
        Math.floor(Math.random() * responses.equipment.length)
      ];
    }

    if (
      message.includes("process") ||
      message.includes("how do you") ||
      message.includes("workflow") ||
      message.includes("steps") ||
      message.includes("procedure")
    ) {
      return responses.process[
        Math.floor(Math.random() * responses.process.length)
      ];
    }

    return responses.default[
      Math.floor(Math.random() * responses.default.length)
    ];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Get the bot response
    const botResponseText = getResponse(inputValue);

    // Calculate typing duration based on response length (more realistic)
    const typingDuration = Math.min(
      Math.max(botResponseText.length * 20, 800),
      3000
    );

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, typingDuration);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Behailu&apos;s Assistant</h3>
                  <p className="text-xs opacity-90">Online • Ready to help</p>
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === "user"
                        ? "flex-row-reverse space-x-reverse"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-purple-600 to-blue-600"
                          : "bg-gray-200"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="w-3 h-3 text-white" />
                      ) : (
                        <Bot className="w-3 h-3 text-gray-600" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-2 ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">
                        {message.text}
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-white/70"
                            : "text-gray-500"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <Bot className="w-3 h-3 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200">
              {/* Quick Reply Buttons */}
              <div className="mb-3 flex flex-wrap gap-2">
                {[
                  "Services",
                  "Pricing",
                  "Contact",
                  "Portfolio",
                  "Availability",
                ].map((button) => (
                  <button
                    key={button}
                    onClick={() => {
                      setInputValue(button.toLowerCase());
                      setTimeout(() => {
                        handleSendMessage();
                      }, 100);
                    }}
                    className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-200"
                  >
                    {button}
                  </button>
                ))}
              </div>

              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
