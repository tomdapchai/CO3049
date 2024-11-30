"use server";

import { resolve } from "path";

// import { redirect } from "next/navigation";

// import { revalidatePath } from "next/cache";

export async function PlaceOrder(prevState, formData) {
  function isInvalidText(text) {
    return !text || text.trim() === " ";
  }

  const bill = {
    first_name: formData.get("first-name"),
    last_name: formData.get("last-name"),
    company: formData.get("company"),
    country_region: formData.get("country-region"),
    street_addr: formData.get("street-addr"),
    town_city: formData.get("town-city"),
    province: formData.get("province"),
    zip_code: formData.get("zip-code"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    payment_method: formData.get("payment-method"),
  };
  console.log(bill);
  if (
    isInvalidText(bill.first_name) ||
    isInvalidText(bill.last_name) ||
    isInvalidText(bill.company) ||
    isInvalidText(bill.country_region) ||
    isInvalidText(bill.street_addr) ||
    isInvalidText(bill.town_city) ||
    isInvalidText(bill.province) ||
    isInvalidText(bill.zip_code) ||
    isInvalidText(bill.phone) ||
    !bill.email.includes("@")
  ) {
    return "Invalid Input";
  }
  return "";
}
