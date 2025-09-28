import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowLeft, FileText, Scale, AlertTriangle, CreditCard } from 'lucide-react';

interface TermsPageProps {
  setCurrentPage: (page: string) => void;
}

export function TermsPage({ setCurrentPage }: TermsPageProps) {
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
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Terms and Conditions</h1>
              <p className="text-xl text-muted-foreground">
                Please read these terms carefully before using our services.
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
                  <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      By accessing and using iLearning Solutions' services, you accept and agree to be bound by these 
                      Terms and Conditions. If you do not agree to these terms, please do not use our services.
                    </p>
                    <p>
                      These terms apply to all users of our website, courses, training programs, and related services.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <FileText className="w-6 h-6 text-primary mr-3" />
                    2. Services Description
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>iLearning Solutions provides:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Professional development courses and certifications</li>
                      <li>Corporate training programs and consulting services</li>
                      <li>Online learning platforms and educational resources</li>
                      <li>Coaching and mentoring services</li>
                    </ul>
                    <p>
                      We reserve the right to modify, suspend, or discontinue any service at any time without notice.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Registration</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Account Creation</h3>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>You must provide accurate and complete information</li>
                        <li>You are responsible for maintaining account security</li>
                        <li>You must be at least 18 years old to create an account</li>
                        <li>One account per person; shared accounts are not permitted</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Account Responsibilities</h3>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Notify us immediately of any unauthorized access</li>
                        <li>Use strong passwords and keep them confidential</li>
                        <li>Do not share login credentials with others</li>
                        <li>Maintain current contact information</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <CreditCard className="w-6 h-6 text-primary mr-3" />
                    4. Payment Terms
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Course Fees</h3>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>All prices are in Australian Dollars (AUD) unless specified</li>
                        <li>Payment is required before accessing paid courses</li>
                        <li>Corporate training fees are quoted separately</li>
                        <li>Prices may change without notice for future enrollments</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Refund Policy</h3>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Refunds may be requested within 14 days of purchase</li>
                        <li>Refunds are not available after course completion</li>
                        <li>Corporate training refunds are subject to contract terms</li>
                        <li>Processing fees may apply to refund requests</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Our Content</h3>
                      <p>All course materials, including but not limited to:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Videos, audio recordings, and presentations</li>
                        <li>Written materials, templates, and worksheets</li>
                        <li>Software, applications, and digital tools</li>
                        <li>Trademarks, logos, and brand assets</li>
                      </ul>
                      <p className="mt-2">
                        Are protected by copyright and other intellectual property laws. 
                        You may not reproduce, distribute, or create derivative works without permission.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Permitted Use</h3>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Personal use for educational purposes</li>
                        <li>Internal business use as specified in corporate agreements</li>
                        <li>Reference materials for professional development</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. User Conduct</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>You agree not to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Share account credentials or course materials with unauthorized parties</li>
                      <li>Engage in any fraudulent or illegal activities</li>
                      <li>Disrupt or interfere with our services or other users</li>
                      <li>Upload malicious content or attempt to hack our systems</li>
                      <li>Use our services for competitive intelligence or reverse engineering</li>
                      <li>Violate any applicable laws or regulations</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Course Access and Completion</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Access Period</h3>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Online courses: 12 months from enrollment date unless specified</li>
                        <li>Corporate training: As specified in service agreement</li>
                        <li>Free courses: Subject to availability and may be discontinued</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Certification Requirements</h3>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Complete all required modules and assessments</li>
                        <li>Achieve minimum passing scores where applicable</li>
                        <li>Participate in required activities and discussions</li>
                        <li>Meet attendance requirements for live sessions</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-primary mr-3" />
                    8. Disclaimers and Limitations
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Service Disclaimer</h3>
                      <p>
                        Our services are provided "as is" without warranties of any kind. We do not guarantee 
                        that our services will be uninterrupted, error-free, or meet your specific requirements.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Professional Advice</h3>
                      <p>
                        Our courses provide educational content and should not be considered as professional 
                        advice for specific situations. Consult qualified professionals for individual guidance.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h3>
                      <p>
                        To the maximum extent permitted by law, iLearning Solutions shall not be liable for 
                        any indirect, incidental, special, or consequential damages arising from your use of our services.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. Privacy and Data Protection</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Your privacy is important to us. Our collection, use, and protection of your personal 
                      information is governed by our Privacy Policy, which forms part of these terms.
                    </p>
                    <p>
                      By using our services, you consent to the collection and use of your information 
                      as described in our Privacy Policy.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Account Termination</h3>
                      <p>We may terminate or suspend your account immediately if you:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Violate these terms and conditions</li>
                        <li>Engage in fraudulent or illegal activities</li>
                        <li>Fail to pay required fees</li>
                        <li>Violate intellectual property rights</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Effect of Termination</h3>
                      <p>
                        Upon termination, your access to courses and materials will cease immediately. 
                        You remain liable for all charges incurred before termination.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      These terms are governed by the laws of New South Wales, Australia. 
                      Any disputes will be subject to the exclusive jurisdiction of the courts in Sydney, NSW.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We reserve the right to modify these terms at any time. Updated terms will be posted 
                      on our website with the revision date. Continued use of our services constitutes 
                      acceptance of the updated terms.
                    </p>
                  </div>
                </section>

                <section className="border-t pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>For questions about these terms, please contact us:</p>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p><strong>Email:</strong> legal@ilearningsolutions.com.au</p>
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