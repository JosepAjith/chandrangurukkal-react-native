export type ServiceResponse = {
    GetAllServicesResult: GetAllServicesResult;
}

export type GetAllServicesResult = {
    Data:    Datum[];
    Error:   boolean;
    Message: string;
}

export type Datum = {
    Error:       boolean;
    Message:     string;
    ServiceId:   number;
    ServiceName: string;
}