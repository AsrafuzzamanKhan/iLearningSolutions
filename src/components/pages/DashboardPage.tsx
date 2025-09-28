import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  BookOpen, User, Settings, LogOut, Download, Calendar, 
  Award, Play, Clock, TrendingUp, Target
} from 'lucide-react';

interface DashboardPageProps {
  setCurrentPage: (page: string) => void;
}

export function DashboardPage({ setCurrentPage }: DashboardPageProps) {
  const [activeTab, setActiveTab] = useState('courses');

  const enrolledCourses = [
    {
      id: 1,
      title: 'Scrum Developer Certified',
      progress: 45,
      status: 'In Progress',
      enrolledDate: '2024-12-01',
      completionDate: null,
      duration: '30 days',
      nextLesson: 'Sprint Planning Fundamentals'
    },
    {
      id: 2,
      title: 'Lean Six Sigma Green Belt',
      progress: 20,
      status: 'In Progress',
      enrolledDate: '2024-12-10',
      completionDate: null,
      duration: '60 days',
      nextLesson: 'DMAIC Methodology'
    },
    {
      id: 3,
      title: 'OKR Fundamentals with AI',
      progress: 100,
      status: 'Completed',
      enrolledDate: '2024-11-15',
      completionDate: '2024-12-05',
      duration: '30 days',
      nextLesson: null
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'OKR Fundamentals with AI Certified',
      issueDate: '2024-12-05',
      credentialId: 'OKR-AI-2024-001234',
      verificationUrl: '#'
    }
  ];

  const recentActivity = [
    {
      type: 'course_started',
      title: 'Started Lean Six Sigma Green Belt',
      date: '2024-12-10',
      icon: BookOpen
    },
    {
      type: 'lesson_completed',
      title: 'Completed "Introduction to OKRs"',
      date: '2024-12-05',
      icon: Play
    },
    {
      type: 'certificate_earned',
      title: 'Earned OKR Fundamentals Certificate',
      date: '2024-12-05',
      icon: Award
    }
  ];

  const learningStats = {
    totalCoursesEnrolled: 3,
    coursesCompleted: 1,
    totalLearningHours: 24,
    certificatesEarned: 1,
    currentStreak: 7
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, John! 👋</h1>
              <p className="text-xl text-muted-foreground">
                Ready to continue your learning journey?
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setCurrentPage('courses')}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Courses
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setCurrentPage('home')}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
        >
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold">{learningStats.totalCoursesEnrolled}</div>
              <div className="text-sm text-muted-foreground">Courses Enrolled</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold">{learningStats.coursesCompleted}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold">{learningStats.totalLearningHours}h</div>
              <div className="text-sm text-muted-foreground">Learning Hours</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                <Target className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold">{learningStats.certificatesEarned}</div>
              <div className="text-sm text-muted-foreground">Certificates</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold">{learningStats.currentStreak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="progress">Progress Tracker</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">My Courses</h2>
                <Button onClick={() => setCurrentPage('courses')}>
                  Browse More Courses
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                          <Badge 
                            variant={course.status === 'Completed' ? 'default' : 'secondary'}
                            className={course.status === 'Completed' ? 'bg-green-500' : ''}
                          >
                            {course.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>

                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>Enrolled: {new Date(course.enrolledDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>Duration: {course.duration}</span>
                          </div>
                        </div>

                        {course.nextLesson && (
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <div className="text-sm font-medium text-blue-800">
                              Next: {course.nextLesson}
                            </div>
                          </div>
                        )}

                        <Button 
                          className="w-full" 
                          variant={course.status === 'Completed' ? 'outline' : 'default'}
                        >
                          {course.status === 'Completed' ? (
                            <>
                              <Award className="w-4 h-4 mr-2" />
                              View Certificate
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Continue Learning
                            </>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Progress Tracker</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Overall Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{course.title}</span>
                          <span className="text-sm text-muted-foreground">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Learning Goals</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Complete 2 courses this month</span>
                        <span className="text-sm text-muted-foreground">1/2</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Study 5 hours per week</span>
                        <span className="text-sm text-muted-foreground">3/5h</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Maintain 7-day streak</span>
                        <span className="text-sm text-green-600">✓ Achieved</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Certificates</h2>
                <div className="text-sm text-muted-foreground">
                  {certificates.length} certificate{certificates.length !== 1 ? 's' : ''} earned
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((certificate, index) => (
                  <motion.div
                    key={certificate.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 space-y-4">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-2">{certificate.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Issued: {new Date(certificate.issueDate).toLocaleDateString()}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            ID: {certificate.credentialId}
                          </p>
                        </div>

                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            Verify
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {certificates.length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <Award className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No certificates yet</h3>
                    <p className="text-muted-foreground mb-6">
                      Complete your courses to earn certificates
                    </p>
                    <Button onClick={() => setCurrentPage('courses')}>
                      Browse Courses
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
              
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <activity.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(activity.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}