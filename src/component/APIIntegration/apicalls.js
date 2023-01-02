
import axios from "axios";
import baseApi from "./baseapi";

export const getCustomerDetails = async (
    customerId,
    isheader
  ) => {
      try {    
        const response = await baseApi.get("/users",  {       
        });
        return response?.data;
      } catch (error) {
        return error;
      }
    
  };


  export const searchCustomer = async (
    customerId,
    isheader
  ) => {
      try {    
        const response = await baseApi.get("/users",  {       
        });
        return response?.data;
      } catch (error) {
        return error;
      }
    
  };

  export const getHomePageSearchContentAPI = async (keyword) => {
    try {
      const response = await baseApi.get(
        `users/search?q=${keyword}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };