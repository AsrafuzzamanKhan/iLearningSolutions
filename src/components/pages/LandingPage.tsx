import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ChevronRight, Users, Award, Clock, Star, ArrowRight, BookOpen, Zap, Globe, Building2, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface LandingPageProps {
  setCurrentPage: (page: string) => void;
  setSelectedCourse: (course: any) => void;
}

// Animated Counter Component
function AnimatedCounter({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
}

export function LandingPage({ setCurrentPage, setSelectedCourse }: LandingPageProps) {
  const courses = [
    {
      id: 1,
      title: 'Foundations of Project Management',
      price: 750,
      description: 'Master the fundamentals of project management with practical tools and techniques.',
      duration: '1 Day Intensive',
      students: 1234,
      rating: 4.8,
      category: 'Project Management',
      image: 'https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMHRlYW0lMjBwbGFubmluZ3xlbnwxfHx8fDE3NTc5ODEzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      title: 'Scrum Master Certified',
      price: 650,
      description: 'Become a certified Scrum Master and lead agile teams effectively.',
      duration: '2 Days',
      students: 890,
      rating: 4.9,
      category: 'Agile',
      image: 'https://images.unsplash.com/photo-1517916358207-1e49f666e851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2lsZSUyMHNjcnVtJTIwYm9hcmQlMjBtZWV0aW5nfGVufDF8fHx8MTc1Nzk4MTMxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      title: 'Six Sigma Green Belt',
      price: 380,
      description: 'Learn process improvement methodologies to drive organizational excellence.',
      duration: '3 Days',
      students: 567,
      rating: 4.7,
      category: 'Continuous Improvement',
      image: 'https://images.unsplash.com/photo-1600492515568-8868f609511e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaXglMjBzaWdtYSUyMHByb2Nlc3MlMjBpbXByb3ZlbWVudHxlbnwxfHx8fDE3NTc5ODEzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Learn online, face-to-face, or hybrid. Study at your own pace with 24/7 access to materials.'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Led by industry professionals like Dr. Nick Hadjinicolaou with 20+ years of experience.'
    },
    {
      icon: Award,
      title: 'Recognised Certifications',
      description: 'Globally recognised certifications that boost your career prospects and credibility.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'Tech Solutions Inc.',
      content: 'The Project Management course helped me advance my career in just 3 months. The practical approach made all the difference.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      company: 'Global Manufacturing',
      content: 'Six Sigma training transformed our processes. We achieved 30% efficiency improvement within 6 months.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Scrum Master',
      company: 'Innovation Labs',
      content: 'Best investment in my professional development. The certification opened doors to leadership roles.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Learn. <span className="gradient-text">Grow.</span> Lead.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
                >
                  Expert-led courses in Project Management, Strategy, and Continuous Improvement — 
                  empowering individuals and organisations to achieve more.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-6"
              >
                <Button
                  size="lg"
                  onClick={() => setCurrentPage('courses')}
                  className="gradient-bg text-white group w-full sm:w-auto"
                >
                  Browse Courses
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0">
                  <Card className="p-3 sm:p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-0 text-center space-y-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-primary">
                        <AnimatedCounter value={5000} suffix="+" />
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">Students</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-3 sm:p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-0 text-center space-y-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-primary">4.9/5</div>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">Rating</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-3 sm:p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-0 text-center space-y-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-primary">Global</div>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">Recognition</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Secondary Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                  <Button
                    variant="outline"
                    size="default"
                    onClick={() => setCurrentPage('courses')}
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    For Individuals
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                    onClick={() => setCurrentPage('organisations')}
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    For Organisations
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative order-first lg:order-last"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1753613648191-4771cf76f034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMG9ubGluZXxlbnwxfHx8fDE3NTc5Mzk5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern learning environment"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-lg shadow-lg p-2 sm:p-4 border"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <span className="font-medium text-xs sm:text-sm">50+ Courses</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-lg shadow-lg p-2 sm:p-4 border"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                  <span className="font-medium text-xs sm:text-sm">AI-Powered</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Why Choose iLearning Solutions?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine expert instruction with flexible learning to deliver results that matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="p-4 sm:p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 text-center space-y-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-12 sm:py-16 lg:py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">Our Impact</h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              Transforming careers and organisations worldwide through professional development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <Card className="p-6 sm:p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-0 space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                    <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    <AnimatedCounter value={50} suffix="+" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">Organisations Trained</h3>
                  <p className="text-sm sm:text-base text-white/80">
                    Helping companies transform their workforce capabilities
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <Card className="p-6 sm:p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-0 space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    <AnimatedCounter value={2000} suffix="+" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">Students Enrolled</h3>
                  <p className="text-sm sm:text-base text-white/80">
                    Professionals who have advanced their careers with us
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Start your learning journey with our most popular courses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg card-hover">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white text-primary text-xs sm:text-sm">{course.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{course.students}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">{course.title}</h3>
                        <p className="text-muted-foreground text-sm">{course.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="text-xl sm:text-2xl font-bold text-primary">${course.price}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">{course.duration}</div>
                        </div>
                        
                        <Button
                          onClick={() => {
                            setSelectedCourse(course);
                            setCurrentPage('course-detail');
                          }}
                          className="group text-sm sm:text-base"
                          size="sm"
                        >
                          <span className="hidden sm:inline">View Details</span>
                          <span className="sm:hidden">View</span>
                          <ChevronRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-8 sm:mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => setCurrentPage('courses')}
              className="group"
            >
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our graduates have to say.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-4 sm:p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-yellow-500" />
                      ))}
                    </div>
                    
                    <blockquote className="text-sm sm:text-base text-muted-foreground italic">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-3">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Ready to Transform Your Career?</h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of professionals who have advanced their careers with our 
              expert-led courses and globally recognised certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setCurrentPage('courses')}
                className="bg-white text-primary hover:bg-gray-100"
              >
                Start Learning Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setCurrentPage('contact')}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Talk to an Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hidden Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="hidden"
      >
      </motion.div>
    </div>
  );
}