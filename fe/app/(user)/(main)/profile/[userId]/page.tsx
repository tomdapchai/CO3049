import NavLink from "@/components/profile/nav-link";
import Image from "next/image";
import logoImg from "@/public/images/logo.png";
import { userProfile } from "@/Dummy_data";
import Sidebar from "@/components/profile/Sidebar";

import Link from "next/link";
import { use } from "react";

const page = ({ params }: { params: Promise<{ userId: string }> }) => {
  const { userId } = use(params);
  const user = userProfile.find((userItem) => userItem.userId === userId);

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
          </ul>
        </nav>
      </div>
      <div className="container mx-auto bg-white rounded-lg shadow-md p-6 md:p-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Sidebar href={`/profile/${userId}`} />

          <main className="col-span-3">
            <div className="flex-1 p-6">
              <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded mb-6">
                <p>
                  You are now logged in as <strong>{user?.username}</strong>.{" "}
                  <Link
                    href={`/profile/${userId}/logout`}
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
                <Link
                  href={`/profile/${userId}/billing-address`}
                  className="text-blue-600"
                >
                  billing addresses
                </Link>
                , and{" "}
                <Link
                  href={`/profile/${userId}/account-details`}
                  className="text-blue-600"
                >
                  edit your password
                </Link>{" "}
                and account details.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default page;
