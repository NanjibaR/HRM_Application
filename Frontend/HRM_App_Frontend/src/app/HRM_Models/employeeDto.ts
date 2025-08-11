import { DocummentDto } from "./documentDto";
import { EducationInfoDto } from "./educationInfoDto";
import { EmployeefamilyInfoDto } from "./employeefamilyInfoDto";
import { EmployeeProfessionalCertificationDto } from "./employeeProfessionalCertificationDto";

export interface EmployeeDTO{
    
    id: number;
    idClient: number;
    employeeName: string;
    employeeNameBangla: string;
    fatherName: string;
    motherName: string;
    birthDate: Date;
    joiningDate: Date;
    idDepartment: number;
    departmentName: string,
    idSection: number,
    sectionName: string,
    idDesignation: number,
    designation: string,
    address: string,
    idGender: number,
    genderName: string,
    idReligion?: number;
    religionName?: string;
    idReportingManager?: number;
    reportingManager?: string;
    idJobType?: number;
    jobTypeName?: string;
    idEmployeeType?: number;
    typeName?: string;
    presentAddress?: string;
    nationalIdentificationNumber?: string;
    contactNo?: string;
    isActive?: boolean;
    hasOvertime?: boolean;
    hasAttendenceBonus?: boolean;
    idWeekOff?: number;
    weekOffDay?: string;
    idMaritalStatus?: number;
    maritalStatusName?: string;
    setDate?: Date;
    createdBy?: string;
    profileFile?: File;
    employeeImageBase?: string;
    EmployeeDocuments: DocummentDto[];
    EmployeeEducationInfos: EducationInfoDto[];
    EmployeeProfessionalCertifications: EmployeeProfessionalCertificationDto[];
    EmployeeFamilyInfos: EmployeefamilyInfoDto[];
    

}


