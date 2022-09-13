export interface Location {
    zipCode: string;
    city: string;
    state: string;
}

export interface School {
    name: string;
    location: Location;
}

export interface User {
    firstName: string;
    lastName: string;
    authority: "admin" | "teacher" | "student";
}

export interface Admin extends User {
    authority: "admin"
}

export interface Teacher extends User {
    authority: "teacher"
}

export interface Student extends User {
    authority: "student"
}