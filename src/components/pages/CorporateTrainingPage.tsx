import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, Users, Clock, Award, CheckCircle, Building2, Target,
  Presentation, FileText, Video, BookOpen
} from 'lucide-react';

interface CorporateTrainingPageProps {
  setCurrentPage: (page: string) => void;
}

export function CorporateTrainingPage({ setCurrentPage }: CorporateTrainingPageProps) {
  const packages = [
    {
      id: 1,
      name: 'Project Management Essentials',
      description: 'Comprehensive project management training covering fundamentals, planning, and execution.',
      duration: '3 Days',
      format: 'On-site / Virtual',
      teamSize: '8-20 participants',
      certification: 'PMI-certified',
      price: '$8,500 - $12,000',
      includes: [
        'Pre-training assessment',
        'Interactive workshops',
        'Digital toolkit and templates',
        'Individual certifications',
        'Post-training support (30 days)',
        'Progress tracking dashboard'
      ],
      modules: [
        'Project Fundamentals & Lifecycle',
        'Stakeholder Management',
        'Risk Assessment & Mitigation',
        'Team Leadership & Communication'
      ]
    },
    {
      id: 2,
      name: 'Agile Transformation Program',
      description: 'Complete organizational agile transformation with coaching, training, and implementation support.',
      duration: '6 Weeks',
      format: 'Hybrid',
      teamSize: '20-50 participants',
      certification: 'Scrum Alliance',
      price: '$25,000 - $45,000',
      includes: [
        'Organizational assessment',
        'Leadership coaching sessions',
        'Team training workshops',
        'Agile coaching support',
        'Custom framework development',
        'Transformation roadmap'
      ],
      modules: [
        'Agile Principles & Mindset',
        'Scrum Framework Implementation',
        'Leadership in Agile Organizations',
        'Scaling Agile Practices'
      ]
    },
    {
      id: 3,
      name: 'Six Sigma Excellence Program',
      description: 'Process improvement training using Six Sigma methodologies for operational excellence.',
      duration: '4 Days',
      format: 'On-site',
      teamSize: '10-25 participants',
      certification: 'Green Belt',
      price: '$12,000 - $18,000',
      includes: [
        'Process mapping workshop',
        'Statistical analysis training',
        'Project simulation exercises',
        'Green Belt certification',
        'Implementation mentoring',
        'ROI measurement framework'
      ],
      modules: [
        'DMAIC Methodology',
        'Statistical Process Control',
        'Lean Principles & Tools',
        'Project Management Integration'
      ]
    },
    {
      id: 4,
      name: 'Strategic Planning Workshop',
      description: 'Executive-level strategic planning facilitation and organizational alignment sessions.',
      duration: '2 Days',
      format: 'On-site',
      teamSize: '5-15 executives',
      certification: 'Completion Certificate',
      price: '$6,000 - $10,000',
      includes: [
        'Strategic assessment survey',
        'Facilitated planning sessions',
        'SWOT analysis workshop',
        'Action plan development',
        'Quarterly review sessions',
        'Strategic dashboard setup'
      ],
      modules: [
        'Vision & Mission Alignment',
        'Competitive Analysis',
        'Goal Setting & KPIs',
        'Implementation Planning'
      ]
    },
    {
      id: 5,
      name: 'Change Management Mastery',
      description: 'Comprehensive change management training for leaders and change agents.',
      duration: '3 Days',
      format: 'Virtual / On-site',
      teamSize: '12-30 participants',
      certification: 'PROSCI-aligned',
      price: '$9,000 - $15,000',
      includes: [
        'Change readiness assessment',
        'Leadership alignment session',
        'Communication strategy workshop',
        'Resistance management training',
        'Change measurement tools',
        'Implementation coaching'
      ],
      modules: [
        'Change Psychology & Behavior',
        'Stakeholder Engagement',
        'Communication Planning',
        'Sustaining Change'
      ]
    },
    {
      id: 6,
      name: 'Custom Enterprise Solution',
      description: 'Tailored training solution designed specifically for your organizational needs and challenges.',
      duration: 'Variable',
      format: 'Flexible',
      teamSize: 'Scalable',
      certification: 'Custom',
      price: 'Contact for Quote',
      includes: [
        'Comprehensive needs assessment',
        'Custom curriculum development',
        'Blended learning approach',
        'Executive coaching',
        'Long-term partnership',
        'Continuous improvement cycle'
      ],
      modules: [
        'Needs-based curriculum',
        'Industry-specific case studies',
        'Organizational integration',
        'Continuous learning path'
      ]
    }
  ];

  const deliveryMethods = [
    {
      title: 'On-site Training',
      description: 'Immersive training delivered at your location',
      icon: Building2,
      features: ['Face-to-face interaction', 'Team building focus', 'Custom environment', 'Immediate application']
    },
    {
      title: 'Virtual Training',
      description: 'Interactive online training sessions',
      icon: Video,
      features: ['Global accessibility', 'Cost-effective', 'Flexible scheduling', 'Digital collaboration']
    },
    {
      title: 'Hybrid Approach',
      description: 'Combination of on-site and virtual elements',
      icon: Target,
      features: ['Best of both worlds', 'Flexible participation', 'Extended learning', 'Ongoing support']
    }
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
            <h1 className="text-5xl font-bold">Corporate Training Packages</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive training solutions designed to transform your workforce capabilities 
              and drive organizational success through proven methodologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Delivery Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Flexible Delivery Options</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the delivery method that best fits your organization's needs and constraints.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryMethods.map((method, index) => (
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
                  <CardContent className="p-0 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{method.title}</h3>
                    <p className="text-muted-foreground">{method.description}</p>
                    <div className="space-y-2">
                      {method.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 justify-center">
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
        </div>
      </section>

      {/* Training Packages Table */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Training Package Offerings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive training packages designed for different organizational needs and skill levels.
            </p>
          </motion.div>

          <div className="space-y-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="p-6 border-b bg-gradient-to-r from-primary/5 to-accent/5">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                          <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                          <p className="text-muted-foreground mb-4">{pkg.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-accent" />
                              <span>{pkg.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Presentation className="w-4 h-4 text-accent" />
                              <span>{pkg.format}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4 text-accent" />
                              <span>{pkg.teamSize}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Award className="w-4 h-4 text-accent" />
                              <span>{pkg.certification}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center lg:text-right">
                          <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                          <Button
                            onClick={() => setCurrentPage('contact')}
                            className="w-full lg:w-auto"
                          >
                            Get Quote
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4 flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            What's Included
                          </h4>
                          <div className="space-y-2">
                            {pkg.includes.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-4 flex items-center">
                            <BookOpen className="w-5 h-5 text-primary mr-2" />
                            Training Modules
                          </h4>
                          <div className="space-y-2">
                            {pkg.modules.map((module, moduleIndex) => (
                              <div key={moduleIndex} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{module}</span>
                              </div>
                            ))}
                          </div>
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Training Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach to ensure successful training outcomes and lasting organizational impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Needs Assessment',
                description: 'Comprehensive evaluation of current capabilities and training requirements.',
                icon: Target
              },
              {
                step: '02',
                title: 'Custom Design',
                description: 'Tailored training program design based on organizational goals and constraints.',
                icon: FileText
              },
              {
                step: '03',
                title: 'Training Delivery',
                description: 'Expert-led training sessions with interactive workshops and practical exercises.',
                icon: Presentation
              },
              {
                step: '04',
                title: 'Follow-up Support',
                description: 'Ongoing support, coaching, and reinforcement to ensure knowledge retention.',
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
                <Card className="p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <process.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-accent">{process.step}</div>
                    <h3 className="text-xl font-semibold">{process.title}</h3>
                    <p className="text-muted-foreground text-sm">{process.description}</p>
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
            <h2 className="text-4xl font-bold">Ready to Invest in Your Team's Success?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Transform your organization's capabilities with our proven training programs. 
              Contact us to discuss your specific needs and get a customized proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-primary hover:bg-gray-100"
              >
                Request Proposal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setCurrentPage('case-studies')}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                View Success Stories
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}