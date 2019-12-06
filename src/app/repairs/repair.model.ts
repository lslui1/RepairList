export interface Repair {
  id: number;
  name: string;
  type: string;
  priority: string;
  status: string;
  materials?: any;
  price?: number;
  tools?: Tool[];
  startDate?: string;
  completionDate?: string;
  completed: boolean;
}

export interface Tool {
  id: number;
  name: string;
  description?: string;
  type?: string;
}
