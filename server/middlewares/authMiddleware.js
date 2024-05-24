export const auth = (req, res, next) => {
  console.log("I am middleware , i am called !");
  next();
};
