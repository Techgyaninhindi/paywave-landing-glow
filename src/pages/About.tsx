
import { Users, Target, Award, Zap, Shield, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const About = () => {
  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Co-founder",
      image: "/placeholder.svg",
      description: "Former fintech executive with 15+ years in payment processing"
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-founder",
      image: "/placeholder.svg",
      description: "Engineering leader who built payment systems at scale"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Security",
      image: "/placeholder.svg",
      description: "Cybersecurity expert ensuring your payments stay safe"
    },
    {
      name: "Emily Davis",
      role: "Head of Product",
      image: "/placeholder.svg",
      description: "Product visionary focused on developer experience"
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Security First",
      description: "We prioritize security in everything we do, from code to culture."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Innovation",
      description: "We continuously push the boundaries of payment technology."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Customer Success",
      description: "Your success is our success. We're here to help you grow."
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Global Impact",
      description: "Building payment infrastructure that connects the world."
    }
  ];

  const journeyEvents = [
    {
      year: "2020",
      title: "Company Founded",
      description: "PayGate was founded with a vision to simplify payments for businesses worldwide.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      year: "2021",
      title: "First Million in Transactions",
      description: "Reached our first million dollars in payment volume processed.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to support payments in 50+ countries with local payment methods.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      year: "2023",
      title: "Enterprise Platform Launch",
      description: "Launched enterprise-grade features and achieved $10B in annual payment volume.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      year: "2024",
      title: "1 Million Merchants",
      description: "Reached 1 million merchants and $50B in cumulative payment volume.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}PayGate
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're on a mission to make payments simple, secure, and accessible for businesses of all sizes around the world.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At PayGate, we believe that every business should have access to world-class payment infrastructure. 
                We're democratizing payments by providing enterprise-grade solutions that are simple enough for startups 
                and powerful enough for Fortune 500 companies.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded in 2020, we've processed over $50 billion in payments for more than 1 million merchants 
                across 150+ countries. Our platform powers everything from small online stores to billion-dollar marketplaces.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Join Our Mission
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$50B+</div>
                  <div className="text-gray-600">Payment Volume</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
                  <div className="text-gray-600">Merchants</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
                  <div className="text-gray-600">Countries</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">99.99%</div>
                  <div className="text-gray-600">Uptime</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The brilliant minds behind PayGate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-purple-100">
              Key milestones that shaped our story
            </p>
          </div>

          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 via-blue-400 to-purple-400 rounded-full"></div>
            
            <div className="space-y-16">
              {journeyEvents.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-purple-400 z-10 shadow-lg"></div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className={`bg-gradient-to-r ${event.gradient} p-1 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300`}>
                      <div className="bg-white rounded-lg p-6 h-full">
                        <div className="flex items-center mb-4">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}>
                            {event.year}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Join Our Story?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            We're always looking for talented individuals who share our passion for revolutionizing payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
              View Careers
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
              Contact Us
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
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <div className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors cursor-pointer">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="bg-blue-700 p-2 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer">
                    <Linkedin className="w-5 h-5" />
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

export default About;
