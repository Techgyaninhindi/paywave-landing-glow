import { ArrowRight, Shield, CreditCard, Zap, Globe, Users, CheckCircle, Star, Menu, X, TrendingUp, Lock, Clock, BarChart, Smartphone, Headphones, Award, DollarSign, Target, Layers, RefreshCw, Settings, Wifi, Database } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const Index = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Bank-Level Security",
      description: "Advanced encryption and PCI DSS Level 1 compliance with real-time fraud detection.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Lightning Fast",
      description: "Process payments in under 300ms with our optimized global infrastructure.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Global Reach",
      description: "Accept payments in 190+ countries with 150+ currencies and local methods.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-600" />,
      title: "Multiple Payment Methods",
      description: "Cards, wallets, crypto, BNPL, and 40+ alternative payment methods.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <BarChart className="w-8 h-8 text-indigo-600" />,
      title: "Advanced Analytics",
      description: "Real-time insights with AI-powered analytics and custom reporting.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-600" />,
      title: "Mobile First",
      description: "Optimized mobile checkout with one-tap payments and biometric auth.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-cyan-600" />,
      title: "Auto-Retry Logic",
      description: "Smart retry mechanisms that automatically recover failed transactions.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Settings className="w-8 h-8 text-yellow-600" />,
      title: "Easy Integration",
      description: "Simple APIs and SDKs for seamless integration in minutes, not days.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Wifi className="w-8 h-8 text-teal-600" />,
      title: "Offline Payments",
      description: "Continue processing payments even during network interruptions.",
      color: "from-teal-500 to-green-600"
    },
    {
      icon: <Database className="w-8 h-8 text-red-600" />,
      title: "Data Insights",
      description: "Comprehensive transaction data and customer behavior analytics.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Multi-User Access",
      description: "Team collaboration with role-based permissions and access controls.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Target className="w-8 h-8 text-violet-600" />,
      title: "Smart Routing",
      description: "AI-powered payment routing for maximum success rates and lower costs.",
      color: "from-violet-500 to-purple-600"
    }
  ];

  const advancedFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Zero-Knowledge Architecture",
      description: "Your sensitive data never touches our servers"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Smart Routing",
      description: "AI-powered payment routing for highest success rates"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Instant Settlements",
      description: "Get paid instantly with our liquidity network"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Dynamic Pricing",
      description: "Intelligent pricing optimization based on transaction patterns"
    }
  ];

  const testimonials = [
    // First row (left to right)
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content: "PayGate increased our conversion rates by 45% and reduced payment failures to near zero.",
      rating: 5,
      avatar: "SJ",
      role: "CEO"
    },
    {
      name: "Michael Chen",
      company: "Global Commerce",
      content: "The best payment gateway we've used. Customer support is exceptional.",
      rating: 5,
      avatar: "MC",
      role: "CTO"
    },
    {
      name: "Emily Rodriguez",
      company: "Fashion Forward",
      content: "International payments became effortless. We expanded to 15 new markets.",
      rating: 5,
      avatar: "ER",
      role: "Head of Operations"
    },
    {
      name: "David Kim",
      company: "EcomPro",
      content: "Seamless integration and amazing analytics dashboard helped us optimize.",
      rating: 5,
      avatar: "DK",
      role: "Founder"
    },
    {
      name: "Lisa Wang",
      company: "StartupX",
      content: "Revolutionary payment processing with unmatched security features.",
      rating: 5,
      avatar: "LW",
      role: "Product Manager"
    },
    {
      name: "James Wilson",
      company: "TechFlow",
      content: "Incredible speed and reliability. Our customers love the checkout experience.",
      rating: 5,
      avatar: "JW",
      role: "Engineering Lead"
    },
    {
      name: "Maria Garcia",
      company: "RetailHub",
      content: "Multi-currency support opened new markets for our business instantly.",
      rating: 5,
      avatar: "MG",
      role: "COO"
    },
    {
      name: "Alex Thompson",
      company: "DigitalCorp",
      content: "Outstanding fraud protection and real-time monitoring capabilities.",
      rating: 5,
      avatar: "AT",
      role: "Security Officer"
    },
    {
      name: "Nina Patel",
      company: "GrowthLab",
      content: "Best-in-class API documentation made integration a breeze.",
      rating: 5,
      avatar: "NP",
      role: "Developer"
    },
    {
      name: "Robert Brown",
      company: "ScaleUp",
      content: "Exceptional uptime and performance even during high traffic periods.",
      rating: 5,
      avatar: "RB",
      role: "CTO"
    },
    // Second row (right to left)
    {
      name: "Jennifer Lee",
      company: "InnovateCorp",
      content: "Smart routing increased our success rates by 30% instantly.",
      rating: 5,
      avatar: "JL",
      role: "VP Finance"
    },
    {
      name: "Kevin Davis",
      company: "MarketPlace",
      content: "Mobile-first design boosted our mobile conversions significantly.",
      rating: 5,
      avatar: "KD",
      role: "Mobile Lead"
    },
    {
      name: "Sophie Miller",
      company: "CloudTech",
      content: "Advanced analytics provide insights we never had before.",
      rating: 5,
      avatar: "SM",
      role: "Data Analyst"
    },
    {
      name: "Ryan Carter",
      company: "NextGen",
      content: "Cryptocurrency support helped us tap into new customer segments.",
      rating: 5,
      avatar: "RC",
      role: "Blockchain Lead"
    },
    {
      name: "Amanda Foster",
      company: "TrendyShop",
      content: "Buy now, pay later integration boosted our average order value.",
      rating: 5,
      avatar: "AF",
      role: "E-commerce Manager"
    },
    {
      name: "Daniel Green",
      company: "FinanceFlow",
      content: "Subscription billing features streamlined our recurring revenue.",
      rating: 5,
      avatar: "DG",
      role: "Revenue Manager"
    },
    {
      name: "Rachel Adams",
      company: "GlobalPay",
      content: "Compliance features made international expansion worry-free.",
      rating: 5,
      avatar: "RA",
      role: "Compliance Officer"
    },
    {
      name: "Mark Johnson",
      company: "PayTech",
      content: "Webhook reliability is outstanding - never missed a notification.",
      rating: 5,
      avatar: "MJ",
      role: "Integration Specialist"
    },
    {
      name: "Laura White",
      company: "SmartCommerce",
      content: "Custom branding options maintain our brand consistency perfectly.",
      rating: 5,
      avatar: "LW2",
      role: "Brand Manager"
    },
    {
      name: "Chris Evans",
      company: "PaySolutions",
      content: "24/7 support team resolved our queries within minutes every time.",
      rating: 5,
      avatar: "CE",
      role: "Operations Director"
    }
  ];

  const integrations = [
    { name: "Shopify", logo: "🛍️" },
    { name: "WooCommerce", logo: "🛒" },
    { name: "Magento", logo: "🏪" },
    { name: "Stripe", logo: "💳" },
    { name: "Square", logo: "⬜" },
    { name: "PayPal", logo: "💰" },
    { name: "Salesforce", logo: "☁️" },
    { name: "HubSpot", logo: "🔗" }
  ];

  // Split testimonials into two rows
  const firstRowTestimonials = testimonials.slice(0, 10);
  const secondRowTestimonials = testimonials.slice(10, 20);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <Navigation />

      {/* Hero Section - Enhanced */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-purple-800 mb-8 animate-fade-in">
              <Award className="w-4 h-4 mr-2" />
              #1 Payment Gateway 2024 - FinTech Awards
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              Accept Payments
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                Everywhere, Instantly
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fade-in leading-relaxed">
              The most advanced payment infrastructure for modern businesses. Process payments securely, 
              scale globally, and boost conversions with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-10 py-4 text-lg font-semibold border-2 hover:bg-gray-50 transition-all duration-300">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600 animate-fade-in">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-500" />
                PCI DSS Level 1 Certified
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                99.99% Uptime SLA
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-500" />
                1M+ Active Merchants
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Modernized */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-3 py-1 bg-purple-100 rounded-full text-sm font-medium text-purple-800 mb-4">
              <Layers className="w-4 h-4 mr-2" />
              Core Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose PayGate?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for developers, loved by businesses. Everything you need to accept payments and grow globally.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:scale-105 transform">
                <CardContent className="p-4 md:p-8 text-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className="mb-4 md:mb-6 flex justify-center">
                      <div className={`p-2 md:p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                        <div className="text-white">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Advanced Features Grid */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Advanced Capabilities</h3>
              <p className="text-purple-100 text-lg">Enterprise-grade features for demanding businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advancedFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-purple-100">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">$50B+</div>
              <div className="text-gray-300 group-hover:text-white transition-colors">Annual Volume Processed</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">190+</div>
              <div className="text-gray-300 group-hover:text-white transition-colors">Countries Supported</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">99.99%</div>
              <div className="text-gray-300 group-hover:text-white transition-colors">Uptime Guarantee</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">1M+</div>
              <div className="text-gray-300 group-hover:text-white transition-colors">Active Merchants</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your favorite tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {integration.logo}
                </div>
                <div className="text-sm font-medium text-gray-600">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-green-100 rounded-full text-sm font-medium text-green-800 mb-4">
              <DollarSign className="w-4 h-4 mr-2" />
              Transparent Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Predictable Pricing
            </h2>
            <p className="text-xl text-gray-600">
              No hidden fees. No setup costs. Pay only for successful transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 relative">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                  <div className="text-5xl font-bold text-purple-600 mb-1">2.9%</div>
                  <p className="text-gray-500 mb-6">+ 30¢ per transaction</p>
                  <p className="text-gray-600 mb-8">Perfect for small businesses and startups</p>
                  
                  <ul className="text-left space-y-4 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Online payments</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Basic dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Email support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Standard checkout</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full" variant="outline">
                    Start Free Trial
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-purple-400 hover:border-purple-500 hover:shadow-xl transition-all duration-300 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                  <div className="text-5xl font-bold text-purple-600 mb-1">2.4%</div>
                  <p className="text-gray-500 mb-6">+ 30¢ per transaction</p>
                  <p className="text-gray-600 mb-8">For growing businesses with higher volume</p>
                  
                  <ul className="text-left space-y-4 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Everything in Starter</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Subscription billing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Custom branding</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg">
                    Start Free Trial
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 relative">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-5xl font-bold text-purple-600 mb-1">Custom</div>
                  <p className="text-gray-500 mb-6">Volume-based pricing</p>
                  <p className="text-gray-600 mb-8">For large enterprises with complex needs</p>
                  
                  <ul className="text-left space-y-4 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>24/7 phone support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>SLA guarantee</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full" variant="outline">
                    Contact Sales
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section with Animations */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full text-sm font-medium text-yellow-800 mb-4">
              <Star className="w-4 h-4 mr-2" />
              Customer Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Loved by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers say about their PayGate experience
            </p>
          </div>

          <div className="space-y-8">
            {/* First row - Left to Right Animation */}
            <div className="relative">
              <div className="flex animate-scroll-left space-x-6">
                {[...firstRowTestimonials, ...firstRowTestimonials].map((testimonial, index) => (
                  <Card key={index} className="flex-shrink-0 w-80 bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                          <div className="text-xs text-gray-600">{testimonial.role}</div>
                          <div className="text-xs text-purple-600 font-medium">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Second row - Right to Left Animation */}
            <div className="relative">
              <div className="flex animate-scroll-right space-x-6">
                {[...secondRowTestimonials, ...secondRowTestimonials].map((testimonial, index) => (
                  <Card key={index} className="flex-shrink-0 w-80 bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                          <div className="text-xs text-gray-600">{testimonial.role}</div>
                          <div className="text-xs text-blue-600 font-medium">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Payments?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-purple-100 leading-relaxed">
            Join thousands of businesses already using PayGate to process payments seamlessly and grow globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-12 py-4 text-lg font-bold transition-all duration-300">
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-purple-200">
            <div className="flex items-center">
              <Headphones className="w-4 h-4 mr-2" />
              24/7 Support Available
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              No Setup Fees
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Go Live in Minutes
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer - Updated for Mobile */}
      <footer id="contact" className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                PayGate
              </h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                The most powerful payment gateway for modern businesses. Accept payments everywhere, instantly.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex space-x-3">
                  <div className="bg-purple-600 p-2 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors cursor-pointer">
                    <Star className="w-5 h-5" />
                  </div>
                  <div className="bg-blue-700 p-2 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer">
                    <Shield className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-6 text-lg">Product</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="/features" className="hover:text-white transition-colors hover:underline">Features</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors hover:underline">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors hover:underline">API Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors hover:underline">Integrations</a></li>
                  <li><a href="#" className="hover:text-white transition-colors hover:underline">Security</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-6 text-lg">Company</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="/about" className="hover:text-white transition-colors hover:underline">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors hover:underline">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors hover:underline">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors hover:underline">Press</a></li>
                  <li><a href="#" className="hover:text-white transition-colors hover:underline">Partners</a></li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Developer Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Status Page</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Best Hostings</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Bluehost</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">HostGator</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">SiteGround</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">GoDaddy</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Hostinger</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 PayGate. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
