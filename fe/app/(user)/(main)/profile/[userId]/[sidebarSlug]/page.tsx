"use client";

import { useParams } from "next/navigation";
import { sidebar, userProfile } from "@/Dummy_data";
import NavLink from "@/components/profile/nav-link";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/images/logo.png";
import { useActionState, useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Sidebar from "@/components/profile/Sidebar";
import { AccountFormAction } from "@/lib/accountFormAction";
import { PlaceOrder } from "@/lib/placeOrderAction";

export default function SidebarPage() {
  const params = useParams<{ userId: string; sidebarSlug: string }>();
  const userId = params.userId;
  const sidebarSlug = params.sidebarSlug;

  const user = userProfile.find((userItem) => userItem.userId === userId);

  const [country, setCountry] = useState(
    `${user?.billing_address.country_region}`
  );
  const [region, setRegion] = useState(`${user?.billing_address.province}`);

  const [billState, billFormAction, isBillPending] = useActionState(
    PlaceOrder,
    null
  );

  const [accountState, accountFormAction, isPending] = useActionState(
    AccountFormAction,
    null
  );
  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <div className="flex flex-col w-full h-[400px] relative flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-center bg-no-repeat filter blur-sm"></div>
        <div className="absolute inset-0 bg-white/10"></div>
        <Image src={logoImg} alt="Furniro" priority className="z-10" />
        <h1 className="relative z-10 font-bold text-6xl text-sub">
          My Profile
        </h1>
        <nav className="z-10 font-bold text-sm">
          <ul className="flex list-none space-x-2">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <span className="text-gray-500">{"<"}</span>
            <li>
              <NavLink href={`/profile/${userId}`}>My Profile</NavLink>
            </li>
            <span className="text-gray-500">{"<"}</span>
            <li>
              <NavLink href={`/profile/${userId}/${sidebarSlug}`}>
                {
                  sidebar.find(
                    (sidebarItem) => sidebarItem.slug === sidebarSlug
                  )?.name
                }
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto bg-white rounded-lg shadow-md p-2 md:p-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Side bar */}
          <Sidebar href={`/profile/${userId}`} />
          {/* Main */}
          {sidebarSlug === "dashboard" && (
            <main className="col-span-3">
              <div className="flex-1 p-6">
                <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded mb-6">
                  <p>
                    You are now logged in as <strong>{user?.username}</strong>.{" "}
                    <Link
                      href={`/profile/${userId}/lotgout`}
                      className="text-blue-600"
                    >
                      Log out?
                    </Link>
                  </p>
                </div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="mt-4">
                  From your account dashboard, you can view your{" "}
                  <Link
                    href={`/profile/${userId}/orders`}
                    className="text-blue-600"
                  >
                    recent orders
                  </Link>
                  , manage your{" "}
                  <a
                    href={`/profile/${userId}/billing-address`}
                    className="text-blue-600"
                  >
                    billing addresses
                  </a>
                  , and{" "}
                  <a
                    href={`/profile/${userId}/account-details`}
                    className="text-blue-600"
                  >
                    edit your password
                  </a>{" "}
                  and account details.
                </p>
              </div>
            </main>
          )}
          {sidebarSlug === "billing-address" && (
            <form action={billFormAction} className="col-span-3">
              <div id="billing-address" className="w-full px-4 py-2">
                <h2 className="mb-4 text-3xl font-bold mb-6">
                  Billing details
                </h2>
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
                      defaultValue={user?.billing_address.first_name}
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
                      defaultValue={user?.billing_address.last_name}
                    />
                  </p>
                </div>
                <p>
                  <label
                    htmlFor="company"
                    className="mb-4 block text-lg font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    className="mb-4 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
                    type="text"
                    id="company"
                    name="company"
                    defaultValue={user?.billing_address.company}
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
                    defaultValue={user?.billing_address.street_address}
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
                    defaultValue={user?.billing_address.town_city}
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
                    defaultValue={user?.billing_address.zip_code}
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
                    defaultValue={user?.billing_address.phone}
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
                    defaultValue={user?.billing_address.email}
                  />
                </p>
                <div className="w-1/5 py-4">
                  <button
                    type="submit"
                    className="p-2 bg-white text-gray-500 border rounded-md shadow-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Address
                  </button>

                  {isBillPending ? (
                    <p className="mt-2 text-gray-500">Saving...</p>
                  ) : (
                    <p className="mt-2 text-gray-500">{billState}</p>
                  )}
                </div>
              </div>
            </form>
          )}

          {sidebarSlug === "orders" && (
            <div className="col-span-3">
              {user?.orders.map((order) => (
                <div
                  key={order.orderId} // Ensure unique key for each order
                  className="p-6 bg-white rounded-lg shadow-md mb-4"
                >
                  {/* Order Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-gray-800">
                      Order ID: {order.orderId}
                    </h2>
                    <span className="text-sm text-gray-500">
                      Total Items: {order.quantity}
                    </span>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-2">
                    {order.orderDetails.map((item) => (
                      <div
                        key={`${order.orderId}-${item.id}`} // Unique key for each item
                        className="flex items-center border p-4 rounded-lg shadow-sm"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg mr-4"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{`${item.quantity} x ${item.name}`}</h3>
                          <p className="text-gray-500 text-sm">
                            Size: {item.size}, Color: {item.color}
                          </p>
                          <p className="text-gray-900 font-bold">
                            VND {item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="mt-6 border-t pt-4">
                    <div className="flex justify-between text-gray-700">
                      <span>Total Quantity:</span>
                      <span>{order.quantity} items</span>
                    </div>
                    <div className="flex justify-between text-gray-700 font-bold mt-2">
                      <span>Total Cost:</span>
                      <span>VND {order.totalCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {sidebarSlug === "account-details" && (
            <main className="col-span-3 px-4 py-2">
              <form action={accountFormAction}>
                <h2 className="mb-4 text-2xl font-bold mb-6">
                  Account details
                </h2>
                <div className="mb-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <p>
                    <label
                      htmlFor="first-name"
                      className="mb-2 block text-lg font-medium text-gray-700 mb-2"
                    >
                      First Name <span className="text-red-300">*</span>
                    </label>
                    <input
                      className="mb-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2 mb-2"
                      type="text"
                      id="first-name"
                      name="first-name"
                      defaultValue={user?.account_details.first_name}
                      required
                    />
                  </p>
                  <p>
                    <label
                      htmlFor="last-name"
                      className="mb-2 block text-lg font-medium text-gray-700 mb-2"
                    >
                      Last Name <span className="text-red-300">*</span>
                    </label>
                    <input
                      className="mb-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2 mb-2"
                      type="text"
                      id="last-name"
                      name="last-name"
                      defaultValue={user?.account_details.last_name}
                      required
                    />
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="display-name"
                    className="mb-2 block text-lg font-medium text-gray-700"
                  >
                    Display Name <span className="text-red-300">*</span>
                  </label>
                  <input
                    className="mb-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
                    type="text"
                    id="display-name"
                    name="display-name"
                    defaultValue={user?.account_details.display_name}
                    required
                  />
                  <p className="italic text-gray-400">
                    <span className="text-red-300">*</span>This will be how your
                    name will be displayed in the account section and in reviews
                  </p>
                </div>
                <p>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-lg font-medium text-gray-700"
                  >
                    Email Address <span className="text-red-300">*</span>
                  </label>
                  <input
                    className="mb-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={user?.account_details.email}
                    required
                  />
                </p>
                <div className="rounded shadow p-2">
                  <h3 className="text-xl font-semibold mt-2 mb-2">
                    Password Change
                  </h3>
                  <p>
                    <label
                      htmlFor="current-password"
                      className="mb-2 block text-lg font-medium text-gray-700"
                    >
                      Current Password
                    </label>
                    <input
                      className="mb-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
                      type="password"
                      id="current-password"
                      name="current-password"
                      placeholder="Enter your current password"
                      required
                    />
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <p>
                      <label
                        htmlFor="new-password"
                        className="mb-2 block text-lg font-medium text-gray-700"
                      >
                        New Password
                      </label>
                      <input
                        className="mb-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
                        type="password"
                        id="new-password"
                        name="new-password"
                        placeholder="Enter your new password"
                        required
                      />
                    </p>
                    <p>
                      <label
                        htmlFor="confirm-new-password"
                        className="mb-2 block text-lg font-medium text-gray-700"
                      >
                        Confirm New Password
                      </label>
                      <input
                        className="mb-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
                        type="password"
                        id="confirm-new-password"
                        name="confirm-new-password"
                        placeholder="Confirm your new password"
                        required
                      />
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="p-2 bg-white text-gray-500 border rounded-md shadow-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>

                  {isPending ? (
                    <p className="mt-2 text-gray-500">Saving...</p>
                  ) : (
                    <p className="mt-2 text-gray-500">{accountState}</p>
                  )}
                </div>
              </form>
            </main>
          )}
        </div>
      </div>
    </div>
  );
}
