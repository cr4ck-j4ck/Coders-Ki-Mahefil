"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  MessageCircle,
  Code,
  Zap,
  Star,
  ArrowRight,
  Github,
  Trophy,
  Calendar,
  Menu,
  X,
  Shield,
  Headphones,
  Gamepad2,
  BookOpen,
  Briefcase,
  GraduationCap,
  Target,
  Sparkles,
  Rocket,
  Heart,
  Award,
  TrendingUp,
  Globe,
  Coffee,
  Lightbulb,
  Instagram,
  Linkedin,
  Clock,
} from "lucide-react"
import { XLogo } from "@/components/x-logo"

export default function DiscordServerWebsite() {
  const [memberCount, setMemberCount] = useState(0)
  const [onlineCount, setOnlineCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("students")

  useEffect(() => {
    // Animate counters
    const memberTarget = 1247
    const onlineTarget = 89

    const animateCounter = (target: number, setter: (value: number) => void) => {
      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(current))
        }
      }, 30)
    }

    setTimeout(() => animateCounter(memberTarget, setMemberCount), 500)
    setTimeout(() => animateCounter(onlineTarget, setOnlineCount), 700)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const audienceFeatures = {
    students: [
      {
        icon: BookOpen,
        title: "Learn & Grow",
        description: "Access free coding tutorials, study groups, and mentorship from senior developers",
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Users,
        title: "Study Groups",
        description: "Join collaborative study sessions and work on projects with fellow students",
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: Trophy,
        title: "Competitions",
        description: "Participate in coding contests, hackathons, and win exciting prizes",
        color: "from-purple-500 to-pink-500",
      },
      {
        icon: Rocket,
        title: "Career Guidance",
        description: "Get resume reviews, interview prep, and job placement assistance",
        color: "from-orange-500 to-red-500",
      },
    ],
    clients: [
      {
        icon: Briefcase,
        title: "Find Talent",
        description: "Connect with skilled developers for your projects and business needs",
        color: "from-indigo-500 to-purple-500",
      },
      {
        icon: Target,
        title: "Quality Work",
        description: "Access vetted developers with proven track records and portfolios",
        color: "from-teal-500 to-blue-500",
      },
      {
        icon: Zap,
        title: "Fast Delivery",
        description: "Get your projects completed quickly with our efficient development process",
        color: "from-yellow-500 to-orange-500",
      },
      {
        icon: Shield,
        title: "Reliable Support",
        description: "24/7 support and maintenance for all your development projects",
        color: "from-red-500 to-pink-500",
      },
    ],
    professors: [
      {
        icon: GraduationCap,
        title: "Teaching Resources",
        description: "Access curriculum materials, coding exercises, and educational content",
        color: "from-violet-500 to-purple-500",
      },
      {
        icon: Users,
        title: "Student Engagement",
        description: "Connect with students, monitor progress, and provide guidance",
        color: "from-blue-500 to-indigo-500",
      },
      {
        icon: BookOpen,
        title: "Research Collaboration",
        description: "Collaborate on research projects and academic publications",
        color: "from-green-500 to-teal-500",
      },
      {
        icon: Award,
        title: "Recognition Platform",
        description: "Showcase student achievements and academic excellence",
        color: "from-amber-500 to-orange-500",
      },
    ],
    experts: [
      {
        icon: Lightbulb,
        title: "Share Knowledge",
        description: "Mentor upcoming developers and share your industry expertise",
        color: "from-cyan-500 to-blue-500",
      },
      {
        icon: Globe,
        title: "Network & Connect",
        description: "Build professional relationships with other industry experts",
        color: "from-emerald-500 to-green-500",
      },
      {
        icon: TrendingUp,
        title: "Stay Updated",
        description: "Keep up with latest tech trends and industry developments",
        color: "from-purple-500 to-violet-500",
      },
      {
        icon: Coffee,
        title: "Consulting Opportunities",
        description: "Offer consulting services and grow your professional network",
        color: "from-rose-500 to-pink-500",
      },
    ],
  }

  const stats = [
    { label: "Active Members", value: memberCount, icon: Users, color: "text-blue-400" },
    { label: "Online Now", value: onlineCount, icon: MessageCircle, color: "text-green-400" },
    { label: "Projects Shared", value: "500+", icon: Github, color: "text-purple-400" },
    { label: "Success Stories", value: "2.5K+", icon: Star, color: "text-yellow-400" },
  ]

  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "Lead Developer",
      avatar: "/placeholder.svg?height=120&width=120",
      bio: "Full-stack developer with 5+ years experience. Passionate about building communities and mentoring aspiring developers.",
      specialties: ["React", "Node.js", "Python"],
      icon: Shield,
      gradient: "from-blue-500 to-purple-500",
      social: {
        github: "https://github.com/arjunsharma",
        linkedin: "https://linkedin.com/in/arjunsharma",
        x: "https://x.com/arjunsharma",
        instagram: "https://instagram.com/arjunsharma",
      },
    },
    {
      name: "Priya Patel",
      role: "Founder & Frontend Developer",
      avatar: "/placeholder.svg?height=120&width=120",
      bio: "Expert in community building and event management. Loves connecting people and creating meaningful experiences.",
      specialties: ["Community", "Events", "Mentoring"],
      icon: Users,
      gradient: "from-pink-500 to-rose-500",
      social: {
        github: "https://github.com/priyapatel",
        linkedin: "https://linkedin.com/in/priyapatel",
        x: "https://x.com/priyapatel",
        instagram: "https://instagram.com/priyapatel",
      },
    },
    {
      name: "Rohit Kumar",
      role: "Frontend Developer",
      avatar: "/placeholder.svg?height=120&width=120",
      bio: "Backend specialist and competitive programmer. Always ready to help debug and solve complex problems.",
      specialties: ["Java", "DSA", "System Design"],
      icon: Code,
      gradient: "from-green-500 to-emerald-500",
      social: {
        github: "https://github.com/rohitkumar",
        linkedin: "https://linkedin.com/in/rohitkumar",
        x: "https://x.com/rohitkumar",
        instagram: "https://instagram.com/rohitkumar",
      },
    },
    {
      name: "Sneha Gupta",
      role: "Frontend & Security & AI Bot Expert",
      avatar: "/placeholder.svg?height=120&width=120",
      bio: "Organizes hackathons and workshops. Makes learning fun and engaging through creative event planning.",
      specialties: ["Events", "Workshops", "UI/UX"],
      icon: Calendar,
      gradient: "from-orange-500 to-yellow-500",
      social: {
        github: "https://github.com/snehagupta",
        linkedin: "https://linkedin.com/in/snehagupta",
        x: "https://x.com/snehagupta",
        instagram: "https://instagram.com/snehagupta",
      },
    },
    {
      name: "Vikash Singh",
      role: "Mentor & Senior Developer",
      avatar: "/placeholder.svg?height=120&width=120",
      bio: "Creates amazing Discord bots that make our server interactive and fun. Automation and API specialist.",
      specialties: ["Discord.js", "Automation", "APIs"],
      icon: Gamepad2,
      gradient: "from-cyan-500 to-blue-500",
      social: {
        github: "https://github.com/vikashsingh",
        linkedin: "https://linkedin.com/in/vikashsingh",
        x: "https://x.com/vikashsingh",
        instagram: "https://instagram.com/vikashsingh",
      },
    },
    {
      name: "Ananya Reddy",
      role: "Community Manager",
      avatar: "/placeholder.svg?height=120&width=120",
      bio: "Creates tutorials and educational content for the community. Passionate about making coding accessible to everyone.",
      specialties: ["Content", "Teaching", "Frontend"],
      icon: Headphones,
      gradient: "from-violet-500 to-purple-500",
      social: {
        github: "https://github.com/ananyareddy",
        linkedin: "https://linkedin.com/in/ananyareddy",
        x: "https://x.com/ananyareddy",
        instagram: "https://instagram.com/ananyareddy",
      },
    },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce website with user authentication, payment integration, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      author: "Arjun Sharma",
      githubUrl: "#",
      liveUrl: "#",
      category: "E-Commerce",
      featured: true,
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Social Media Dashboard",
      description: "A responsive dashboard for managing multiple social media accounts with analytics and scheduling.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      author: "Priya Patel",
      githubUrl: "#",
      liveUrl: "#",
      category: "Dashboard",
      featured: true,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Learning Management System",
      description: "An interactive LMS with course creation, progress tracking, and video streaming capabilities.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Prisma", "AWS"],
      author: "Ananya Reddy",
      githubUrl: "#",
      liveUrl: "#",
      category: "Educational",
      featured: true,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Portfolio Website Builder",
      description: "A drag-and-drop website builder specifically designed for creating developer portfolios.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      author: "Rohit Kumar",
      githubUrl: "#",
      liveUrl: "#",
      category: "Tools",
      featured: false,
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      title: "Real Estate Platform",
      description:
        "A comprehensive real estate website with property listings, virtual tours, and mortgage calculator.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Angular", "Spring Boot", "MySQL"],
      author: "Sneha Gupta",
      githubUrl: "#",
      liveUrl: "#",
      category: "Real Estate",
      featured: false,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Food Delivery App",
      description: "A full-featured food delivery web application with restaurant management and order tracking.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native Web", "Node.js", "MongoDB"],
      author: "Vikash Singh",
      githubUrl: "#",
      liveUrl: "#",
      category: "Food & Delivery",
      featured: false,
      gradient: "from-violet-500 to-purple-500",
    },
  ]

  const navigationItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Our Core Team", id: "team" },
    { name: "Our Projects", id: "projects" },
    { name: "Contact", id: "contact" },
    { name: "Join", id: "join" },
  ]

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/coderskimahfil",
      color: "hover:text-pink-400",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "X",
      icon: XLogo,
      url: "https://x.com/coderskimahfil",
      color: "hover:text-gray-300",
      gradient: "from-gray-800 to-black",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/coderskimahfil",
      color: "hover:text-blue-600",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/coderskimahfil",
      color: "hover:text-gray-300",
      gradient: "from-gray-600 to-gray-700",
    },
  ]

  const audienceTabs = [
    { id: "students", label: "Students", icon: GraduationCap, color: "text-blue-400" },
    { id: "clients", label: "Clients", icon: Briefcase, color: "text-green-400" },
    { id: "professors", label: "Professors", icon: BookOpen, color: "text-purple-400" },
    { id: "experts", label: "Experts", icon: Target, color: "text-orange-400" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Coders Ki Mahfil</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white transition-all duration-200 font-medium hover:scale-105 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Social Media Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-4 ml-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10 animate-in slide-in-from-top duration-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 mb-6 px-4 py-2 text-sm font-medium animate-bounce">
              <Sparkles className="w-4 h-4 mr-2" />🚀 Now with 1000+ Active Coders
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Welcome to
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent block animate-gradient">
                Coders Ki Mahefil
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The ultimate coding community for <span className="text-blue-400 font-semibold">Students</span>,{" "}
              <span className="text-green-400 font-semibold">Clients</span>,{" "}
              <span className="text-purple-400 font-semibold">Professors</span>, and{" "}
              <span className="text-orange-400 font-semibold">Experts</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#5865F2] to-[#4752C4] hover:from-[#4752C4] hover:to-[#3c4396] text-white px-12 py-6 text-xl group shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("join")}
            >
              <Heart className="mr-3 w-6 h-6 group-hover:animate-pulse" />
              Join Our Discord
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 text-white hover:bg-white/10 px-12 py-6 text-xl bg-transparent backdrop-blur-sm hover:border-white/40 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("about")}
            >
              <Lightbulb className="mr-3 w-6 h-6" />
              Learn More
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <stat.icon className={`w-8 h-8 text-white`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {typeof stat.value === "number" ? stat.value.toLocaleString() : stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Audience Tabs */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Perfect for Everyone</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're a student learning to code, a client seeking talent, a professor teaching, or an expert
              sharing knowledge - we have something special for you.
            </p>
          </div>

          {/* Audience Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {audienceTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Content Based on Active Tab */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audienceFeatures[activeTab as keyof typeof audienceFeatures].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Community Stats */}
          <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">Our Growing Community</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Founded in 2022 by passionate developers, Coders Ki Mahfil has evolved into India's most inclusive
                coding community. We bridge the gap between learning and industry, connecting students with
                opportunities and experts with the next generation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1">Est. 2022</Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-3 py-1">1000+ Members</Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1">24/7 Active</Badge>
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 px-3 py-1">All Levels</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Trophy className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">50+</h4>
                  <p className="text-gray-300">Hackathons Organized</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">200+</h4>
                  <p className="text-gray-300">Mentorship Sessions</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30 backdrop-blur-sm hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Code className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">500+</h4>
                  <p className="text-gray-300">Projects Shared</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30 backdrop-blur-sm hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">100+</h4>
                  <p className="text-gray-300">Success Stories</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Premium Team Section */}
      <section id="team" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-blue-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg shadow-purple-500/25">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Meet Our Amazing Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The passionate individuals who make our community thrive and ensure everyone has an incredible experience.
              Connect with them and be part of our journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
              >
                {/* Premium Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>

                <CardContent className="p-8 text-center relative z-10">
                  {/* Premium Avatar Section */}
                  <div className="relative mb-8">
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-2xl mx-auto mb-6 border-4 border-white/20 group-hover:border-white/40 transition-all duration-300 shadow-xl"
                    />
                  </div>

                  {/* Premium Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {member.name}
                      </h3>
                      <p
                        className={`text-lg font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-4`}
                      >
                        {member.role}
                      </p>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
                      {member.bio}
                    </p>

                    {/* Premium Specialties */}
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {member.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          className={`bg-gradient-to-r ${member.gradient} bg-opacity-20 text-white border-0 text-xs px-3 py-1 shadow-lg hover:scale-105 transition-transform`}
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    {/* Premium Social Media Links */}
                    <div className="flex justify-center space-x-3">
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 group/social"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="w-5 h-5 group-hover/social:animate-pulse" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group/social"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5 group-hover/social:animate-pulse" />
                      </a>
                      <a
                        href={member.social.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-gray-800 to-black rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 group/social"
                        aria-label={`${member.name}'s X`}
                      >
                        <XLogo className="w-5 h-5 group-hover/social:animate-pulse" />
                      </a>
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group/social"
                        aria-label={`${member.name}'s Instagram`}
                      >
                        <Instagram className="w-5 h-5 group-hover/social:animate-pulse" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Premium Call to Action */}
          <div className="text-center mt-20">
            <Card className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-xl max-w-3xl mx-auto hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Heart className="w-10 h-10 text-white animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Want to Join Our Team?
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  We're always looking for passionate individuals who want to make a difference in the coding community.
                  If you're interested in contributing, we'd love to hear from you!
                </p>
                <Button className="bg-gradient-to-r from-[#5865F2] to-[#4752C4] hover:from-[#4752C4] hover:to-[#3c4396] text-white px-10 py-4 text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 group">
                  <Users className="mr-3 w-6 h-6 group-hover:animate-pulse" />
                  Get In Touch
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Incredible Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the amazing projects built by our community members. From innovative web apps to cutting-edge
              solutions, our developers are constantly creating and innovating.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">🌟 Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden hover:scale-105"
                  >
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg`}>
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-6 h-6 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center`}
                          >
                            <Users className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-400">{project.author}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-400 hover:text-white p-2 hover:bg-white/10"
                          >
                            <Github className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-400 hover:text-white p-2 hover:bg-white/10"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Community Projects */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">🚀 Community Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-white">{project.title}</h4>
                        <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 text-xs shadow-lg`}>
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <Badge key={idx} className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">by {project.author}</span>
                        <div className="flex space-x-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-400 hover:text-white p-1 hover:bg-white/10"
                          >
                            <Github className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-400 hover:text-white p-1 hover:bg-white/10"
                          >
                            <ArrowRight className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 border-purple-500/30 backdrop-blur-sm max-w-2xl mx-auto hover:scale-105 transition-transform">
              <CardContent className="p-8">
                <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-4">Share Your Masterpiece</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Built something incredible? Share it with our community and inspire others!
                </p>
                <Button className="bg-gradient-to-r from-[#5865F2] to-[#4752C4] hover:from-[#4752C4] hover:to-[#3c4396] text-white px-8 py-3 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                  <Rocket className="mr-2 w-5 h-5" />
                  Submit Your Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Join Section */}
      <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl p-12 border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform">
            <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Join Our Family?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Take the next step in your coding journey. Join thousands of developers, students, and experts who are
              already part of our incredible community!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/25">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Click Join</h3>
                <p className="text-gray-400">Click the Discord button below</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Introduce Yourself</h3>
                <p className="text-gray-400">Tell us about your coding interests</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/25">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Start Your Journey</h3>
                <p className="text-gray-400">Begin your amazing coding adventure</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-[#5865F2] to-[#4752C4] hover:from-[#4752C4] hover:to-[#3c4396] text-white px-16 py-8 text-2xl group mb-6 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <Heart className="mr-3 w-8 h-8 group-hover:animate-pulse" />
              Join Discord Now
              <ArrowRight className="ml-3 w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-gray-400">
              <span className="text-green-400">✓</span> Free to join •<span className="text-green-400">✓</span> No spam
              •<span className="text-green-400">✓</span> Instant access •<span className="text-green-400">✓</span> 1000+
              active members
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg shadow-purple-500/25">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions, suggestions, or want to collaborate? We'd love to hear from you! Reach out through any of
              these channels and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Email Contact */}
            <Card className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  For all inquiries, support, partnerships, and collaborations
                </p>
                <a
                  href="mailto:coderskimahfi@gmail.com"
                  className="block text-blue-400 hover:text-blue-300 transition-colors font-medium text-lg group-hover:scale-105 transform transition-transform"
                >
                  coderskimahfi@gmail.com
                </a>
              </CardContent>
            </Card>

            {/* Discord Contact */}
            <Card className="bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-purple-500/10 border border-indigo-500/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/25">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Join Discord</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Connect with our community instantly</p>
                <Button className="bg-gradient-to-r from-[#5865F2] to-[#4752C4] hover:from-[#4752C4] hover:to-[#3c4396] text-white px-6 py-3 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 group/btn">
                  <Heart className="mr-2 w-5 h-5 group-hover/btn:animate-pulse" />
                  Join Server
                </Button>
              </CardContent>
            </Card>

            {/* Business Inquiries */}
            <Card className="bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 border border-green-500/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/25">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Business</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Partnerships, sponsorships, and collaborations</p>
                <a
                  href="mailto:coderskimahfi@gmail.com"
                  className="text-green-400 hover:text-green-300 transition-colors font-medium text-lg group-hover:scale-105 transform transition-transform block"
                >
                  coderskimahfi@gmail.com
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    Send us a Message
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-4 text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 group"
                    >
                      <Sparkles className="mr-3 w-6 h-6 group-hover:animate-pulse" />
                      Send Message
                      <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Response Time Info */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-8 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm">Usually responds within 2-4 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative bg-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Coders Ki Mahfil</span>
              </div>
              <p className="text-gray-400 mb-6 text-lg max-w-md">
                Building the future, one line of code at a time. Join our vibrant community of students, professionals,
                and experts.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Discord Server
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Code of Conduct
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Coders Ki Mahfil. All rights reserved.</p>
              <div className="flex space-x-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm"
                >
                  Privacy Policy
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm"
                >
                  Terms of Service
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm"
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Social Media Bar */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-3 border border-white/10">
          <div className="flex flex-col space-y-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg group`}
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="w-5 h-5" />
                <span className="absolute right-16 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
