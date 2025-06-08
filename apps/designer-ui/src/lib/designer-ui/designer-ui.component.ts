import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitterModule } from 'primeng/splitter';

import { Widget } from '@code-lab/models';

@Component({
  selector: 'app-designer-ui',
  imports: [CommonModule, SplitterModule],
  templateUrl: './designer-ui.component.html',
  styleUrl: './designer-ui.component.scss',
  host: {
    class: 'app-designer-ui',
  },
})
export class DesignerUiComponent {
  widgets: Widget[] = [
    {
      id: 'widget1',
      name: 'Data Grid',
      type: 'grid',
      icon: 'pi pi-table',
      breakpoints: {
        sm: { width: 12, height: 6 },
        md: { width: 8, height: 4 },
        lg: { width: 6, height: 3 },
      },
      visibleIf: 'true',
      readonlyIf: 'false',
      allowedRoles: {
        read: ['user', 'admin'],
        write: ['admin'],
      },
      serviceAPI: {
        method: 'GET',
        url: '/api/data',
        headers: { 'Content-Type': 'application/json' },
        body: '',
      },
      dataKey: 'items',
    },
    {
      id: 'widget2',
      name: 'Chart',
      type: 'chart',
      icon: 'pi pi-table',
      breakpoints: {
        sm: { width: 12, height: 8 },
        md: { width: 6, height: 6 },
        lg: { width: 4, height: 4 },
      },
      visibleIf: 'isChartEnabled',
      readonlyIf: 'false',
      allowedRoles: {
        read: ['user', 'admin'],
        write: ['admin'],
      },
    },
    {
      id: 'widget3',
      name: 'Form',
      type: 'form',
      icon: 'pi pi-table',
      breakpoints: {
        sm: { width: 12, height: 10 },
        md: { width: 8, height: 8 },
        lg: { width: 6, height: 6 },
      },
      visibleIf: 'true',
      readonlyIf: 'isReadOnly',
      allowedRoles: {
        read: ['user', 'admin'],
        write: ['admin'],
      },
      serviceAPI: {
        method: 'POST',
        url: '/api/submit',
        headers: { 'Content-Type': 'application/json' },
        body: 'formData',
      },
    },
    {
      id: 'widget4',
      name: 'Card',
      type: 'card',
      icon: 'pi pi-table',
      breakpoints: {
        sm: { width: 12, height: 4 },
        md: { width: 6, height: 3 },
        lg: { width: 3, height: 2 },
      },
      visibleIf: 'true',
      readonlyIf: 'false',
      allowedRoles: {
        read: ['user', 'admin'],
        write: ['admin'],
      },
    },
    {
      id: 'widget5',
      name: 'Calendar',
      type: 'calendar',
      icon: 'pi pi-table',
      breakpoints: {
        sm: { width: 12, height: 8 },
        md: { width: 8, height: 6 },
        lg: { width: 6, height: 4 },
      },
      visibleIf: 'isCalendarEnabled',
      readonlyIf: 'false',
      allowedRoles: {
        read: ['user', 'admin'],
        write: ['admin'],
      },
      serviceAPI: {
        method: 'GET',
        url: '/api/events',
        headers: { 'Content-Type': 'application/json' },
        body: '',
      },
      dataKey: 'events',
    },
  ];
}
