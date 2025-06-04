
import { Shield, Zap, Globe, CreditCard, BarChart3, Code, Smartphone, Users, CheckCircle, Lock, Clock, Star, Award, Headphones, Database, Settings, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      title: "Advanced Security",
      description: "Bank-level security with 256-bit SSL encryption, PCI DSS Level 1 compliance, and fraud detection.",
      details: [
        "Real-time fraud monitoring",
        "3D Secure authentication",
        "Data encryption at rest and in transit",
        "Regular security audits"
      ],
      gradient: "from-red-50 to-pink-50",
      borderColor: "border-red-200"
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Lightning Performance",
      description: "Ultra-fast payment processing with global infrastructure and 99.99% uptime guarantee.",
      details: [
        "Sub-second transaction processing",
        "Global CDN network",
        "Auto-scaling infrastructure",
        "Real-time monitoring"
      ],
      gradient: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: <Globe className="w-12 h-12 text-green-600" />,
      title: "Global Coverage",
      description: "Accept payments in 150+ currencies from customers worldwide with local payment methods.",
      details: [
        "150+ supported currencies",
        "Local payment methods",
        "Multi-language support",
        "Regulatory compliance"
      ],
      gradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-indigo-600" />,
      title: "Multiple Payment Methods",
      description: "Support for all major payment methods including cards, wallets, and alternative payments.",
      details: [
        "Credit & debit cards",
        "Digital wallets (Apple Pay, Google Pay)",
        "Bank transfers",
        "Buy now, pay later options"
      ],
      gradient: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-pink-600" />,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics to optimize your payment performance.",
      details: [
        "Real-time dashboards",
        "Custom reports",
        "Revenue analytics",
        "Customer insights"
      ],
      gradient: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200"
    },
    {
      icon: <Code className="w-12 h-12 text-cyan-600" />,
      title: "Developer-Friendly",
      description: "Easy integration with RESTful APIs, webhooks, and comprehensive documentation.",
      details: [
        "RESTful APIs",
        "Webhook notifications",
        "SDK libraries",
        "Sandbox environment"
      ],
      gradient: "from-cyan-50 to-blue-50",
      borderColor: "border-cyan-200"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: "Mobile Optimized",
      description: "Responsive checkout flows optimized for mobile devices"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Team Management",
      description: "Collaborate with your team using role-based access controls"
    },
    {
      icon: <Monitor className="w-8 h-8 text-purple-600" />,
      title: "Real-time Reporting",
      description: "Monitor your payments with live dashboards and alerts"
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-600" />,
      title: "Data Protection",
      description: "GDPR compliant with advanced data protection measures"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock system monitoring and support"
    },
    {
      icon: <Star className="w-8 h-8 text-purple-600" />,
      title: "Premium Support",
      description: "Priority support with dedicated account managers"
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: "Data Analytics",
      description: "Advanced analytics and business intelligence tools"
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: "Custom Integration",
      description: "Tailored solutions for enterprise requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block">
              Modern Payments
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything you need to accept payments online, manage subscriptions, and grow your business globally.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${feature.borderColor} bg-gradient-to-r ${feature.gradient} border-2 hover:scale-105`}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-white shadow-lg">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 mb-4 font-medium">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700 font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features - 8 cards in 2 rows */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600">
              Additional features to power your payment experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-purple-100 hover:border-purple-300">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-purple-100">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Start your free trial today and see how PayGate can transform your payment processing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
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
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:underline">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Partners</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Developer Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Status Page</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Contact Us</a></li>
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
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;
