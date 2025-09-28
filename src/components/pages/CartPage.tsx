import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Trash2, ShoppingCart, Plus, Minus } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface CartPageProps {
  cart: any[];
  setCart: (cart: any[]) => void;
  setCurrentPage: (page: string) => void;
}

export function CartPage({ cart, setCart, setCurrentPage }: CartPageProps) {
  const removeFromCart = (courseId: number) => {
    setCart(cart.filter(course => course.id !== courseId));
    toast.success('Course removed from cart');
  };

  const updateQuantity = (courseId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(courseId);
      return;
    }
    setCart(cart.map(course => 
      course.id === courseId 
        ? { ...course, quantity: newQuantity }
        : course
    ));
  };

  const cartWithQuantity = cart.map(course => ({
    ...course,
    quantity: course.quantity || 1
  }));

  const subtotal = cartWithQuantity.reduce((sum, course) => 
    sum + (course.price * course.quantity), 0
  );
  
  const discount = subtotal > 1000 ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <ShoppingCart className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground text-lg">
              Browse our courses and add them to your cart to get started
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setCurrentPage('courses')}
              className="gradient-bg text-white"
            >
              Browse Courses
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setCurrentPage('home')}
            >
              Go Home
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              onClick={() => setCurrentPage('courses')}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
            
            <div className="flex items-center space-x-3">
              <ShoppingCart className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold">Shopping Cart</h1>
              <span className="text-2xl text-muted-foreground">({cart.length})</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartWithQuantity.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Course Image */}
                      <div className="w-full md:w-48 aspect-video bg-gradient-to-br from-primary to-accent rounded-lg flex-shrink-0">
                        <div className="w-full h-full bg-black/20 rounded-lg"></div>
                      </div>

                      {/* Course Details */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {course.description}
                          </p>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>Duration: {course.duration}</span>
                          <span>•</span>
                          <span>Level: {course.level}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-medium">Quantity:</span>
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(course.id, course.quantity - 1)}
                                className="w-8 h-8 p-0"
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="w-8 text-center">{course.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(course.id, course.quantity + 1)}
                                className="w-8 h-8 p-0"
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(course.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Remove
                          </Button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right space-y-2">
                        {course.price === 0 ? (
                          <div className="text-2xl font-bold text-green-600">Free</div>
                        ) : (
                          <>
                            <div className="text-2xl font-bold text-primary">
                              ${(course.price * course.quantity).toLocaleString()}
                            </div>
                            {course.quantity > 1 && (
                              <div className="text-sm text-muted-foreground">
                                ${course.price} each
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="sticky top-8"
            >
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-semibold">Order Summary</h2>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (10%)</span>
                        <span>-${discount.toLocaleString()}</span>
                      </div>
                    )}
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-primary">${total.toLocaleString()}</span>
                    </div>
                  </div>

                  {discount > 0 && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-green-800">
                        🎉 You saved ${discount.toLocaleString()} with our bulk discount!
                      </p>
                    </div>
                  )}

                  <Button
                    size="lg"
                    onClick={() => setCurrentPage('checkout')}
                    className="w-full gradient-bg text-white"
                  >
                    Proceed to Checkout
                  </Button>

                  <div className="text-center">
                    <Button
                      variant="link"
                      onClick={() => setCurrentPage('courses')}
                      className="text-sm"
                    >
                      Continue Shopping
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-3 text-sm text-muted-foreground">
                    <h3 className="font-medium text-foreground">What's included:</h3>
                    <div className="space-y-1">
                      <div>✓ Lifetime access to course materials</div>
                      <div>✓ Certificate of completion</div>
                      <div>✓ Downloadable resources</div>
                      <div>✓ Community access</div>
                      <div>✓ 30-day money-back guarantee</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      💡 <strong>Pro tip:</strong> Orders over $1,000 get 10% discount automatically applied!
                    </p>
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