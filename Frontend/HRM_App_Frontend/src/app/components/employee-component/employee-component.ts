import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDTO} from '../../HRM_Models/employeeDto';
import { SafeUrl } from '@angular/platform-browser';
import { EmployeeService } from '../../HRM_Services/employeeServices';
import { DocummentDto } from '../../HRM_Models/documentDto';
import { EducationInfoDto } from '../../HRM_Models/educationInfoDto';
import { EmployeefamilyInfoDto } from '../../HRM_Models/employeefamilyInfoDto';
import { EmployeeProfessionalCertificationDto } from '../../HRM_Models/employeeProfessionalCertificationDto';
// import { DropdownService } from '../../services/dropdown-service';
// import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee-component',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
  standalone: true
})

export class EmployeeComponent implements OnInit{

    private employeeService = inject(EmployeeService); 

    employees: EmployeeDTO[] = [];
    selectedEmployee: EmployeeDTO | null = null;
    formOfEmployee: FormGroup;
    isEditMode = false;
    idClient = 10001001; 
    profileFileUrl: SafeUrl | null = null;

    departments: any[] = [];
    designations: any[] = [];
    educationExaminations: any[] = [];
    educationLevels: any[] = [];
    educationResults: any[] = [];
    employeeTypes: any[] = [];
    genders: any[] = [];
    jobTypes: any[] = [];
    maritalStatus: any[] = [];
    relationship: any[] = [];
    religions: any[] = [];
    sections: any[] = [];
    weekOffs: any[] = [];

