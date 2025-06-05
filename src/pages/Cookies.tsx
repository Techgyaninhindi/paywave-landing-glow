
import Navigation from '@/components/Navigation';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600">
              Learn about how we use cookies and similar technologies on our platform.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: December 2024
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
              <p className="text-gray-700 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit 
                our website. They allow us to recognize your device and store some information about your 
                preferences or past actions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions 
                like page navigation, access to secure areas, and payment processing.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies help us understand how visitors interact with our website by collecting and 
                reporting information anonymously. This helps us improve our website's performance.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Functionality Cookies</h3>
              <p className="text-gray-700 mb-6">
                These cookies enable enhanced functionality and personalization, such as remembering your 
                preferences and settings when you return to our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-6">
                We may use third-party services that set cookies on your device. These include analytics 
                services, payment processors, and customer support tools. Each third party has their own 
                privacy policy governing their use of cookies.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
              <p className="text-gray-700 mb-6">
                You can control and manage cookies through your browser settings. Most browsers allow you to 
                refuse cookies or delete cookies that have already been set. However, disabling cookies may 
                affect the functionality of our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Retention</h2>
              <p className="text-gray-700 mb-6">
                Session cookies are deleted when you close your browser. Persistent cookies remain on your 
                device until they expire or you delete them. The retention period varies depending on the 
                purpose of the cookie.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page 
                with an updated revision date. We encourage you to review this policy periodically.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about our use of cookies, please contact us at:
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

export default Cookies;
