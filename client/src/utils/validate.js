export const validPhone = (phoneNumber) => {
  return /^[\d-]+$/.test(phoneNumber);
};
