import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthHead from '../auth-head';

const AuthForm = ({ type }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    ...(type === 'signup' && { confirmPassword: '' }),
    rememberMe: false
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (type === 'signup' && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      if (type === 'login') {
        console.log('Logging in with:', formData);
      } else {
        console.log('Signing up with:', formData);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const formConfig = {
    login: {
      title: "Get Started with CoAI.Pro",
      paragraph: "Don't have an account yet? Sign up for free!",
      link: "/auth/signup",
      linkText: "Sign up",
      buttonText: "Sign in with Magic link"
    },
    signup: {
      title: "Sign up with CoAI.Pro",
      paragraph: "Already have an account?",
      link: "/auth/login",
      linkText: "Login",
      buttonText: "Sign up"
    }
  };

  const config = formConfig[type];

  return (
    <div className="container mx-auto pt-20 pb-20">
      <div className="auth-box">
        <AuthHead
          title={config.title}
          paragraph={config.paragraph}
          link={config.link}
          linkText={config.linkText}
        />
        
        <form onSubmit={handleSubmit} className="mt-12 space-y-5 max-w-md mx-auto">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md placeholder:font-light shadow-input focus:outline-none focus:ring-primary focus:border-primary"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={type === 'signup' ? 'new-password' : 'current-password'}
              placeholder="Enter your password"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md placeholder:font-light shadow-input focus:outline-none focus:ring-primary focus:border-primary"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>

          {type === 'signup' && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md placeholder:font-light shadow-input focus:outline-none focus:ring-primary focus:border-primary"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-5 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            {type === 'login' && (
              <div className="text-sm">
                <Link to="/auth/forgot-password" className="font-medium text-primary hover:text-primary-dark">
                  Forgot your password?
                </Link>
              </div>
            )}
          </div>
          <div className='w-full flex items-center justify-center'>
            <button
              type="submit"
              className="!w-full max-w-full button py-4 rounded-full text-center justify-center"
            >
              {config.buttonText}
            </button>
          </div>
          <div className="pt-6">
          </div>
          <div className='text-left text-sm text-gray-500 -mt-4'>
            By clicking Sign In or Continue with, Do you agree?
            <br />
            <Link to="/auth/terms-of-use" className="font-medium text-primary hover:text-primary-dark">
              Terms of Use
            </Link>
            <span className='mx-1'>and</span>
            <Link to="/auth/privacy-policy" className="font-medium text-primary hover:text-primary-dark">
              Privacy Policy
            </Link>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default AuthForm; 