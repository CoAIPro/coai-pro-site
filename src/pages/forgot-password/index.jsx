/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthHead from '../../components/reuse/auth-head';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
      return;
    }

    try {
      console.log('Sending reset email to:', email);
      setIsSubmitted(true);
    } catch (error) {
      setError('Failed to send reset email. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto">
        <div className="auth-box">
          <div className="text-center">
            <h2 className="text-2xl font-bold pb-3">Check Your Email</h2>
            <p className="text-sm text-gray-500">
              We've sent password reset instructions to {email}.<br />
              Please check your email inbox.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="auth-box py-20 px-8 border border-authBorder">
        <AuthHead
          title="Forgot Your Password"
          paragraph="Enter your email to reset your password and regain access to your account easily."
        />
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 max-w-md mx-auto">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="!w-full flex justify-center py-3 px-4 button"
            >
              Continue
            </button>
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

export default ForgotPassword; 