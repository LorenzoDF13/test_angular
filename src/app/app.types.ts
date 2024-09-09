export interface Bill {
  id: number;
  name?: string;
  items: BillItem[];
  total?: number;
}
export interface BillItem {
  name: string;
  price: number;
  quantity: number;
}
