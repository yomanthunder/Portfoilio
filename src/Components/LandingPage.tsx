import slowlaxImage from "../assets/slowlax.png"; // Profile image

const LandingPage = () => {
  return (
<div className="min-h-screen flex flex-col justify-start bg-gradient-to-b from-[#FEFAE0] to-[#fefae0] dark:from-[#202020] dark:to-[#3b3b3b] text-center py-10">
  {/* Profile Image, Name, and Quote Section */}
  <div className="flex items-center justify-normal mb-8 mt-10">
    {/* Profile Image */}
    <div className="w-32 h-32 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center p-4 shadow-lg">
      <img
        src={slowlaxImage} // Your profile image
        alt="Profile"
        className="w-24 h-24 rounded-full"
      />
    </div>
    {/* Name and Quote */}
    <div className="ml-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        Shrishvesh Reddy
      </h1>
      <p className="text-xl italic text-gray-600 dark:text-gray-300 mt-2">
        "Free your Mind"
      </p>
    </div>
  </div>

  {/* Intro Text Section */}
  <p className="mt-8 max-w-3xl mx-auto text-xl text-left text-gray-700 dark:text-gray-300">
    I like to build stuff. Working towards being a Software Engineer. Currently an Electrical undergrad at IIT Roorkee.
  </p>
</div>

  );
};

export default LandingPage;
