"use server";

export async function AccountFormAction(prevState, formData) {
  function isInvalidText(text) {
    return !text || text.trim() === " ";
  }
  function isValidPassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  const account_detail = {
    first_name: formData.get("first-name"),
    last_name: formData.get("last-name"),
    display_name: formData.get("display-name"),
    email: formData.get("email"),
    current_password: formData.get("current-password"),
    new_password: formData.get("new-password"),
    confirm_new_password: formData.get("confirm-new-password"),
  };

  console.log(account_detail);
  if (
    isInvalidText(account_detail.first_name) ||
    isInvalidText(account_detail.last_name) ||
    isInvalidText(account_detail.display_name) ||
    isInvalidText(account_detail.email) ||
    !account_detail.email.includes("@") ||
    isValidPassword(account_detail.current_password) ||
    isValidPassword(account_detail.new_password) ||
    isValidPassword(account_detail.confirm_new_password) ||
    !(account_detail.new_password === account_detail.confirm_new_password)
  ) {
    return "Invalid input";
  }
  return "";
}
