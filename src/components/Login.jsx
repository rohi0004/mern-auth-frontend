import { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/Usercontext';
import ClipLoader from 'react-spinners/ClipLoader';

// UI Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const Login = () => {
  // State management
  const [loading, setLoading] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  // Hooks
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  // Redirect to dashboard if user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await fetch('https://mern-auth-backend-9nx9.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier, password }),
        credentials: 'include',
      });

      const data = await response.json();

      // Handle response status
      if (response.status === 400 || response.status === 401 || response.status === 403) {
        toast.error(data.message);
      } else if (response.status === 200) {
        setUser(data.payload); // Update user context
        toast.success('Signed in successfully');
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
          <ClipLoader />
        </div>
      )}

      {/* Login card */}
      <div className="flex items-center justify-center  p-4">
        <Card className="bg-gray-800 text-white shadow-lg rounded-lg w-full max-w-md transform transition-all hover:scale-105 hover:shadow-2xl">
          {/* Card header */}
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Welcome
            </CardTitle>
            <CardDescription className="text-gray-400">
              Sign in to MERN Authentication System
            </CardDescription>
          </CardHeader>

          {/* Card content */}
          <CardContent className="space-y-4">
            <form onSubmit={handleLogin}>
              {/* Email/Username input */}
              <div className="space-y-2">
                <Label htmlFor="identifier" className="text-gray-300 block text-left">
                  Email address or Username
                </Label>
                <Input
                  id="identifier"
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.currentTarget.value)}
                  placeholder="Enter your email address or username"
                  required
                  className="bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500 w-full transition-all duration-300 ease-in-out hover:border-blue-500"
                />
              </div>

              {/* Password input */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300 block text-left">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  placeholder="Enter your password"
                  required
                  className="bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500 w-full transition-all duration-300 ease-in-out hover:border-blue-500"
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 rounded mt-4 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Sign In
              </Button>
            </form>
          </CardContent>

          {/* Card footer */}
          <CardFooter className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 w-full">
              {/* Forgot password link */}
              <a href="/forgot-password" className="text-blue-500 hover:text-blue-400 text-sm transition-all duration-300 ease-in-out">
                Having trouble signing in?
              </a>

              {/* Register button */}
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => navigate('/register')}
              >
                Create an account
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Login;