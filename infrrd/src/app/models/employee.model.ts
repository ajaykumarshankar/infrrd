export interface IEmployees {
    employees: IEmployee[];
}
export interface IEmployee {
    id: number;
    name: string;
    designation: string;
    team: string;
    experience: string;
    reportingManager: string;
    phone: string;
    email: string;
    ratings: number;
    doj: string;
    profile: string;
    location: string;
    shareLink: string;
}