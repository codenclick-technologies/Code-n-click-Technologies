import { Injectable } from '@nestjs/common';

@Injectable()
export class PayrollService {
    // Mock data
    private payrolls = [
        {
            id: '1',
            month: 'November',
            year: 2025,
            status: 'PENDING_APPROVAL', // DRAFT, PENDING_APPROVAL, APPROVED, PAID
            totalAmount: 150000,
            employeesCount: 15,
            createdAt: new Date().toISOString(),
        }
    ];

    private salarySlips = [
        {
            id: '1',
            employeeId: 'emp1',
            employeeName: 'John Doe',
            month: 'November',
            year: 2025,
            basic: 50000,
            hra: 20000,
            allowances: 10000,
            deductions: 5000,
            netSalary: 75000,
            status: 'GENERATED'
        }
    ];

    async getPayrollSummary() {
        return {
            lastRun: this.payrolls[0],
            totalExpense: 1500000,
            pendingApprovals: 1
        };
    }

    async runPayroll(month: string, year: number) {
        const newPayroll = {
            id: Date.now().toString(),
            month,
            year,
            status: 'PENDING_APPROVAL',
            totalAmount: Math.floor(Math.random() * 500000) + 100000,
            employeesCount: 15,
            createdAt: new Date().toISOString(),
        };
        this.payrolls.unshift(newPayroll);
        return newPayroll;
    }

    async approvePayroll(id: string) {
        const payroll = this.payrolls.find(p => p.id === id);
        if (payroll) {
            payroll.status = 'APPROVED';
        }
        return payroll;
    }

    async getSalarySlips(employeeId?: string) {
        if (employeeId) {
            return this.salarySlips.filter(s => s.employeeId === employeeId);
        }
        return this.salarySlips;
    }

    async generateSlip(employeeId: string, month: string, year: number) {
        return {
            id: Date.now().toString(),
            employeeId,
            employeeName: 'Employee Name',
            month,
            year,
            basic: 50000,
            hra: 20000,
            allowances: 10000,
            deductions: 5000,
            netSalary: 75000,
            status: 'GENERATED'
        };
    }

    async emailSlip(id: string) {
        // Mock email sending logic
        return {
            success: true,
            message: `Salary slip ${id} emailed successfully`,
            timestamp: new Date().toISOString()
        };
    }

    async emailAllSlips(month: string, year: number) {
        // Mock bulk email sending logic
        return {
            success: true,
            message: `All salary slips for ${month} ${year} queued for emailing`,
            count: this.salarySlips.length,
            timestamp: new Date().toISOString()
        };
    }
}
