import {
  PostApiClient,
  SimpleApiClient,
} from './apiClient';
import { BookAppointmentResponse } from './appointment/BookAppointmentResponse';
import { RequestAppointmentResponse } from './appointment/RequestAppointmentResponse';
import { BranchResponse } from './branch/BranchResponse';
import { LoginResponse } from './login/LoginCreateSlice';
import { PackageResponse } from './package/PackageResponse';
import { ServiceResponse } from './service/ServiceResponse';

type ResponseKind = 'success' | 'failure';

type NetworkResponse<T> = {
  kind: ResponseKind;
  body?: T;
};

//API FOR SERVICE LIST
export const fetchServiceList = async (
  uri: any
): Promise<NetworkResponse<ServiceResponse>> => {
  const response = await SimpleApiClient(uri);

  if (response.status) {
    const json = await response.data;
    return {
      kind: 'success',
      body: json,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};

//API FOR PACKAGE LIST
export const fetchPackageList = async (
  uri: any
): Promise<NetworkResponse<PackageResponse>> => {
  const response = await SimpleApiClient(uri);

  if (response.status) {
    const json = await response.data;
    return {
      kind: 'success',
      body: json,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};

//API FOR BRANCH LIST
export const fetchBranchList = async (
  uri: any
): Promise<NetworkResponse<BranchResponse>> => {
  const response = await SimpleApiClient(uri);

  if (response.status) {
    const json = await response.data;
    return {
      kind: 'success',
      body: json,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};

//API FOR REQUESTING APPOINTMENT
export const requestAppointment = async (
  uri: any
): Promise<NetworkResponse<RequestAppointmentResponse>> => {
  const response = await PostApiClient(uri);

  if (response.status) {
    const json = await response.data;
    return {
      kind: 'success',
      body: json,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};

//API FOR BOOKING APPOINTMENT
export const bookAppointment = async (
 uri: any
): Promise<NetworkResponse<BookAppointmentResponse>> => {
  const response = await SimpleApiClient(uri);

  if (response.status) {
    const json = await response.data;
    return {
      kind: 'success',
      body: json,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};

//API FOR LOGIN
export const createLogin = async (
  uri: any
 ): Promise<NetworkResponse<LoginResponse | null>> => {
   const response = await SimpleApiClient(uri);
 
   if (response.status) {
     const json = await response.data;
     return {
       kind: 'success',
       body: json,
     };
   } else {
     return {
       kind: 'failure',
     };
   }
 };



