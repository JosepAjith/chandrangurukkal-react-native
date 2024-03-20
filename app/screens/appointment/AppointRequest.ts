export type VariableState = {
    PatientId: number;
    RequestedBranch: number;
    RequestedDate: string;
    RequestedTime: string;
    RequestedServicesOrPackages: { ProductId: number }[];
    AppointmentRequestId: number;
  };
  
  const initialState: VariableState = {
    PatientId: 0,
    RequestedBranch: 0,
    RequestedDate: '',
    RequestedTime: '',
    RequestedServicesOrPackages: [],
    AppointmentRequestId: 0
  };
  
  const SET_PATIENT_ID = 'SET_PATIENT_ID';
  const SET_REQUESTED_BRANCH = 'SET_REQUESTED_BRANCH';
  const SET_REQUESTED_DATE = 'SET_REQUESTED_DATE';
  const SET_REQUESTED_TIME = 'SET_REQUESTED_TIME';
  const SET_REQUESTED_SERVICES_OR_PACKAGES = 'SET_REQUESTED_SERVICES_OR_PACKAGES';
  const SET_REQUEST_ID = 'SET_REQUEST_ID';
  
  const AppointRequest = (
    state = initialState,
    action: { type: string; payload: any }
  ) => {
    switch (action.type) {
      case SET_PATIENT_ID:
        return {
          ...state,
          PatientId: action.payload,
        };
      case SET_REQUESTED_BRANCH:
        return {
          ...state,
          RequestedBranch: action.payload,
        };
      case SET_REQUESTED_DATE:
        return {
          ...state,
          RequestedDate: action.payload,
        };
      case SET_REQUESTED_TIME:
        return {
          ...state,
          RequestedTime: action.payload,
        };
      case SET_REQUESTED_SERVICES_OR_PACKAGES:
        return {
          ...state,
          RequestedServicesOrPackages: action.payload,
        };
        case SET_REQUEST_ID:
          return {
            ...state,
            AppointmentRequestId: action.payload,
          };
      default:
        return state;
    }
  };
  
  export default AppointRequest;
  