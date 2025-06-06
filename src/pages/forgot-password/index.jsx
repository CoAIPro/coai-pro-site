/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import AuthHead from '../../components/ui/auth-head';

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
      // Here you would make an API call to send reset password email
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
      <div className="auth-box">
        <AuthHead
          title="Reset Your Password"
          paragraph="Remember your password?"
          link="/auth/login"
          linkText="Login"
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
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Send Reset Instructions
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword; 