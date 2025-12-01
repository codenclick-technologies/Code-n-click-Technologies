import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function createEmployee() {
    try {
        const email = 'john.doe@codenclick.com'; // Updated unique email
        const password = 'employee123';

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            console.log('⚠️  User with this email already exists');
            console.log('📧 Email:', email);
            console.log('🔑 Try logging in with the password you set previously');
            return;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user account
        const user = await prisma.user.create({
            data: {
                name: 'John Doe',
                email: email,
                passwordHash: hashedPassword,
                role: 'EMPLOYEE',
                status: 'ACTIVE',
                mustChangePassword: false,
            },
        });

        console.log('✅ User created:', user.email);

        // Create employee profile
        const employee = await prisma.employeeProfile.create({
            data: {
                userId: user.id,
                designation: 'Software Developer',
                department: 'Tech',
                phone: '+91 9876543210',
                joiningDate: new Date('2024-01-15'),
                dateOfBirth: new Date('1995-05-20'),
                employeeCode: 'EMP001',
                location: 'Mumbai',
                salary: 50000,
            },
        });

        console.log('✅ Employee profile created:', employee.employeeCode);
        console.log('\n📧 Login Credentials:');
        console.log('Email:', user.email);
        console.log('Password:', password);
        console.log('\n🎉 Employee account created successfully!');
    } catch (error) {
        console.error('❌ Error creating employee:', error.message);
    } finally {
        await prisma.$disconnect();
    }
}

createEmployee();
