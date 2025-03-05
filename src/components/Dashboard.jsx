import { useState } from 'react';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import UserContext from '@/context/Usercontext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ClipLoader } from 'react-spinners';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [logoutLoading, setlogoutLoading] = useState(false);
  const navigate = useNavigate();

  const handlePassChange = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await fetch('https://mern-auth-backend-9nx9.onrender.com/change-pass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, currentPassword, newPassword }),
        credentials: 'include',
      });

      const data = await response.json();
      if (response.status === 400) {
        toast.error(data.message);
      } else if (response.status === 401) {
        toast.error(data.message);
      } else if (response.status === 403) {
        toast.error(data.message);
      } else if (response.status === 200) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setlogoutLoading(true);
      const response = await fetch('https://mern-auth-backend-9nx9.onrender.com/logout', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.status === 401) {
        toast.error(data.message);
      } else if (response.status === 403) {
        toast.error(data.message);
      } else if (response.ok) {
        setUser(null);
        toast.success(data.message);
        navigate('/');
      } else toast.error(data.message);
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setlogoutLoading(false);
    }
  };

  if (loading || logoutLoading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
        <ClipLoader color="#3B82F6" /> {/* Blue color for the spinner */}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center  p-4">
      {/* Dashboard Content in a Card */}
      <Card className="bg-gray-700 text-white shadow-lg rounded-lg w-full max-w-md transform transition-all hover:scale-105 hover:shadow-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Dashboard
          </CardTitle>
          <CardDescription className="text-gray-400">
            This application can be used as a boilerplate for any MERN application that requires Authentication.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Edit Password Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Edit Password
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-gray-700 text-white rounded-lg">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Edit Password
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  Make changes to your password here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handlePassChange} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password" className="text-gray-300">
                    Current Password
                  </Label>
                  <Input
                    id="current-password"
                    type="password"
                    className="bg-gray-600 text-white border-gray-500 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.currentTarget.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="text-gray-300">
                    New Password
                  </Label>
                  <Input
                    id="new-password"
                    type="password"
                    className="bg-gray-600 text-white border-gray-500 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.currentTarget.value)}
                    required
                  />
                </div>
                <DialogClose asChild>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Save Changes
                  </Button>
                </DialogClose>
              </form>
            </DialogContent>
          </Dialog>

          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;