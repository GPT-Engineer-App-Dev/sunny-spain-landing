const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; 2023 Spain Travel. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
        </div>
        <div className="mt-2">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white mx-2">Facebook</a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white mx-2">Twitter</a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white mx-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;