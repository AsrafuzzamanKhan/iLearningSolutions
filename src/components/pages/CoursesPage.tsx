import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { ChevronRight, Search, Filter, Users, Star, Clock, DollarSign } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CoursesPageProps {
  setCurrentPage: (page: string) => void;
  setSelectedCourse: (course: any) => void;
}

export function CoursesPage({ setCurrentPage, setSelectedCourse }: CoursesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const courses = [
    {
      id: 1,
      title: 'Foundations of Project Management',
      price: 750,
      originalPrice: 950,
      description: 'Master the fundamentals of project management with practical tools and techniques used by industry leaders.',
      duration: '1 Day Intensive Training',
      students: 1234,
      rating: 4.8,
      category: 'Project Management',
      level: 'Beginner',
      featured: true,
      highlights: ['PMI-certified curriculum', 'Hands-on exercises', 'Digital toolkit included'],
      image: 'https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMHRlYW0lMjBwbGFubmluZ3xlbnwxfHx8fDE3NTc5ODEzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      title: 'Scrum Fundamentals Certified',
      price: 0,
      description: 'Learn the basics of Scrum methodology and agile project management principles.',
      duration: '30 Days Self-paced',
      students: 2156,
      rating: 4.6,
      category: 'Agile',
      level: 'Beginner',
      featured: false,
      highlights: ['Free certification', 'Interactive modules', 'Community access'],
      image: 'https://images.unsplash.com/photo-1517916358207-1e49f666e851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2lsZSUyMHNjcnVtJTIwYm9hcmQlMjBtZWV0aW5nfGVufDF8fHx8MTc1Nzk4MTMxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      title: 'Six Sigma Black Belt',
      price: 750,
      description: 'Advanced process improvement and quality management certification program.',
      duration: '180 Days Online',
      students: 432,
      rating: 4.9,
      category: 'Continuous Improvement',
      level: 'Advanced',
      featured: true,
      highlights: ['Industry recognition', 'Real case studies', 'Mentorship included'],
      image: 'https://images.unsplash.com/photo-1600492515568-8868f609511e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaXglMjBzaWdtYSUyMHByb2Nlc3MlMjBpbXByb3ZlbWVudHxlbnwxfHx8fDE3NTc5ODEzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 4,
      title: 'OKR Fundamentals with AI Certified',
      price: 0,
      description: 'Learn Objectives and Key Results framework enhanced with AI-powered insights.',
      duration: '30 Days Self-paced',
      students: 987,
      rating: 4.7,
      category: 'Strategy',
      level: 'Intermediate',
      featured: false,
      highlights: ['AI-enhanced learning', 'Free certification', 'Modern frameworks'],
      image: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzU3ODcyNTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 5,
      title: 'Advanced Project Management',
      price: 1500,
      description: 'Master complex project scenarios with stakeholder management and governance frameworks.',
      duration: '2 Days',
      students: 678,
      rating: 4.8,
      category: 'Project Management',
      level: 'Advanced',
      featured: true,
      highlights: ['Advanced techniques', 'Leadership focus', 'Case-based learning'],
      image: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wbWVudCUyMHRyYWluaW5nfGVufDF8fHx8MTc1Nzk4MTMyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 6,
      title: 'Lean Six Sigma Green Belt',
      price: 380,
      description: 'Process improvement certification focusing on waste reduction and efficiency.',
      duration: '3 Days',
      students: 567,
      rating: 4.7,
      category: 'Continuous Improvement',
      level: 'Intermediate',
      featured: false,
      highlights: ['Practical projects', 'Industry tools', 'Certification included'],
      image: 'https://images.unsplash.com/photo-1588912914074-b93851ff14b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGNvdXJzZSUyMGxhcHRvcHxlbnwxfHx8fDE3NTc5ODEzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Project Management', label: 'Project Management' },
    { value: 'Continuous Improvement', label: 'Continuous Improvement' },
    { value: 'Strategy', label: 'Strategy' },
    { value: 'Agile', label: 'Agile' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesPrice = priceRange === 'all' ||
                        (priceRange === 'free' && course.price === 0) ||
                        (priceRange === 'under500' && course.price > 0 && course.price < 500) ||
                        (priceRange === 'over500' && course.price >= 500);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
        return b.students - a.students;
      default:
        return b.id - a.id; // newest first
    }
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 sm:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Explore Our Courses</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive library of professional development courses 
              designed to advance your career and boost your skills.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
              <Input
                placeholder="Search courses, skills, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 sm:pl-12 py-4 sm:py-6 text-base sm:text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-4 sm:p-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <h3 className="font-semibold text-base sm:text-lg">Filters</h3>
                </div>

                {/* Category Filter */}
                <div className="space-y-3">
                  <label className="font-medium text-sm sm:text-base">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="text-sm sm:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range Filter */}
                <div className="space-y-3">
                  <label className="font-medium text-sm sm:text-base">Price Range</label>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: 'free', label: 'Free' },
                      { value: 'under500', label: 'Under $500' },
                      { value: 'over500', label: '$500 and above' }
                    ].map(option => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.value}
                          checked={priceRange === option.value}
                          onCheckedChange={() => setPriceRange(option.value)}
                        />
                        <label htmlFor={option.value} className="text-xs sm:text-sm cursor-pointer">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sort Options */}
                <div className="space-y-3">
                  <label className="font-medium text-sm sm:text-base">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="text-sm sm:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Courses Grid */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4 sm:mb-6 flex justify-between items-center"
            >
              <p className="text-muted-foreground text-sm sm:text-base">
                Showing {sortedCourses.length} of {courses.length} courses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {sortedCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="overflow-hidden card-hover h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <ImageWithFallback
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap gap-1 sm:gap-2">
                        <Badge className="bg-white text-primary text-xs sm:text-sm">{course.category}</Badge>
                        {course.featured && (
                          <Badge className="bg-yellow-500 text-white text-xs sm:text-sm">Featured</Badge>
                        )}
                        {course.price === 0 && (
                          <Badge className="bg-green-500 text-white text-xs sm:text-sm">Free</Badge>
                        )}
                      </div>
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                        <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{course.students.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                            <span>{course.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                      <div className="space-y-3 sm:space-y-4 flex-1">
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {course.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {course.description}
                          </p>
                        </div>

                        <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <Badge variant="outline" className="text-xs sm:text-sm">{course.level}</Badge>
                        </div>

                        <div className="space-y-2">
                          {course.highlights.slice(0, 2).map((highlight, idx) => (
                            <div key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-border">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              {course.price === 0 ? (
                                <div className="text-lg sm:text-2xl font-bold text-green-600">Free</div>
                              ) : (
                                <>
                                  <div className="text-lg sm:text-2xl font-bold text-primary">
                                    ${course.price}
                                  </div>
                                  {course.originalPrice && (
                                    <div className="text-xs sm:text-sm text-muted-foreground line-through">
                                      ${course.originalPrice}
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          </div>

                          <Button
                            onClick={() => {
                              setSelectedCourse(course);
                              setCurrentPage('course-detail');
                            }}
                            className="group text-sm sm:text-base"
                            size="sm"
                          >
                            <span className="hidden sm:inline">View Details</span>
                            <span className="sm:hidden">View</span>
                            <ChevronRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {sortedCourses.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8 sm:py-12"
              >
                <div className="text-4xl sm:text-6xl mb-4">🔍</div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">No courses found</h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  Try adjusting your search criteria or browse all courses.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  variant="outline"
                  size="sm"
                  className="text-sm sm:text-base"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}