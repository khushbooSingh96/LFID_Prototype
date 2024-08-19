import React from 'react';

function Profile() {
  return (
    <div className="flex items-center justify-center min-h-screen w-[100vw] bg-gray-100">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center flex-col">
          <img
            className="w-32 h-32 rounded-full border-4 border-green-500"
            src="https://via.placeholder.com/150"
            alt="User Photo"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mt-4">John Doe</h2>
        </div>

        <div className="mt-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value="John Doe"
            disabled
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-100"
          />

          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value="john.doe@example.com"
            disabled
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-100"
          />

          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value="johndoe"
            disabled
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-100"
          />

          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Bio
          </label>
          <textarea
            id="bio"
            rows="4"
            disabled
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-100"
          > 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </textarea>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-500">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