    isCreating = false;
    isEditing = false;
    private formatDate(date: Date | string): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  
  }

  constructor(
    // private dropdownService: DropdownService,
     private fb: FormBuilder,
    // private sanitizer: DomSanitizer,
    // private toastr: ToastrService
  )
  {

  
 
  this.formOfEmployee = this.fb.group({

    id: [0],
    idClient: [this.idClient],
    employeeName: [''],
    employeeNameBangla: [''],
    fatherName: [''],
    motherName: [''],
    birthDate: [null],
    joiningDate: [null],
    idDepartment: [null],
    departmentName: [''],
    idSection: [null],
    sectionName: [''],
    idDesignation: [null],
    designation: [''],
    address: [''],
    idGender: [null],
    genderName: [''],
    idReligion: [null],
    religionName: [''],
    idReportingManager: [0],
    reportingManager: [''],
    idJobType: [null],
    jobTypeName: [''],
    idEmployeeType: [null],
    typeName: [''],
    presentAddress: [''],
    nationalIdentificationNumber: [''],
    contactNo: [''],
    isActive: [true],
    hasOvertime: [false],
    hasAttendanceBonus: [false],
    idWeekOff: [null],
    weekOffDay: [''],
    idMaritalStatus: [null],
    maritalStatusName: [''],
    setDate: [this.formatDate(new Date())] ,
    createdBy: [''],
    documents: this.fb.array([]),
    educationInfos: this.fb.array([]),
    familyInfos: this.fb.array([]),
    certifications: this.fb.array([]),
    profileFile: [null],
    employeeImageBase: ['']

   
  });
    
    
  }

    ngOnInit(): void {
      
      this.formOfEmployee.disable(); 
      this.loadEmployees();
      // this.loadDropdownData();

    }

    
  selectedIndex: number | null = null;

  // selectItem(index: number) {
  //   this.selectedIndex = index;
  // }

  selectEmployee(employee: EmployeeDTO) {
  this.selectedEmployee = employee;

  this.employeeService.getEmployeeById(this.idClient,employee.id).subscribe(employee => {
    this.formOfEmployee.patchValue({
    employeeName: employee.employeeName,
    employeeNameBangla: employee.employeeNameBangla,
    fatherName: employee.fatherName,
    motherName: employee.motherName,
    birthDate: employee.birthDate ? this.formatDate(employee.birthDate): null,
    joiningDate: employee.joiningDate ? this.formatDate(employee.joiningDate): null,
    idDepartment: employee.idDepartment,
    departmentName: employee.departmentName,
    idSection: employee.idSection,
    sectionName: employee.sectionName,
    idDesignation: employee.idDesignation,
    designation: employee.designation,
    address: employee.address,
    idGender: employee.idGender,
    genderName: employee.genderName,
    idReligion: employee.idReligion,
    religionName: employee.religionName,
    idReportingManager: employee.idReportingManager,
    reportingManager: employee.reportingManager,
    idJobType: employee.idJobType,
    jobTypeName: employee.jobTypeName,
    idEmployeeType: employee.idEmployeeType,
    typeName: employee.typeName,
    presentAddress: employee.presentAddress,
    nationalIdentificationNumber: employee.nationalIdentificationNumber,
    contactNo: employee.contactNo,
    isActive: employee.isActive,
    hasOvertime: employee.hasOvertime,
    hasAttendanceBonus: employee.hasAttendenceBonus,
    idWeekOff: employee.idWeekOff,
    weekOffDay: employee.weekOffDay,
    idMaritalStatus: employee.idMaritalStatus,
    maritalStatusName: employee.maritalStatusName,
    setDate: employee.setDate ? this.formatDate(employee.setDate): null,
    createdBy: employee.createdBy,
    employeeImageBase: employee.employeeImageBase,
    EmployeeDocuments: employee.EmployeeDocuments,
    EmployeeEducationInfos: employee.EmployeeEducationInfos,
    EmployeeProfessionalCertifications: employee.EmployeeProfessionalCertifications,
    EmployeeFamilyInfos: employee.EmployeeFamilyInfos
  });

  });


  
}


  loadEmployees(): void {
    this.employeeService.getEmployees(this.idClient).subscribe(data => {
      this.employees = data;
    });
  }



    

  }
  







  //  selectEmployee(employeeId: number): void {
  //     this.employeeService.getEmployeeById(this.idClient, employeeId).subscribe({
  //    next: (e) => {
  //      this.isEditMode = true;
  //      this.selectedEmployee = e;

  //      this.employeeForm.patchValue({
  //       id: e.id,
  //       idClient: e.idClient,
  //       employeeName: e.employeeName,
  //       employeeNameBangla: e.employeeNameBangla,
  //       fatherName: e.fatherName,
  //       motherName: e.motherName,
  //       birthDate: e.birthDate ? this.formatDate(e.birthDate) : null,
  //       joiningDate: e.joiningDate ? this.formatDate(e.joiningDate) : null,
  //       idDepartment: e.idDepartment,
  //       idSection: e.idSection,
  //       idDesignation: e.idDesignation,
  //       idGender: e.idGender,
  //       idReligion: e.idReligion,
  //       idReportingManager: e.idReportingManager,
  //       reportingManager: e.reportingManager,
  //       idJobType: e.idJobType,
  //       jobTypeName: e.jobTypeName,
  //       idEmployeeType: e.idEmployeeType,
  //       typeName: e.typeName,
  //       address: e.address,
  //       presentAddress: e.presentAddress,
  //       nationalIdentificationNumber: e.nationalIdentificationNumber,
  //       contactNo: e.contactNo,
  //       isActive: e.isActive,
  //       hasOvertime: e.hasOvertime,
  //       hasAttendenceBonus: e.hasAttendenceBonus,
  //       idWeekOff: e.idWeekOff,
  //       weekOffDay: e.weekOffDay,
  //       idMaritalStatus: e.idMaritalStatus,
  //       maritalStatusName: e.maritalStatusName,
  //       setDate: e.setDate,
  //       createdBy: e.createdBy,
  //       profileImage: null
  //     });
  //     this.employeeForm.disable();
  //     this.isEditMode = true;
  //     this.clearFormArrays();
  //   }
  


