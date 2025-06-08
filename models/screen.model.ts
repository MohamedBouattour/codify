import { Widget } from './Widget.model';

export interface Screen {
  id: string;
  name: string;
  description: string;
  widgets: Widget[];
}
