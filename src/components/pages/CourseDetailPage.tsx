import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { 
  ArrowLeft, Clock, Users, Star, Calendar, Award, BookOpen, 
  CheckCircle, Play, Download, Share2, Heart 
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface CourseDetailPageProps {
  course: any;
  setCurrentPage: (page: string) => void;
  cart: any[];
  setCart: (cart: any[]) => void;
}

export function CourseDetailPage({ course, setCurrentPage, cart, setCart }: CourseDetailPageProps) {
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Course not found</h2>
          <Button onClick={() => setCurrentPage('courses')}>
            Browse Courses
          </Button>
        </div>
      </div>
    );
  }

  const isInCart = cart.some(item => item.id === course.id);

  const addToCart = () => {
    if (isInCart) {
      toast.error('Course is already in your cart');
      return;
    }
    setCart([...cart, course]);
    toast.success('Course added to cart!');
  };

  const enrollNow = () => {
    if (!isInCart) {
      setCart([...cart, course]);
    }
    setCurrentPage('checkout');
  };

  const learningOutcomes = [
    'Apply stakeholder engagement strategies in complex project environments',
    'Manage project portfolios with governance frameworks and best practices',
    'Balance time, cost, and quality constraints using advanced techniques',
    'Lead cross-functional teams through project challenges and changes',
    'Implement risk management strategies and contingency planning',
    'Utilize modern project management tools and methodologies'
  ];

  const relatedCourses = [
    {
      id: 2,
      title: 'Scrum Master Certified',
      price: 650,
      rating: 4.9,
      students: 890
    },
    {
      id: 3,
      title: 'Six Sigma Green Belt',
      price: 380,
      rating: 4.7,
      students: 567
    }
  ];

  const courseContent = [
    {
      module: 'Module 1: Project Fundamentals',
      duration: '2 hours',
      lessons: [
        'Introduction to Project Management',
        'Project Lifecycle and Phases',
        'Stakeholder Identification',
        'Project Charter Development'
      ]
    },
    {
      module: 'Module 2: Planning and Execution',
      duration: '3 hours',
      lessons: [
        'Work Breakdown Structure',
        'Resource Planning and Allocation',
        'Risk Assessment and Mitigation',
        'Project Monitoring and Control'
      ]
    },
    {
      module: 'Module 3: Leadership and Communication',
      duration: '2 hours',
      lessons: [
        'Team Leadership Strategies',
        'Effective Communication Plans',
        'Conflict Resolution',
        'Change Management'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              onClick={() => setCurrentPage('courses')}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge className="bg-accent text-white">{course.category}</Badge>
                    <Badge variant="outline">{course.level}</Badge>
                    {course.featured && (
                      <Badge className="bg-yellow-500 text-white">Featured</Badge>
                    )}
                  </div>
                  
                  <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground">
                      ({course.students.toLocaleString()} students)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span>Lifetime Access</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                      src={course.image || 'https://images.unsplash.com/photo-1588912914074-b93851ff14b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGNvdXJzZSUyMGxhcHRvcHxlbnwxfHx8fDE3NTc5ODEzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" variant="secondary" className="bg-white/90 text-primary">
                        <Play className="w-6 h-6 mr-2" />
                        Preview Course
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-6">
                    <div className="text-center">
                      {course.price === 0 ? (
                        <div className="text-3xl font-bold text-green-600">Free</div>
                      ) : (
                        <div className="space-y-1">
                          <div className="text-3xl font-bold text-primary">${course.price}</div>
                          {course.originalPrice && (
                            <div className="text-lg text-muted-foreground line-through">
                              ${course.originalPrice}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <Button
                        size="lg"
                        onClick={enrollNow}
                        className="w-full gradient-bg text-white"
                      >
                        Enroll Now
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={addToCart}
                        disabled={isInCart}
                        className="w-full"
                      >
                        {isInCart ? 'In Cart' : 'Add to Cart'}
                      </Button>
                    </div>

                    <div className="flex justify-center space-x-4">
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4 mr-2" />
                        Wishlist
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h4 className="font-semibold">This course includes:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4 text-accent" />
                          <span>Comprehensive course materials</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-accent" />
                          <span>Certificate of completion</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Download className="w-4 h-4 text-accent" />
                          <span>Downloadable resources</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-accent" />
                          <span>Access to community</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            {/* Learning Outcomes */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Key Learning Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learningOutcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Course Content */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Course Content</h2>
              <div className="space-y-4">
                {courseContent.map((section, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">{section.module}</h3>
                        <Badge variant="secondary">{section.duration}</Badge>
                      </div>
                      <div className="space-y-2">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="flex items-center space-x-3">
                            <Play className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">{lesson}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Prerequisites */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Prerequisites</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Basic understanding of project concepts</p>
                    <p>• 2+ years of industry experience (recommended)</p>
                    <p>• Computer with internet access</p>
                    <p>• Willingness to learn and participate</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Related Courses */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Related Courses</h3>
                  <div className="space-y-4">
                    {relatedCourses.map((relatedCourse) => (
                      <div key={relatedCourse.id} className="space-y-2">
                        <h4 className="font-medium text-sm">{relatedCourse.title}</h4>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span>{relatedCourse.rating}</span>
                          </div>
                          <span className="font-medium text-primary">${relatedCourse.price}</span>
                        </div>
                        <Separator />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}