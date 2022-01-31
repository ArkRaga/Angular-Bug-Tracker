export interface BUGREPORT {
  id?: number;
  name: string;
  catagory: string;
  description: string;
  assignedWorker?: string;
  status: string;
}

export interface USER {
  id?: number;
  username: string;
  password?: string;
  level?: string;
}
