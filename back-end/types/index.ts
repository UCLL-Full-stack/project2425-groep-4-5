type Role = 'admin' | 'patient' | 'doctor';

type UserInput = {
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    userAppointments?: AppointmentInput[]
}

type PatientInput = {
    id?: number;
    user?: UserInput,
    password: string,
    role?: Role,
    birthDate?: Date,
    medicalInfo?: MedicalInfoInput
}

type MedicalInfoInput = {
    id?: number,
    bloodType?: string,
    allergies?: string[],
    currentMedications?: string[],
    patient?: PatientInput
}

type DoctorInput = {
    id?: number,
    user?: UserInput,
    specialisation?: string,
    description?: string,
    clinic?: ClinicInput
}

type ClinicInput = {
    id?: number,
    name?: string,
    address?: string,
    phone?: string,
    email?: string,
    description?: string,
    openingHours?: string,
    doctors?: DoctorInput[]
}

type AppointmentInput = {
    id?: number,
    date?: Date,
    time?: string,
    patient?: PatientInput,
    doctor?: DoctorInput,
    clinic?: ClinicInput
}

type AdminInput = {
    id?: number,
    user?: UserInput
}

export { Role };
export { UserInput };
export { PatientInput };
export { MedicalInfoInput };
export { DoctorInput };
export { ClinicInput };
export { AppointmentInput };
export { AdminInput };