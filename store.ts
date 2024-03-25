import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ServiceListSlice from "./app/api/service/ServiceListSlice";
import PackageListSlice from "./app/api/package/PackageListSlice";
import RequestAppointmentSlice from "./app/api/appointment/RequestAppointmentSlice";
import BookAppointmentSlice from "./app/api/appointment/BookAppointmentSlice";
import BranchListSlice from "./app/api/branch/BranchListSlice";
import LoginCreateSlice from "./app/api/login/LoginCreateSlice";
import AppointRequest from "./app/screens/appointment/AppointRequest";
import GlobalVariables from "./app/constants/GlobalVariables";

const rootReducer = combineReducers({
    ServiceList: ServiceListSlice,
    PackageList: PackageListSlice,
    RequestAppointment: RequestAppointmentSlice,
    BookAppointment: BookAppointmentSlice,
    BranchList: BranchListSlice,
    loginCreate: LoginCreateSlice,
    AppointRequest: AppointRequest,
    GlobalVariables: GlobalVariables
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;