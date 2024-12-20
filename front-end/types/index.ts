export type StatusMessage = {
    message: string;
    type: "error" | "success";
};

export type User = {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    role?: string;
};