export type PurchaseResponse = {
    Message:   string;
    Error:     boolean;
    PatientId: number;
    Data:      Datum[];
}

export type Datum = {
    AppointmentId:     number;
    Status:            string;
    PurchasedItemName: string;
    AppointmentDate:   string;
    AppointmentTime:   string;
    BranchName:        string;
    ItemDetails:       ItemDetail[];
}

export type ItemDetail = {
    ProductId:   number;
    ProductName: string;
    ProductType: string;
    SalesId:     number;
    ImgUrl:      string;
}