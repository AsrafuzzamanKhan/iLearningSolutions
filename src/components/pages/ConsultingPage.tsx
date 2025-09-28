import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, CheckCircle, Users, Building2, Target, TrendingUp,
  Clock, MapPin, MessageSquare
} from 'lucide-react';

interface ConsultingPageProps {
  setCurrentPage: (page: string) => void;
}

export function ConsultingPage({ setCurrentPage }: ConsultingPageProps) {
  const services = [
    {
      id: 1,
      serviceName: 'Project Management Consulting',
      description: 'Strategic project setup & governance',
      format: 'Custom duration',
      pricing: 'Quote on request'
    },
    {
      id: 2,
      serviceName: 'Continuous Improvement Consulting',
      description: 'Lean Six Sigma integration',
      format: 'Workshop + follow-up',
      pricing: 'Quote on request'
    },
    {
      id: 3,
      serviceName: 'Agile Transformation',
      description: 'Complete organizational transformation to agile methodologies with coaching and training.',
      format: 'On-site Workshop',
      pricing: '$5,000 - $15,000'
    },
    {
      id: 4,
      serviceName: 'Process Improvement Assessment',
      description: 'Comprehensive analysis and optimization of business processes using Six Sigma principles.',
      format: 'On-site / Hybrid',
      pricing: '$3,000 - $8,000'
    },
    {
      id: 5,
      serviceName: 'Strategic Planning Workshop',
      description: 'Facilitated sessions to develop organizational strategy and roadmaps for digital transformation.',
      format: 'On-site Workshop',
      pricing: '$2,500 - $6,000'
    },
    {
      id: 6,
      serviceName: 'Change Management Consulting',
      description: 'Organizational change management consulting to ensure successful adoption of new processes.',
      format: 'Remote / On-site',
      pricing: 'Contact for Quote'
    },
    {
      id: 7,
      serviceName: 'Team Performance Coaching',
      description: 'Ongoing coaching and mentoring for project teams and leadership development programs.',
      format: 'Remote Coaching',
      pricing: '$150 - $300/hour'
    },
    {
      id: 8,
      serviceName: 'Risk Management Framework',
      description: 'Development and implementation of enterprise risk management frameworks and processes.',
      format: 'On-site / Remote',
      pricing: '$4,000 - $10,000'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Consultants',
      description: 'Work with industry-leading consultants with proven track records in transformation.'
    },
    {
      icon: Target,
      title: 'Tailored Solutions',
      description: 'Customized consulting approaches designed specifically for your organizational needs.'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'Focus on delivering tangible outcomes and measurable improvements to your business.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 sm:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Consulting Services</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your organization with expert consulting services in project management, 
              process improvement, and organizational change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Consulting?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Leverage our expertise to drive meaningful change in your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
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

      {/* Services Table */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Our Consulting Services</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive consulting solutions tailored to your organizational needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Mobile Card Layout */}
            <div className="block lg:hidden space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-4 sm:p-6 shadow-lg">
                    <CardContent className="p-0 space-y-3">
                      <h3 className="font-semibold text-primary text-lg">{service.serviceName}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <Badge variant="outline" className="text-xs sm:text-sm w-fit">
                          {service.format}
                        </Badge>
                        <div className="font-semibold text-primary text-sm sm:text-base">{service.pricing}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Desktop Table Layout */}
            <Card className="hidden lg:block overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-accent text-white">
                      <th className="px-4 lg:px-6 py-4 text-left font-semibold text-sm lg:text-base">Service Name</th>
                      <th className="px-4 lg:px-6 py-4 text-left font-semibold text-sm lg:text-base">Description</th>
                      <th className="px-4 lg:px-6 py-4 text-left font-semibold text-sm lg:text-base">Format</th>
                      <th className="px-4 lg:px-6 py-4 text-left font-semibold text-sm lg:text-base">Pricing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service, index) => (
                      <motion.tr
                        key={service.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`border-b hover:bg-blue-50 transition-colors ${
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }`}
                      >
                        <td className="px-4 lg:px-6 py-4">
                          <div className="font-semibold text-primary text-sm lg:text-base">{service.serviceName}</div>
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <div className="text-muted-foreground max-w-md text-sm lg:text-base">{service.description}</div>
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <Badge variant="outline" className="whitespace-nowrap text-xs lg:text-sm">
                            {service.format}
                          </Badge>
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <div className="font-semibold text-primary text-sm lg:text-base">{service.pricing}</div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Our Consulting Process</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach to delivering successful consulting engagements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your organization, challenges, and objectives through comprehensive assessment.',
                icon: MessageSquare
              },
              {
                step: '02',
                title: 'Analysis',
                description: 'Deep dive analysis of current state and identification of improvement opportunities.',
                icon: Target
              },
              {
                step: '03',
                title: 'Design',
                description: 'Development of tailored solutions and implementation roadmaps for your organization.',
                icon: Building2
              },
              {
                step: '04',
                title: 'Implementation',
                description: 'Hands-on support and guidance throughout the implementation and adoption phases.',
                icon: CheckCircle
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <Card className="p-4 sm:p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <process.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-accent">{process.step}</div>
                    <h3 className="text-lg sm:text-xl font-semibold">{process.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">{process.description}</p>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Ready to Transform Your Organization?</h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
              Get started with a consultation to discuss your specific needs and how we can help 
              achieve your organizational goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-primary hover:bg-gray-100"
              >
                Request Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setCurrentPage('organisations')}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                For Organisations
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}