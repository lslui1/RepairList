export interface Repair {
  id: number;
  name: string;
  priority: string;
  status: string;
  materials?: any;
  price?: number;
  tools?: any;
  startDate?: Date;
  completionDate?: Date;
}
