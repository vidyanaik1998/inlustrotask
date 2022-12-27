
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