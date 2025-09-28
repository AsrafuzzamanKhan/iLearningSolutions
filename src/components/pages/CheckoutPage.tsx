import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { ArrowLeft, CreditCard, Lock, Check } from 'lucide-react';
import { AuthModal } from '../AuthModal';
import { toast } from 'sonner@2.0.3';

interface CheckoutPageProps {
  cart: any[];
  setCurrentPage: (page: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export function CheckoutPage({ cart, setCurrentPage, isLoggedIn, setIsLoggedIn }: CheckoutPageProps) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    country: '',
    zipCode: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(!isLoggedIn);

  const subtotal = cart.reduce((sum, course) => sum + course.price, 0);
  const discount = subtotal > 1000 ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setShowAuthModal(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      setShowAuthModal(true);
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setOrderComplete(true);
    
    // Show confetti animation
    toast.success('Payment successful! Welcome to your courses!');
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-2xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-32 h-32 mx-auto bg-green-500 rounded-full flex items-center justify-center relative"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <Check className="w-16 h-16 text-white" />
            </motion.div>
            
            {/* Animated rings */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ delay: 0.3, duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 border-4 border-green-400 rounded-full"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ delay: 0.5, duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 border-2 border-green-300 rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">Thank You for Your Purchase!</h1>
            <p className="text-xl text-muted-foreground">
              Your course details will be sent to your email within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 border"
          >
            <h3 className="text-2xl font-semibold mb-6">Order Summary</h3>
            <div className="space-y-4">
              {cart.map((course) => (
                <div key={course.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <div className="text-left">
                    <div className="font-medium">{course.title}</div>
                    <div className="text-sm text-muted-foreground">{course.duration}</div>
                  </div>
                  <div className="font-semibold text-lg">
                    {course.price === 0 ? 'Free' : `$${course.price}`}
                  </div>
                </div>
              ))}
              <Separator className="my-4" />
              <div className="flex justify-between font-bold text-2xl text-primary">
                <span>Total Paid</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => setCurrentPage('home')}
              className="gradient-bg text-white px-8"
            >
              Return Home
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setCurrentPage('courses')}
              className="px-8"
            >
              Browse More Courses
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-sm text-muted-foreground"
          >
            Check your email for course access instructions and receipt details.
          </motion.div>
        </motion.div>
      </div>
    );
  }

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
              onClick={() => setCurrentPage('cart')}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cart
            </Button>
            
            <h1 className="text-4xl font-bold">Checkout</h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5" />
                    <span>Payment Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Billing Address */}
              <Card>
                <CardHeader>
                  <CardTitle>Billing Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="billingAddress">Address</Label>
                    <Input
                      id="billingAddress"
                      placeholder="123 Main Street"
                      value={formData.billingAddress}
                      onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="Sydney"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">Postal Code</Label>
                      <Input
                        id="zipCode"
                        placeholder="2000"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      placeholder="Australia"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
              </Card>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Course List */}
                <div className="space-y-4">
                  {cart.map((course) => (
                    <div key={course.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-medium">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">{course.duration}</p>
                      </div>
                      <div className="text-right">
                        {course.price === 0 ? (
                          <span className="font-semibold text-green-600">Free</span>
                        ) : (
                          <span className="font-semibold">${course.price}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Pricing Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Bulk Discount (10%)</span>
                      <span>-${discount.toLocaleString()}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isProcessing}
                  onClick={handleSubmit}
                  className="w-full gradient-bg text-white"
                >
                  {isProcessing ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Lock className="w-4 h-4" />
                      <span>Complete Purchase</span>
                    </div>
                  )}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-1">
                    <Lock className="w-4 h-4" />
                    <span>Secure 256-bit SSL encryption</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guarantees */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold">Our Guarantees</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Instant access after payment</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Lifetime access to course materials</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Certificate upon completion</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuthSuccess={handleAuthSuccess}
      />

    </div>
  );
}