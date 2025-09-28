import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, Building2, Users, Award, TrendingUp, CheckCircle, 
  Target, Shield, Clock, MessageSquare, Lightbulb, Star
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface OrganisationsPageProps {
  setCurrentPage: (page: string) => void;
}

export function OrganisationsPage({ setCurrentPage }: OrganisationsPageProps) {
  const benefits = [
    {
      icon: Users,
      title: 'Workforce Development',
      description: 'Build critical capabilities across your organization with comprehensive training programs.'
    },
    {
      icon: TrendingUp,
      title: 'Measurable ROI',
      description: 'Track improvements in productivity, quality, and employee satisfaction with our metrics.'
    },
    {
      icon: Target,
      title: 'Customized Solutions',
      description: 'Tailored training programs designed specifically for your industry and organizational needs.'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Reduce project failures and operational risks through proven methodologies and best practices.'
    }
  ];

  const services = [
    {
      title: 'Corporate Training Packages',
      description: 'Comprehensive training solutions for teams of all sizes',
      features: ['On-site delivery', 'Custom curriculum', 'Group certifications', 'Progress tracking'],
      icon: Building2
    },
    {
      title: 'Executive Coaching',
      description: 'Leadership development for C-suite and senior management',
      features: ['1-on-1 coaching', 'Strategic planning', 'Change leadership', 'Performance coaching'],
      icon: Target
    },
    {
      title: 'Organizational Assessment',
      description: 'Evaluate current capabilities and identify improvement areas',
      features: ['Skills assessment', 'Process analysis', 'Culture evaluation', 'Roadmap development'],
      icon: CheckCircle
    }
  ];

  const stats = [
    { value: '50+', label: 'Organizations Trained', icon: Building2 },
    { value: '2000+', label: 'Professionals Certified', icon: Users },
    { value: '95%', label: 'Client Satisfaction', icon: Star },
    { value: '40%', label: 'Average ROI Improvement', icon: TrendingUp }
  ];

  const testimonials = [
    {
      quote: "iLearning Solutions transformed our project management capabilities. Their training helped us reduce project delivery time by 30% while improving quality.",
      author: "Sarah Chen",
      role: "VP Operations",
      company: "TechForward Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The agile transformation program was exactly what our organization needed. The team is now more collaborative and our time-to-market has improved significantly.",
      author: "Michael Rodriguez",
      role: "Chief Technology Officer",
      company: "InnovateNow Corp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Upskill Your <span className="gradient-text">Workforce</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl text-muted-foreground leading-relaxed"
                >
                  Transform your organization's capabilities with our comprehensive corporate training programs. 
                  From project management to process improvement, we deliver measurable results that drive business success.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => setCurrentPage('contact')}
                  className="gradient-bg text-white group"
                >
                  Request a Corporate Package
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setCurrentPage('case-studies')}
                >
                  View Case Studies
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex items-center space-x-6 text-sm text-muted-foreground"
              >
                <div className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-accent" />
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span>Certified Programs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>Flexible Delivery</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600492515568-8868f609511e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaXglMjBzaWdtYSUyMHByb2Nlc3MlMjBpbXByb3ZlbWVudHxlbnwxfHx8fDE3NTc5ODEzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Corporate training environment"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Achievement Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border"
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="font-medium text-sm">50+ Organizations</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border"
              >
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="font-medium text-sm">40% ROI Increase</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Organizations Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your organization's capabilities with proven training methodologies and expert guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <Card className="p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Corporate Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive training and development solutions tailored for organizational success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
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
            className="text-center mt-12"
          >
            <Button
              size="lg"
              onClick={() => setCurrentPage('corporate-training')}
              className="gradient-bg text-white group"
            >
              View Training Packages
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how organizations have transformed their capabilities with our training programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                      ))}
                    </div>
                    
                    <blockquote className="text-muted-foreground italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-3">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">
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
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Ready to Transform Your Organization?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Let's discuss how our corporate training solutions can help your organization 
              achieve its strategic objectives and drive business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-primary hover:bg-gray-100"
              >
                Request a Corporate Package
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setCurrentPage('case-studies')}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}