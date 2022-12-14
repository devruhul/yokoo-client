import React from "react";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  // handle newsltter
  const handleNewsletter = (e) => {
    e.preventDefault();
  };

  return (
    // NewsLetter page
    <section className='bg-white dark:bg-gray-900 container'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-md sm:text-center'>
          <h3 className='text-4xl font-bold my-4 opacity-90'>
            Sign up to our
            <span className='text-purple-color opacity-90'> Newsletter</span>
          </h3>
          <p className='mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400'>
            Stay up to date with new products, announcements and exclusive
            discounts, feel free to sign up with your email.
          </p>
          <form onSubmit={handleNewsletter}>
            <div className='items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0'>
              <div className='relative w-full'>
                <label
                  htmlFor='email'
                  className='hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Email address
                </label>
                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                  <i className='fa-solid fa-envelope'></i>
                </div>
                <input
                  className='block p-3 pl-10 w-full text-md text-purple-color bg-gray-50 rounded-lg border-2 border-gray-300 sm:rounded-none sm:rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                  placeholder='Enter your email'
                  type='email'
                  id='email'
                  required=''
                />
              </div>
              <div>
                <button
                  type='submit'
                  className='py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 btn btn-primary'
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className='mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300'>
              We care about the protection of your data.{" "}
              <Link
                to='privacy'
                className='font-medium text-primary-600 dark:text-primary-500 hover:underline'
              >
                Read our Privacy Policy
              </Link>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
