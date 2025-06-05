
import Navigation from '@/components/Navigation';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Your privacy is important to us. Learn how we protect and handle your data.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: December 2024
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                make a payment, or contact us for support. This may include your name, email address, 
                payment information, and communication preferences.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send you technical notices and support messages, and communicate 
                with you about products, services, and promotional offers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share your information 
                with trusted service providers who assist us in operating our platform.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. We use industry-standard 
                encryption and security protocols.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-6">
                You have the right to access, update, or delete your personal information. You may also 
                opt out of certain communications from us. To exercise these rights, please contact us 
                using the information provided below.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 mb-6">
                We use cookies and similar tracking technologies to enhance your experience on our platform. 
                You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@paygate.com
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

export default Privacy;
