import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, TrendingUp, Users, Clock, Award, Building2, Target,
  CheckCircle, Star, BarChart3, Zap
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CaseStudiesPageProps {
  setCurrentPage: (page: string) => void;
}

export function CaseStudiesPage({ setCurrentPage }: CaseStudiesPageProps) {
  const partnerLogos = [
    { name: 'TechForward Solutions', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=center' },
    { name: 'InnovateNow Corp', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=center' },
    { name: 'Global Manufacturing Ltd', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=center' },
    { name: 'FinanceFirst Group', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=center' },
    { name: 'HealthCare Innovations', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=center' },
    { name: 'RetailMax Enterprises', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=center' }
  ];

  const caseStudies = [
    {
      id: 1,
      company: 'TechForward Solutions',
      industry: 'Technology',
      challenge: 'Poor project delivery times and team collaboration',
      solution: 'Agile Transformation Program with Scrum Master certification',
      results: [
        '40% reduction in project delivery time',
        '60% improvement in team satisfaction',
        '25% increase in project success rate',
        '50% reduction in rework and defects'
      ],
      duration: '3 months',
      teamSize: '45 participants',
      testimonial: {
        quote: "The agile transformation completely changed how we work. Our teams are more collaborative, and we're delivering value to customers faster than ever before.",
        author: "Sarah Chen",
        role: "VP of Engineering"
      },
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=400',
      metrics: [
        { label: 'Time to Market', improvement: '-40%', icon: Clock },
        { label: 'Team Satisfaction', improvement: '+60%', icon: Users },
        { label: 'Project Success', improvement: '+25%', icon: Target }
      ]
    },
    {
      id: 2,
      company: 'Global Manufacturing Ltd',
      industry: 'Manufacturing',
      challenge: 'Inefficient processes and quality control issues',
      solution: 'Six Sigma Green Belt certification and process improvement',
      results: [
        '35% reduction in manufacturing defects',
        '20% improvement in operational efficiency',
        '30% decrease in waste and rework',
        '$2.3M annual cost savings achieved'
      ],
      duration: '4 months',
      teamSize: '28 participants',
      testimonial: {
        quote: "The Six Sigma training gave our team the tools and mindset to systematically improve our processes. The results speak for themselves.",
        author: "Michael Rodriguez",
        role: "Operations Director"
      },
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=400',
      metrics: [
        { label: 'Defect Reduction', improvement: '-35%', icon: CheckCircle },
        { label: 'Efficiency Gain', improvement: '+20%', icon: TrendingUp },
        { label: 'Cost Savings', improvement: '$2.3M', icon: BarChart3 }
      ]
    },
    {
      id: 3,
      company: 'FinanceFirst Group',
      industry: 'Financial Services',
      challenge: 'Risk management gaps and compliance issues',
      solution: 'Risk Management Framework and Project Management training',
      results: [
        '90% improvement in risk identification',
        '50% reduction in compliance violations',
        '30% faster project delivery',
        '100% audit success rate'
      ],
      duration: '6 months',
      teamSize: '35 participants',
      testimonial: {
        quote: "Our risk management capabilities have been transformed. We now proactively identify and mitigate risks before they become issues.",
        author: "Emma Thompson",
        role: "Chief Risk Officer"
      },
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=400',
      metrics: [
        { label: 'Risk Identification', improvement: '+90%', icon: Award },
        { label: 'Compliance Violations', improvement: '-50%', icon: CheckCircle },
        { label: 'Audit Success', improvement: '100%', icon: Star }
      ]
    }
  ];

  const successMetrics = [
    { label: 'Average ROI Improvement', value: '40%', icon: TrendingUp },
    { label: 'Client Satisfaction Rate', value: '95%', icon: Star },
    { label: 'Project Success Increase', value: '35%', icon: Target },
    { label: 'Time to Value Reduction', value: '45%', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl font-bold">Success Stories & Case Studies</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how organizations across various industries have transformed their 
              capabilities and achieved remarkable results with our training programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Overall Impact Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aggregated results across all our corporate training engagements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
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
                      <metric.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary">{metric.value}</div>
                    <div className="text-muted-foreground">{metric.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Organizations */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Trusted by Leading Organizations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've partnered with organizations across diverse industries to deliver transformative results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <Card className="p-4 w-full h-20 border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0 h-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Detailed Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In-depth analysis of transformation journeys and measurable business outcomes.
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <ImageWithFallback
                        src={study.image}
                        alt={study.company}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="text-3xl font-bold mb-2">{study.company}</h3>
                          <Badge className="bg-white/20 text-white">{study.industry}</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-8 space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2 flex items-center">
                          <Target className="w-5 h-5 text-primary mr-2" />
                          Challenge
                        </h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          Solution
                        </h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center">
                          <TrendingUp className="w-5 h-5 text-accent mr-2" />
                          Key Metrics
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                          {study.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="text-center">
                              <div className="w-10 h-10 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-2">
                                <metric.icon className="w-5 h-5 text-white" />
                              </div>
                              <div className="text-xl font-bold text-primary">{metric.improvement}</div>
                              <div className="text-xs text-muted-foreground">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg">
                        <blockquote className="text-muted-foreground italic mb-3">
                          "{study.testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold">{study.testimonial.author}</div>
                            <div className="text-sm text-muted-foreground">{study.testimonial.role}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>Duration: {study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>Team: {study.teamSize}</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Consistent Results Across Industries</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our training programs deliver measurable improvements regardless of industry or organization size.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Process Efficiency', improvement: '25-40%', description: 'Average improvement in operational processes' },
              { title: 'Project Success Rate', improvement: '30-50%', description: 'Increase in successful project delivery' },
              { title: 'Team Satisfaction', improvement: '40-60%', description: 'Improvement in employee engagement' },
              { title: 'Cost Reduction', improvement: '15-35%', description: 'Reduction in operational costs' }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 text-center space-y-4">
                    <div className="text-3xl font-bold text-primary">{result.improvement}</div>
                    <h3 className="text-xl font-semibold">{result.title}</h3>
                    <p className="text-muted-foreground text-sm">{result.description}</p>
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
            <h2 className="text-4xl font-bold">Ready to Create Your Success Story?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join the organizations that have transformed their capabilities and achieved 
              remarkable results with our proven training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-primary hover:bg-gray-100"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setCurrentPage('corporate-training')}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                View Training Packages
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}