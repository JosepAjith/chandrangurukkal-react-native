import axios, {AxiosRequestConfig} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStrings from '../constants/AppStrings';
import { Alert } from 'react-native';
import { showToast } from '../constants/commonUtils';

let BASE_URL = 'https://example.com/api/';


export const getWithAuthCall = async (
  endPoint: string
) => {
  const response = await axios.get(
    BASE_URL + endPoint,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization:
          'Bearer ' + (await AsyncStorage.getItem(AppStrings.ACCESS_TOKEN)),
      },
    },
  );
  return response;
};

export const SimpleApiClient = async (endPoint: string) => {
  const url = BASE_URL + endPoint;

  // Create an Axios instance with the constructed URL
  return axios.create({
    baseURL: url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
