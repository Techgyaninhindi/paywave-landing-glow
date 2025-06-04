
import { Shield, Zap, Globe, CreditCard, BarChart3, Code, Smartphone, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
      ]
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-600" />,
      title: "Lightning Performance",
      description: "Ultra-fast payment processing with global infrastructure and 99.99% uptime guarantee.",
      details: [
        "Sub-second transaction processing",
        "Global CDN network",
        "Auto-scaling infrastructure",
        "Real-time monitoring"
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-600" />,
      title: "Global Coverage",
      description: "Accept payments in 150+ currencies from customers worldwide with local payment methods.",
      details: [
        "150+ supported currencies",
        "Local payment methods",
        "Multi-language support",
        "Regulatory compliance"
      ]
    },
    {
      icon: <CreditCard className="w-12 h-12 text-purple-600" />,
      title: "Multiple Payment Methods",
      description: "Support for all major payment methods including cards, wallets, and alternative payments.",
      details: [
        "Credit & debit cards",
        "Digital wallets (Apple Pay, Google Pay)",
        "Bank transfers",
        "Buy now, pay later options"
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics to optimize your payment performance.",
      details: [
        "Real-time dashboards",
        "Custom reports",
        "Revenue analytics",
        "Customer insights"
      ]
    },
    {
      icon: <Code className="w-12 h-12 text-purple-600" />,
      title: "Developer-Friendly",
      description: "Easy integration with RESTful APIs, webhooks, and comprehensive documentation.",
      details: [
        "RESTful APIs",
        "Webhook notifications",
        "SDK libraries",
        "Sandbox environment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
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
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-purple-100">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{detail}</span>
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

      {/* Additional Features */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Smartphone className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mobile Optimized</h3>
                <p className="text-gray-600">Responsive checkout flows optimized for mobile devices</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Team Management</h3>
                <p className="text-gray-600">Collaborate with your team using role-based access controls</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BarChart3 className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real-time Reporting</h3>
                <p className="text-gray-600">Monitor your payments with live dashboards and alerts</p>
              </CardContent>
            </Card>
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
    </div>
  );
};

export default Features;
