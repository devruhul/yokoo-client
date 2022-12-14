import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useBicycleData } from "../Hooks/useBicycleData";
import "./BookingDetails.css";

const BookingDetails = () => {
  const { id } = useParams();
  const { yokooUser } = useAuth();

  // Initial booking details
  const initialBookingInfo = {
    yokooUserName: yokooUser?.displayName,
    email: yokooUser?.email,
    orderStatus: ["Pending"],
  };

  const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

  // load sing bicycle by id
  const { isLoading, data, isError, error } = useBicycleData(id);

  // If data is loading
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // If there is any error
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  // Handle change of input
  const handleOnBlur = (e) => {
    const nameInputField = e.target.name;
    const valueInputField = e.target.value;

    setBookingInfo({
      ...bookingInfo,
      [nameInputField]: valueInputField,
    });
  };

  // Handle the booking form submit
  const handleBookingDetails = (e) => {
    setBookingInfo({
      ...bookingInfo,
    });

    // Send booking bicycle data to server side
    axios
      .post("https://yokoo-server.vercel.app/booking", bookingInfo)
      .then((data) => {
        if (data.data?.insertedId) {
          alert("Sent your booking to database Successfully!");
          e.target.reset();
        } else {
          alert("error!");
        }
      });
    // Stop reloading the page
    e.preventDefault();
  };

  return (
    // Bicycle booking form
    <form
      onSubmit={handleBookingDetails}
      className='flex w-full  space-x-3 mx-auto'
    >
      <div className='w-full  px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800'>
        <div className='mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white'>
          Booking The Service
          <span className='text-purple-color'> {data.data?.bicycleName}</span>
        </div>
        <div className='grid max-w-xl grid-cols-2 gap-4 m-auto'>
          <div className='col-span-2 lg:col-span-2'>
            <div className=' relative '>
              <input
                name='userName'
                type='text'
                id='contact-form-user-name'
                className='flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                required
                autoFocus
                onBlur={handleOnBlur}
                defaultValue={yokooUser?.displayName}
                placeholder='Enter Full Name'
              />
            </div>
          </div>
          <div className='col-span-2 lg:col-span-2'>
            <div className=' relative '>
              <input
                name='userEmail'
                type='email'
                id='contact-form-user-email'
                className='flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                required
                onBlur={handleOnBlur}
                defaultValue={yokooUser?.email}
                placeholder='Enter Email'
              />
            </div>
          </div>
          <div className='col-span-2 lg:col-span-2'>
            <div className=' relative '>
              <input
                name='phoneNumber'
                type='number'
                id='contact-form-user-number'
                className='flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                required
                onBlur={handleOnBlur}
                placeholder='Enter Phone Number'
              />
            </div>
          </div>
          <div className='col-span-2 lg:col-span-2'>
            <div className=' relative '>
              <input
                name='bicycleTitle'
                type='text'
                id='contact-form-name'
                className='flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                readOnly
                onBlur={handleOnBlur}
                defaultValue={data.data?.bicycleName}
                placeholder='Bicycle Title'
              />
            </div>
          </div>
          <div className='col-span-2 lg:col-span-2'>
            <div className='currency-wrap relative'>
              <span className='currency-code text-purple-color'>$</span>
              <input
                name='bicyclePrice'
                type='number'
                id='contact-form-email'
                className=' text-currency flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                readOnly
                onBlur={handleOnBlur}
                defaultValue={data.data?.price}
                placeholder='Bicycle Price'
              />
            </div>
          </div>
          <div className='col-span-2 lg:col-span-2'>
            <div className='relative'>
              <input
                name='bicycleImg'
                type='text'
                id='contact-form-email'
                className=' flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                readOnly
                onBlur={handleOnBlur}
                value={data.data?.imageLink}
                placeholder='Bicycle Image'
              />
            </div>
          </div>
          <div className='col-span-2 lg:col-span-2'>
            <div className=' relative '>
              <input
                name='addInfo'
                type='text'
                id='contact-form-message'
                className='flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                required
                onBlur={handleOnBlur}
                placeholder='Add your additional booking info'
              />
            </div>
          </div>
          <div className='col-span-2 lg:col-span-2'>
            <div className=' relative '>
              <textarea
                name='bicycleDescription'
                type='text'
                id='contact-form-email'
                className='flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                readOnly
                onBlur={handleOnBlur}
                defaultValue={data.data?.description}
                placeholder='Bicycle Description'
                rows='5'
                cols='40'
              />
            </div>
          </div>
          <div className='col-span-2'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BookingDetails;
