export interface Widget {
  id: string;
  name: string;
  type: string;
  icon: string;
  breakpoints: {
    sm: { width: number; height: number };
    md: { width: number; height: number };
    lg: { width: number; height: number };
  };
  visibleIf: string;
  readonlyIf: string;
  allowedRoles: {
    read: string[];
    write: string[];
  };
  serviceAPI?: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    headers: { [key: string]: string };
    body: string;
  };
  dataKey?: string;
}
