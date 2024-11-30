import image1 from "./public/images/sample-products/1.png";
import image2 from "./public/images/sample-products/2.png";
import image3 from "./public/images/sample-products/3.png";
import image4 from "./public/images/sample-products/4.jpg";
export const sidebar = [
  {
    slug: "dashboard",
    name: "Dashboard",
  },
  {
    slug: "orders",
    name: "Orders",
  },
  {
    slug: "billing-address",
    name: "Billing Address",
  },
  {
    slug: "account-details",
    name: "Account details",
  },
];

export const userProfile = [
  {
    userId: "1",
    username: "John Doe",
    billing_address: {
      first_name: "John",
      last_name: "Doe",
      company: "Tech Solutions Inc.",
      country_region: "United States",
      street_address: "123 Elm Street, Apt 4B",
      town_city: "San Francisco",
      province: "California",
      zip_code: "94107",
      phone: "+1 415-555-1234",
      email: "john.doe@example.com",
    },
    account_details: {
      first_name: "John",
      last_name: "Doe",
      display_name: "John Doe",
      email: "john.doe@example.com",
    },
    orders: [
      {
        orderId: "ORD1",
        totalCost: 7000000,
        quantity: 4,
        orderDetails: [
          {
            id: 1,
            name: "Syltherine",
            size: "L",
            color: "purple",
            quantity: 2,
            price: 1000000,
            image: image1,
          },
          {
            id: 2,
            name: "Leviosa",
            size: "L",
            color: "purple",
            quantity: 1,
            price: 2000000,
            image: image2,
          },

          {
            id: 3,
            name: "Lolito",
            size: "L",
            color: "purple",
            quantity: 1,
            price: 3000000,
            image: image3,
          },
        ],
      },
      {
        orderId: "ORD2",
        totalCost: 11000000,
        quantity: 5,
        orderDetails: [
          {
            id: 1,
            name: "Syltherine",
            size: "L",
            color: "purple",
            quantity: 2,
            price: 1000000,
            image: image1,
          },
          {
            id: 2,
            name: "Leviosa",
            size: "L",
            color: "purple",
            quantity: 1,
            price: 2000000,
            image: image2,
          },

          {
            id: 3,
            name: "Lolito",
            size: "L",
            color: "purple",
            quantity: 1,
            price: 3000000,
            image: image3,
          },
          {
            id: 4,
            name: "Respira",
            size: "L",
            color: "purple",
            quantity: 1,
            price: 4000000,
            image: image4,
          },
        ],
      },
    ],
  },
];
