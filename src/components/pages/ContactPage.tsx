import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, HelpCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // Simulate form submission
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      details: 'support@ilearningsolutions.com',
      description: 'Get help with courses, account issues, or general inquiries'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+61 123 456 789',
      description: 'Monday to Friday, 9:00 AM - 6:00 PM AEST'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: '123 Learning Street, Sydney, NSW 2000, Australia',
      description: 'Visit us for in-person consultations (by appointment)'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM AEST',
      description: 'We respond to all inquiries within 24 hours'
    }
  ];

  const faqs = [
    {
      question: 'How long do I have to complete a course?',
      answer: 'Course access duration varies by course. Most self-paced courses offer lifetime access, while instructor-led courses have specific schedules. Check the course details for exact timelines. Generally, you have up to 180 days for self-paced courses.'
    },
    {
      question: 'Do I get a certificate upon completion?',
      answer: 'Yes! Upon successful completion of any course, you\'ll receive a digital certificate that you can download, share on LinkedIn, or print. Our certificates are globally recognized and include verification credentials.'
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: 'We offer a 30-day money-back guarantee for all paid courses. If you\'re not satisfied with your learning experience, contact our support team within 30 days of purchase for a full refund.'
    },
    {
      question: 'Are there group discounts for organizations?',
      answer: 'Yes, we offer special pricing for teams and organizations. Discounts start at 10% for 5+ enrollments and go up to 25% for 50+ enrollments. Contact our sales team for a custom quote.'
    },
    {
      question: 'What if I need technical support during a course?',
      answer: 'Our technical support team is available Monday-Friday, 9 AM - 6 PM AEST. You can reach us via email at support@ilearningsolutions.com or through the help chat in your course dashboard.'
    },
    {
      question: 'Can I access courses on mobile devices?',
      answer: 'Absolutely! Our learning platform is fully responsive and works on all devices. You can access your courses, track progress, and complete assignments on desktop, tablet, or mobile.'
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
            <h1 className="text-5xl font-bold">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our courses or need support? We're here to help! 
              Reach out to our friendly team and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your inquiry or how we can assist you..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-bg text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                            <p className="font-medium text-primary mb-2">{info.details}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <MapPin className="w-12 h-12 mx-auto text-slate-500" />
                        <p className="text-slate-600 font-medium">Interactive Map</p>
                        <p className="text-sm text-slate-500">123 Learning Street, Sydney NSW</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find quick answers to common questions about our courses, certificates, and support.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center space-x-3">
                        <HelpCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="gradient-bg text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Our support team is here to help! We typically respond to all inquiries within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Support
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}