import {
  PostApiClient,
  SimpleApiClient,
} from './apiClient';
import { AppointListResponse } from './appointment/AppointListResponse';
import { BookAppointmentResponse } from './appointment/BookAppointmentResponse';
import { RequestAppointmentResponse } from './appointment/RequestAppointmentResponse';
import { BranchResponse } from './branch/BranchResponse';
import { LoginResponse } from './login/LoginCreateSlice';
import { MasterResponse } from './master/MasterResponse';
import { PackageResponse } from './package/PackageResponse';
import { RegisterResponse } from './register/RegisterCreateSlice';
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

  if (response && response.status) {
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

//API FOR APPOINTMENT LIST
export const fetchAppointmentList = async (
  uri: any
): Promise<NetworkResponse<AppointListResponse>> => {
  const response = await SimpleApiClient(uri);

  if (response && response.status) {
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

  if (response && response.status) {
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

  if (response && response.status) {
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

//API FOR MASTER DATA
export const fetchMasterData = async (
  uri: any
): Promise<NetworkResponse<MasterResponse>> => {
  const response = await SimpleApiClient(uri);

  if (response && response.status) {
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

  if (response && response.status) {
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

  if (response && response.status) {
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
 
   if (response && response.status) {
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

 //API FOR REGISTER
export const createRegister = async (
  uri: any
 ): Promise<NetworkResponse<RegisterResponse | null>> => {
   const response = await PostApiClient(uri);
 
   if (response && response.status) {
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



