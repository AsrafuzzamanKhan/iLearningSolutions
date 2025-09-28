import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  FileText, ExternalLink, Video, Download, BookOpen, FileSpreadsheet,
  Presentation, Link as LinkIcon, ArrowRight
} from 'lucide-react';

interface ResourcesPageProps {
  setCurrentPage: (page: string) => void;
}

export function ResourcesPage({ setCurrentPage }: ResourcesPageProps) {
  const resources = [
    {
      id: 1,
      resourceName: 'Project Management Fundamentals Guide',
      link: '#',
      category: 'Article',
      type: 'document',
      description: 'Comprehensive guide covering the basics of project management principles and methodologies.'
    },
    {
      id: 2,
      resourceName: 'Agile Project Planning Template',
      link: '#',
      category: 'Template',
      type: 'spreadsheet',
      description: 'Ready-to-use Excel template for agile project planning and sprint management.'
    },
    {
      id: 3,
      resourceName: 'Six Sigma DMAIC Methodology',
      link: 'https://example.com/six-sigma',
      category: 'Tool',
      type: 'external',
      description: 'Interactive tool for implementing Six Sigma DMAIC process improvement methodology.'
    },
    {
      id: 4,
      resourceName: 'Risk Management Framework Video',
      link: '#',
      category: 'Video',
      type: 'video',
      description: 'Educational video explaining enterprise risk management frameworks and best practices.'
    },
    {
      id: 5,
      resourceName: 'Stakeholder Analysis Worksheet',
      link: '#',
      category: 'Template',
      type: 'document',
      description: 'Structured worksheet for conducting thorough stakeholder analysis and engagement planning.'
    },
    {
      id: 6,
      resourceName: 'Change Management Presentation',
      link: '#',
      category: 'Presentation',
      type: 'presentation',
      description: 'PowerPoint presentation covering organizational change management strategies.'
    },
    {
      id: 7,
      resourceName: 'Quality Management Standards Guide',
      link: 'https://example.com/quality-standards',
      category: 'Article',
      type: 'external',
      description: 'External resource covering ISO quality management standards and implementation.'
    },
    {
      id: 8,
      resourceName: 'Team Performance Metrics Dashboard',
      link: '#',
      category: 'Template',
      type: 'spreadsheet',
      description: 'Excel dashboard template for tracking and analyzing team performance metrics.'
    },
    {
      id: 9,
      resourceName: 'Strategic Planning Workshop Kit',
      link: '#',
      category: 'Tool',
      type: 'document',
      description: 'Complete toolkit for facilitating strategic planning workshops and sessions.'
    },
    {
      id: 10,
      resourceName: 'Process Improvement Case Studies',
      link: '#',
      category: 'Article',
      type: 'document',
      description: 'Collection of real-world case studies demonstrating successful process improvements.'
    },
    {
      id: 11,
      resourceName: 'Agile Retrospective Techniques Video Series',
      link: '#',
      category: 'Video',
      type: 'video',
      description: 'Video series covering various agile retrospective techniques and facilitation methods.'
    },
    {
      id: 12,
      resourceName: 'Budget Planning and Control Template',
      link: '#',
      category: 'Template',
      type: 'spreadsheet',
      description: 'Comprehensive Excel template for project budget planning and financial control.'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'document':
        return FileText;
      case 'external':
        return ExternalLink;
      case 'video':
        return Video;
      case 'spreadsheet':
        return FileSpreadsheet;
      case 'presentation':
        return Presentation;
      default:
        return LinkIcon;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Article':
        return 'bg-blue-100 text-blue-800';
      case 'Template':
        return 'bg-green-100 text-green-800';
      case 'Tool':
        return 'bg-purple-100 text-purple-800';
      case 'Video':
        return 'bg-red-100 text-red-800';
      case 'Presentation':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const categories = [
    {
      name: 'Articles',
      description: 'In-depth guides and best practices',
      icon: FileText,
      count: resources.filter(r => r.category === 'Article').length
    },
    {
      name: 'Templates',
      description: 'Ready-to-use project templates',
      icon: FileSpreadsheet,
      count: resources.filter(r => r.category === 'Template').length
    },
    {
      name: 'Tools',
      description: 'Interactive tools and frameworks',
      icon: BookOpen,
      count: resources.filter(r => r.category === 'Tool').length
    },
    {
      name: 'Videos',
      description: 'Educational video content',
      icon: Video,
      count: resources.filter(r => r.category === 'Video').length
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
            <h1 className="text-5xl font-bold">Resources & Tools</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our comprehensive library of resources, templates, and tools to support 
              your professional development and project success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Resource Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our organized collection of professional development resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <p className="text-muted-foreground text-sm">{category.description}</p>
                      <Badge variant="secondary">{category.count} Resources</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Table */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Complete Resource Library</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our full collection of resources to enhance your professional skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-accent text-white">
                      <th className="px-6 py-4 text-left font-semibold">Resource Name</th>
                      <th className="px-6 py-4 text-left font-semibold">Category</th>
                      <th className="px-6 py-4 text-left font-semibold">Type</th>
                      <th className="px-6 py-4 text-left font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resources.map((resource, index) => {
                      const IconComponent = getIcon(resource.type);
                      return (
                        <motion.tr
                          key={resource.id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.05 }}
                          className={`border-b hover:bg-blue-50 transition-colors group ${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          }`}
                        >
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              <div className="font-semibold text-primary group-hover:text-accent transition-colors">
                                {resource.resourceName}
                              </div>
                              <div className="text-sm text-muted-foreground max-w-md">
                                {resource.description}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <Badge className={getCategoryColor(resource.category)}>
                              {resource.category}
                            </Badge>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <IconComponent className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground capitalize">
                                {resource.type}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <Button
                              size="sm"
                              variant="outline"
                              className="group-hover:bg-primary group-hover:text-white transition-colors"
                              onClick={() => {
                                if (resource.type === 'external') {
                                  window.open(resource.link, '_blank');
                                } else {
                                  // Handle internal resource download/view
                                  console.log('Accessing resource:', resource.resourceName);
                                }
                              }}
                            >
                              {resource.type === 'external' ? (
                                <>
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Visit
                                </>
                              ) : (
                                <>
                                  <Download className="w-4 h-4 mr-2" />
                                  Download
                                </>
                              )}
                            </Button>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How to Use These Resources</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Make the most of our resource library with these helpful tips.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Browse by Category',
                description: 'Use the category badges to filter resources by type: Articles, Templates, Tools, or Videos.',
                icon: BookOpen
              },
              {
                step: '2',
                title: 'Download Templates',
                description: 'Download ready-to-use templates and customize them for your specific project needs.',
                icon: Download
              },
              {
                step: '3',
                title: 'Apply in Practice',
                description: 'Implement the frameworks and methodologies in your real-world projects and initiatives.',
                icon: ArrowRight
              }
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <Card className="p-6 h-full border-0 shadow-lg">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <tip.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-accent">{tip.step}</div>
                    <h3 className="text-xl font-semibold">{tip.title}</h3>
                    <p className="text-muted-foreground">{tip.description}</p>
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
            <h2 className="text-4xl font-bold">Need More Personalized Support?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              While our resources are comprehensive, sometimes you need expert guidance. 
              Explore our courses and consulting services for personalized learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setCurrentPage('courses')}
                className="bg-white text-primary hover:bg-gray-100"
              >
                View Our Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setCurrentPage('consulting')}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Consulting Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}