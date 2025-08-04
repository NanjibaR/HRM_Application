export interface EmployeeProfessionalCertificationDto{

    id: number;
    idClient: number;
    certificationTitle: string;
    certificationInstitute: string;
    instituteLocation: string;
    setDate: Date;
    fromDate: Date;
    toDate: Date;
    
}