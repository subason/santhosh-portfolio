import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkItem {
  image: string;
  alt: string;
  label: string;
  name: string;
  category: string;
  features: string[];
  iconPath: string;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrls: []
})
export class WorkComponent {
  items: WorkItem[] = [
    {
      image: 'assets/images/kvb-bank-dashboard-screenshot.jpg',
      alt: 'KVB BANK Dashboard Screenshot',
      label: 'KVB BANK',
      name: 'Banking Dashboard',
      category: 'KVB Bank / Angular',
      features: ['Accounts', 'Transactions', 'Analytics'],
      iconPath: 'M3 10l9-6 9 6|M5 10v9M10 10v9M14 10v9M19 10v9|M3 19h18'
    },
    {
      image: 'assets/images/hrms-dashboard-screenshot.jpg',
      alt: 'HRMS Dashboard Screenshot',
      label: 'HRMS',
      name: 'Employee Dashboard',
      category: 'HRMS / Angular + React',
      features: ['Attendance', 'Leave', 'Payroll'],
      iconPath: ''
    },
    {
      image: 'assets/images/cmms-dashboard-screenshot.jpg',
      alt: 'CMMS Dashboard Screenshot',
      label: 'CMMS',
      name: 'Industrial Maintenance Dashboard',
      category: 'CMMS / Industry 4.0',
      features: ['Machines', 'Work Orders', 'IoT'],
      iconPath: ''
    },
    {
      image: 'assets/images/rems-dashboard-screenshot.jpg',
      alt: 'REMS Dashboard Screenshot',
      label: 'REMS',
      name: 'Finance / ERP Dashboard',
      category: 'Sundaram Finance REMS',
      features: ['Reports', 'Loans', 'Approvals'],
      iconPath: ''
    }
  ];
}
