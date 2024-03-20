import axios, {AxiosRequestConfig} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStrings from '../constants/AppStrings';
import { Alert } from 'react-native';
import { showToast } from '../constants/commonUtils';

let BASE_URL = 'http://demo.chandran.prompttechsolutions.in/Service1.svc/';


export const SimpleApiClient = async (
  endPoint: string
) => {
  try{
  const response = await axios.get(
    BASE_URL + endPoint,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
} catch (error: any) {
  if (error.response) {
    // Update UI accordingly
    showToast(error.response.data.message);
    console.log(error.response.data, error.response.status);
  } else if (error.request) {
    showToast(error.request);
  } else {
    showToast(`Error message: ${error.message}`);
  }
  throw error; // Rethrow the error to propagate it to the calling code
}
};

export const PostApiClient = async (
  endPoint: string
) => {
  try{
  const response = await axios.post(
    BASE_URL + endPoint,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
} catch (error: any) {
  if (error.response) {
    // Update UI accordingly
    showToast(error.response.data.message);
    console.log(error.response.data, error.response.status);
  } else if (error.request) {
    showToast(error.request);
  } else {
    showToast(`Error message: ${error.message}`);
  }
  throw error; // Rethrow the error to propagate it to the calling code
}
};

// export const SimpleApiClient = async (endPoint: string) => {
//   const url = BASE_URL + endPoint;

//   // Await the construction of Axios instance
//   const axiosInstance = axios.create({
//     baseURL: url,
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   });

//   // Return the Axios instance directly
//   return axiosInstance;
// };
