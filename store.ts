import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ServiceListSlice from "./app/api/service/ServiceListSlice";
import PackageListSlice from "./app/api/package/PackageListSlice";
import RequestAppointmentSlice from "./app/api/appointment/RequestAppointmentSlice";
import BookAppointmentSlice from "./app/api/appointment/BookAppointmentSlice";
import BranchListSlice from "./app/api/branch/BranchListSlice";

const rootReducer = combineReducers({
    ServiceList: ServiceListSlice,
    PackageList: PackageListSlice,
    RequestAppointment: RequestAppointmentSlice,
    BookAppointment: BookAppointmentSlice,
    BranchList: BranchListSlice
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