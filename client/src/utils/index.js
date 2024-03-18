export const validPhone = (phoneNumber) => {
  return /^[\d-]+$/.test(phoneNumber);
};
export const validTextField = (str) => {
  const textRegex = /^[a-zA-Z\s',-]+$/;
  return textRegex.test(str);
};
export const generateRandom = () => {
  const GENDER = Math.round(Math.random()) ? "women" : "men";
  const NUMBER = Math.floor(Math.random() * 100);

  return { GENDER, NUMBER };
};
