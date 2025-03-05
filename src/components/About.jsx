import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex items-center justify-center  p-4">
      <div
        className="w-full max-w-4xl bg-gray-800 text-white p-6 md:p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl mx-4 mt-10 md:mt-20"
      >
        {/* Title with gradient text */}
        <h1 className="mb-5 text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Welcome to MERN AUTHENTICATION!
        </h1>

        {/* Description */}
        <p className="mb-5 text-sm md:text-base text-gray-300">
          Welcome to our authentication system, which utilizes JSON Web Tokens
          (JWT) for authentication. Access to protected content is restricted to
          authenticated users only. The system employs React Context to manage
          state, Shadcn components for the user interface, and React Router v6 to
          handle front-end routing. When users register for the first time, a
          two-step verification process involving OTP verification is conducted.
          Users can log in using either their username or email. Additionally, it
          allows users to reset their password via an email link if forgotten, and
          enables signed-in users to change their password.
        </p>

        {/* Navigation links */}
        <p className="text-sm md:text-base text-gray-300">
          Click on{' '}
          <span
            className="font-semibold text-blue-500 hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => navigate('/register')}
          >
            Register
          </span>{' '}
          if you are a new user to register or Click on{' '}
          <span
            className="font-semibold text-blue-500 hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => navigate('/')}
          >
            Login
          </span>{' '}
          to sign in to the application.
        </p>
      </div>
    </div>
  );
};

export default About;