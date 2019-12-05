export interface Repair {
  id: number;
  name: string;
  type: string;
  priority: string;
  status: string;
  materials?: any;
  price?: number;
  tools?: any;
  startDate?: string;
  completionDate?: string;
  completed: boolean;
}
