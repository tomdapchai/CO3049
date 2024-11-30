"use client";

import { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export default function AddressesForm() {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  return (
    <div id="address-form" className="w-full px-12 py-12">
      <h2 className="mb-4 text-3xl font-bold mb-6">Billing details</h2>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <p>
          <label
            htmlFor="first-name"
            className="mb-4 block text-lg font-medium text-gray-700 mb-4"
          >
            First Name
          </label>
          <input
            className="mb-4 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2 mb-4"
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Enter your first name"
            required
          />
        </p>
        <p>
          <label
            htmlFor="last-name"
            className="mb-4 block text-lg font-medium text-gray-700 mb-4"
          >
            Last Name
          </label>
          <input
            className="mb-4 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2 mb-4"
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Enter your last name"
            required
          />
        </p>
      </div>
      <p>
        <label
          htmlFor="company"
          className="mb-4 block text-lg font-medium text-gray-700"
        >
          Company Name (Optional)
        </label>
        <input
          className="mb-4 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
          type="text"
          id="company"
          name="company"
          placeholder="Enter your company name"
          required
        />
      </p>
      <p>
        <label
          className="mb-4 block text-lg font-medium text-gray-700"
          htmlFor="country-region"
        >
          Country / Region
        </label>
        <CountryDropdown
          classes="mb-4 px-2 py-3 rounded-full mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
          name="country-region"
          id="country-region"
          value={country}
          onChange={(val) => setCountry(val)}
        />
      </p>
      <p>
        <label
          className="mb-4 block text-lg font-medium text-gray-700"
          htmlFor="street-addr"
        >
          Street Address
        </label>
        <input
          className="mb-4 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
          type="text"
          id="street-addr"
          name="street-addr"
          placeholder="Enter your street address"
          required
        />
      </p>
      <p>
        <label
          className="mb-4 block text-lg font-medium text-gray-700"
          htmlFor="town-city"
        >
          Town / City
        </label>
        <input
          className="mb-4 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
          type="text"
          id="town-city"
          name="town-city"
          placeholder="Enter your town/city"
          required
        />
      </p>
      <p>
        <label
          className="mb-4 block text-lg font-medium text-gray-700"
          htmlFor="province"
        >
          Province
        </label>
        <RegionDropdown
          classes="mb-4 px-2 py-3 rounded-full mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
          id="province"
          name="province"
          country={country}
          value={region}
          onChange={(val) => setRegion(val)}
        />
      </p>
      <p>
        <label
          className="mb-4 block text-lg font-medium text-gray-700"
          htmlFor="zip-code"
        >
          Zip code
        </label>
        <input
          className="mb-4 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
          type="text"
          id="zip-code"
          name="zip-code"
          placeholder="Enter your zip code"
          required
        />
      </p>
      <p>
        <label
          className="mb-4 block text-lg font-medium text-gray-700"
          htmlFor="phone"
        >
          Phone
        </label>
        <input
          className="mb-4 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          required
        />
      </p>
      <p>
        <label
          className="mb-4 block text-lg font-medium text-gray-700"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          className="mb-4 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
          type="email"
          id="email"
          name="email"
          placeholder="johndoe@gmail.com"
          required
        />
      </p>
    </div>
  );
}
