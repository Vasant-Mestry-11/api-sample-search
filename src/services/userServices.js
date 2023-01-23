import axios from "axios";

export const getUsers = async () => {
  try {
    const res = await axios("https://jsonplaceholder.typicode.com/sers");
    return res;
  } catch (error) {
    throw error;
  }
};
