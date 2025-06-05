
import Navigation from '@/components/Navigation';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: December 2024
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using PayGate's services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-700 mb-6">
                Permission is granted to temporarily download one copy of PayGate's materials for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
              <p className="text-gray-700 mb-6">
                PayGate provides payment processing services including but not limited to credit card processing, 
                digital wallet integration, subscription management, and fraud detection. We reserve the right 
                to modify or discontinue any service at any time.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Obligations</h2>
              <p className="text-gray-700 mb-6">
                You agree to provide accurate and complete information when using our services. You are responsible 
                for maintaining the confidentiality of your account credentials and for all activities that occur 
                under your account.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <p className="text-gray-700 mb-6">
                Processing fees are charged according to our published pricing schedule. Fees are non-refundable 
                except as required by law. We reserve the right to change our fees with 30 days notice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Uses</h2>
              <p className="text-gray-700 mb-6">
                You may not use our services for any illegal or unauthorized purpose. You must not violate any 
                laws in your jurisdiction when using our services, including but not limited to copyright laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                In no event shall PayGate or its suppliers be liable for any damages arising out of the use or 
                inability to use our services, even if PayGate has been notified orally or in writing of the 
                possibility of such damage.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                Email: legal@paygate.com
                <br />
                Address: 123 Payment Street, San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                PayGate
              </h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                The most powerful payment gateway for modern businesses. Accept payments everywhere, instantly.
              </p>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-6 text-lg">Product</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="/features" className="hover:text-white transition-colors hover:underline">Features</a></li>
                  <li><a href="/#pricing" className="hover:text-white transition-colors hover:underline">Pricing</a></li>
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

export default Terms;
