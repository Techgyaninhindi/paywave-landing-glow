
import { Shield, Zap, Globe, CreditCard, BarChart3, Code, Smartphone, Users, CheckCircle, Lock, Clock, Star, Award, Headphones, Database, Settings, Monitor, ArrowRight, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Bank-Level Security",
      description: "Military-grade encryption with PCI DSS Level 1 compliance and real-time fraud detection.",
      details: [
        "256-bit SSL encryption",
        "Real-time fraud monitoring",
        "3D Secure authentication",
        "GDPR compliant"
      ],
      color: "blue"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Process payments in milliseconds with 99.99% uptime and global infrastructure.",
      details: [
        "Sub-second processing",
        "Global CDN network",
        "Auto-scaling infrastructure",
        "Zero downtime deployment"
      ],
      color: "yellow"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Global Reach",
      description: "Accept payments worldwide with support for 150+ currencies and local methods.",
      details: [
        "150+ currencies supported",
        "Local payment methods",
        "Multi-language interface",
        "Regional compliance"
      ],
      color: "green"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-purple-500" />,
      title: "Universal Payments",
      description: "Support all payment methods from traditional cards to modern digital wallets.",
      details: [
        "All major cards accepted",
        "Apple Pay & Google Pay",
        "Bank transfers & SEPA",
        "Buy now, pay later"
      ],
      color: "purple"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-pink-500" />,
      title: "Smart Analytics",
      description: "Advanced reporting and insights to optimize your payment performance.",
      details: [
        "Real-time dashboards",
        "Revenue forecasting",
        "Customer behavior analytics",
        "Custom reporting tools"
      ],
      color: "pink"
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: "Developer First",
      description: "Simple APIs, comprehensive docs, and powerful SDKs for seamless integration.",
      details: [
        "RESTful API design",
        "Webhook notifications",
        "Multiple SDK libraries",
        "Sandbox environment"
      ],
      color: "indigo"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Optimized",
      description: "Perfect checkout experience across all devices"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Role-based access and team management tools"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Live Monitoring",
      description: "Real-time alerts and system health monitoring"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Protection",
      description: "Advanced encryption and privacy compliance"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock expert assistance"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Features",
      description: "Advanced tools for enterprise customers"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 hover:border-blue-300",
      yellow: "bg-amber-50 border-amber-200 hover:border-amber-300",
      green: "bg-emerald-50 border-emerald-200 hover:border-emerald-300",
      purple: "bg-purple-50 border-purple-200 hover:border-purple-300",
      pink: "bg-pink-50 border-pink-200 hover:border-pink-300",
      indigo: "bg-indigo-50 border-indigo-200 hover:border-indigo-300"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Dark Theme */}
      <section className="bg-gray-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 mb-8">
            <Star className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-blue-100 text-sm font-medium">Trusted by 10,000+ businesses</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Next-Gen Payment
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Built for developers, loved by businesses. Experience the future of payments with our lightning-fast, secure, and globally scalable platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 h-auto text-lg">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 h-auto text-lg">
              Explore Features
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features Grid - Light Theme */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to accept payments, manage transactions, and scale your business globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className={`hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 ${getColorClasses(feature.color)} group`}>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features - White Background */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Solution
            </h2>
            <p className="text-xl text-gray-600">
              Additional tools to enhance your payment experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Payments?
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Join thousands of businesses already using PayGate to power their payment infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 h-auto text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 h-auto text-lg font-semibold">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4 text-lg">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 PayGate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;
