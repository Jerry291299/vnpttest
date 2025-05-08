import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';
import { useAppContext } from '../../contexts/app.context';
import HeaderBanner from '../Header';
import Footer from '../Footer';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { setIsAuthenticated, setRole } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      // Fetch user role from users table
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('role')
        .eq('id', data.user?.id)
        .single();

      if (userError) throw userError;

      setIsAuthenticated(true);
      setRole(userData.role || 'customer');
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('role', userData.role || 'customer');
      navigate('/admin');
    } catch (err) {
      setError('Đăng nhập thất bại. Vui lòng kiểm tra email và mật khẩu.');
      console.error(err);
    }
  };

  return (
    <>
    <HeaderBanner/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Đăng nhập</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;