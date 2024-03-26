export type AppointListResponse = {
    GetAllAppointmentRequestsResult: GetAllAppointmentRequestsResult;
}

export type GetAllAppointmentRequestsResult = {
    Data:    Datum[];
    Error:   boolean;
    Message: string;
}

export type Datum = {
    AppointmentRequestId: number;
    AppointmentRequestNo: string;
    IsConfirmed:          boolean;
    RequestedBranchId:    number;
    RequestedBranchName:  string;
    RequestedDate:        string;
    RequestedTime:        string;
}