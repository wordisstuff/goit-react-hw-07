import axios from "axios";

axios.defaults.baseURL = "https://662c1014de35f91de15a5d5b.mockapi.io";
export const getContacts = async () => {
    const { data } = await axios.get("contacts");
    console.log(data)
  return data;
};
export const getDeleteContact    = async (id) => {
    const { data } = await axios.delete(`/contacts/${id}`);
    console.log(data)
  return data;
};
export const postContact = async (contact) => {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
};