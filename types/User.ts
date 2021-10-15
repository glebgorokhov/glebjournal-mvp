export enum UserRole {
  User = "user",
  Admin = "admin",
}

export enum UserType {
  User = "user",
  SubSite = "subSite",
}

export enum UserPlan {
  Free = "free",
}

export interface User {
  name: string;
  email: string;
  join_date: number;
  avatar: string;
  rating: number;
  role: UserRole;
  type: UserType;
  plan: UserPlan;
}
