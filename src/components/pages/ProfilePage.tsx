import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { 
  User, Mail, Edit, Lock, ArrowLeft, ShoppingBag, 
  Calendar, Download, Eye, CheckCircle 
} from 'lucide-react';

interface ProfilePageProps {
  setCurrentPage: (page: string) => void;
}

export function ProfilePage({ setCurrentPage }: ProfilePageProps) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  // Mock user data
  const userData = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    memberSince: 'March 2024',
    totalCourses: 3
  };

  // Mock purchase history
  const purchaseHistory = [
    {
      id: 1,
      courseName: 'Foundations of Project Management',
      purchaseDate: '2024-03-15',
      price: 750,
      status: 'Completed',
      certificateAvailable: true
    },
    {
      id: 2,
      courseName: 'Scrum Master Certified',
      purchaseDate: '2024-02-28',
      price: 650,
      status: 'In Progress',
      certificateAvailable: false
    },
    {
      id: 3,
      courseName: 'Six Sigma Green Belt',
      purchaseDate: '2024-01-20',
      price: 380,
      status: 'Completed',
      certificateAvailable: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
            
            <div className="flex items-center space-x-6">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-accent text-white">
                  {userData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div>
                <h1 className="text-3xl font-bold mb-2">My Profile</h1>
                <p className="text-muted-foreground">
                  Member since {userData.memberSince} • {userData.totalCourses} courses completed
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* User Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-6 h-6 text-primary mr-3" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-muted-foreground">Full Name</Label>
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-muted-foreground" />
                      <span className="text-lg">{userData.name}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-muted-foreground">Email Address</Label>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-muted-foreground" />
                      <span className="text-lg">{userData.email}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex items-center">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" defaultValue={userData.name} />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" defaultValue={userData.email} />
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => setShowEditModal(false)}>
                            Cancel
                          </Button>
                          <Button onClick={() => setShowEditModal(false)}>
                            Save Changes
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog open={showPasswordModal} onOpenChange={setShowPasswordModal}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex items-center">
                        <Lock className="w-4 h-4 mr-2" />
                        Change Password
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Change Password</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="current">Current Password</Label>
                          <Input id="current" type="password" />
                        </div>
                        <div>
                          <Label htmlFor="new">New Password</Label>
                          <Input id="new" type="password" />
                        </div>
                        <div>
                          <Label htmlFor="confirm">Confirm New Password</Label>
                          <Input id="confirm" type="password" />
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => setShowPasswordModal(false)}>
                            Cancel
                          </Button>
                          <Button onClick={() => setShowPasswordModal(false)}>
                            Update Password
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <div className="pt-2">
                  <Dialog open={showForgotPasswordModal} onOpenChange={setShowForgotPasswordModal}>
                    <DialogTrigger asChild>
                      <Button variant="link" className="p-0 h-auto text-sm text-primary">
                        Forgot Password?
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Reset Password</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Enter your email address and we'll send you a link to reset your password.
                        </p>
                        <div>
                          <Label htmlFor="reset-email">Email Address</Label>
                          <Input id="reset-email" type="email" defaultValue={userData.email} />
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => setShowForgotPasswordModal(false)}>
                            Cancel
                          </Button>
                          <Button onClick={() => setShowForgotPasswordModal(false)}>
                            Send Reset Link
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Purchase History */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingBag className="w-6 h-6 text-primary mr-3" />
                  Purchase History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Course details and access instructions are sent to your email within 24 hours of purchase.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {purchaseHistory.map((purchase, index) => (
                    <motion.div
                      key={purchase.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{purchase.courseName}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>Purchased: {new Date(purchase.purchaseDate).toLocaleDateString()}</span>
                            </div>
                            <div className="text-lg font-semibold text-primary">
                              ${purchase.price}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <Badge className={getStatusColor(purchase.status)}>
                            {purchase.status === 'Completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                            {purchase.status}
                          </Badge>
                          
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            
                            {purchase.certificateAvailable && (
                              <Button size="sm" className="gradient-bg text-white">
                                <Download className="w-4 h-4 mr-2" />
                                Certificate
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {purchaseHistory.length === 0 && (
                  <div className="text-center py-12">
                    <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-xl font-semibold mb-2">No purchases yet</p>
                    <p className="text-muted-foreground mb-6">
                      Start your learning journey by exploring our courses
                    </p>
                    <Button 
                      onClick={() => setCurrentPage('courses')}
                      className="gradient-bg text-white"
                    >
                      Browse Courses
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}