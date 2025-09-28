import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react';

interface PrivacyPolicyPageProps {
  setCurrentPage: (page: string) => void;
}

export function PrivacyPolicyPage({ setCurrentPage }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              variant="ghost"
              onClick={() => setCurrentPage('home')}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
              <p className="text-xl text-muted-foreground">
                Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: January 15, 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-lg">
              <CardContent className="p-8 space-y-8">
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <Eye className="w-6 h-6 text-primary mr-3" />
                    Information We Collect
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                      <p>When you register for courses, request information, or contact us, we may collect:</p>
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Name and contact information (email, phone, address)</li>
                        <li>Professional information (job title, company, industry)</li>
                        <li>Educational background and certifications</li>
                        <li>Payment information (processed securely through third-party providers)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Usage Information</h3>
                      <p>We automatically collect information about how you use our services:</p>
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Website usage data and analytics</li>
                        <li>Course progress and completion data</li>
                        <li>Device and browser information</li>
                        <li>IP address and location data</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <FileText className="w-6 h-6 text-primary mr-3" />
                    How We Use Your Information
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We use your information to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Provide Services:</strong> Deliver courses, training materials, and customer support</li>
                      <li><strong>Communication:</strong> Send course updates, educational content, and service notifications</li>
                      <li><strong>Improvement:</strong> Analyze usage patterns to improve our courses and services</li>
                      <li><strong>Compliance:</strong> Meet legal and regulatory requirements</li>
                      <li><strong>Marketing:</strong> Send relevant information about new courses and services (with your consent)</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <Lock className="w-6 h-6 text-primary mr-3" />
                    Information Sharing and Disclosure
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We do not sell, trade, or rent your personal information. We may share information in these circumstances:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Service Providers:</strong> Trusted third parties who assist in delivering our services</li>
                      <li><strong>Certification Bodies:</strong> Professional organizations for certification verification</li>
                      <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                      <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We implement appropriate security measures to protect your information:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>SSL encryption for data transmission</li>
                      <li>Secure storage with access controls</li>
                      <li>Regular security assessments and updates</li>
                      <li>Employee training on data protection</li>
                    </ul>
                    <p className="mt-4">
                      While we strive to protect your information, no method of transmission over the internet 
                      or electronic storage is 100% secure.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>You have the right to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Access:</strong> Request access to your personal information</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                      <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                      <li><strong>Objection:</strong> Object to certain uses of your information</li>
                      <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    </ul>
                    <p className="mt-4">
                      To exercise these rights, please contact us at privacy@ilearningsolutions.com.au
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We use cookies and similar technologies to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Remember your preferences and settings</li>
                      <li>Analyze website traffic and usage patterns</li>
                      <li>Improve user experience and site functionality</li>
                      <li>Provide personalized content and recommendations</li>
                    </ul>
                    <p className="mt-4">
                      You can control cookie settings through your browser preferences. 
                      Disabling cookies may affect site functionality.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">International Transfers</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Your information may be transferred to and processed in countries other than Australia. 
                      We ensure appropriate safeguards are in place to protect your information in accordance 
                      with applicable privacy laws.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our services are designed for professional adults. We do not knowingly collect 
                      personal information from children under 18. If we become aware of such collection, 
                      we will take steps to delete the information.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We may update this privacy policy periodically. We will notify you of significant 
                      changes by posting the updated policy on our website and updating the "Last updated" date. 
                      Your continued use of our services constitutes acceptance of the updated policy.
                    </p>
                  </div>
                </section>

                <section className="border-t pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>If you have questions about this privacy policy or our data practices, please contact us:</p>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p><strong>Email:</strong> privacy@ilearningsolutions.com.au</p>
                      <p><strong>Phone:</strong> +61 2 1234 5678</p>
                      <p><strong>Address:</strong> Level 10, 123 Business Street, Sydney NSW 2000, Australia</p>
                    </div>
                  </div>
                </section>

              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}