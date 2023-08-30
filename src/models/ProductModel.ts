import Department from "./DepartmentEnum";

export default interface Product {
  id: string;
  createdAt: string;
  name: string;
  price: string;
  countInStock: number;
  description?: string;
  department?: Department;
}
