import { PrismaClient, Role, UserStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seed...');

    // Create Owner account
    const ownerPassword = await bcrypt.hash('Owner@123', 10);
    const owner = await prisma.user.upsert({
        where: { email: 'owner@codenclick.com' },
        update: {},
        create: {
            name: 'System Owner',
            email: 'owner@codenclick.com',
            passwordHash: ownerPassword,
            role: Role.OWNER,
            status: UserStatus.ACTIVE,
            mustChangePassword: false,
        },
    });
    console.log('✅ Created OWNER account:', owner.email);

    // Create HR account
    const hrPassword = await bcrypt.hash('HR@123', 10);
    const hr = await prisma.user.upsert({
        where: { email: 'hr@codenclick.com' },
        update: {},
        create: {
            name: 'HR Manager',
            email: 'hr@codenclick.com',
            passwordHash: hrPassword,
            role: Role.HR,
            status: UserStatus.ACTIVE,
            mustChangePassword: false,
        },
    });
    console.log('✅ Created HR account:', hr.email);

    // Create Manager account
    const managerPassword = await bcrypt.hash('Manager@123', 10);
    const manager = await prisma.user.upsert({
        where: { email: 'manager@codenclick.com' },
        update: {},
        create: {
            name: 'Team Manager',
            email: 'manager@codenclick.com',
            passwordHash: managerPassword,
            role: Role.MANAGER,
            status: UserStatus.ACTIVE,
            mustChangePassword: false,
        },
    });
    console.log('✅ Created MANAGER account:', manager.email);

    // Create Employee account
    const employeePassword = await bcrypt.hash('Employee@123', 10);
    const employee = await prisma.user.upsert({
        where: { email: 'employee@codenclick.com' },
        update: {},
        create: {
            name: 'John Employee',
            email: 'employee@codenclick.com',
            passwordHash: employeePassword,
            role: Role.EMPLOYEE,
            status: UserStatus.ACTIVE,
            mustChangePassword: false,
        },
    });
    console.log('✅ Created EMPLOYEE account:', employee.email);

    // Create sample jobs
    const job1 = await prisma.job.upsert({
        where: { id: '00000000-0000-0000-0000-000000000001' },
        update: {},
        create: {
            id: '00000000-0000-0000-0000-000000000001',
            title: 'Senior Full Stack Developer',
            department: 'Engineering',
            location: 'Remote',
            jobType: 'FULL_TIME',
            experienceLevel: 'FIVE_TO_TEN',
            salaryMin: 80000,
            salaryMax: 120000,
            salaryCurrency: 'USD',
            description: 'We are looking for an experienced Full Stack Developer to join our engineering team. You will work on cutting-edge web applications using React, Node.js, and modern cloud technologies.',
            responsibilities: 'Design and develop scalable web applications\nCollaborate with cross-functional teams\nWrite clean, maintainable code\nParticipate in code reviews\nMentor junior developers',
            requirements: '5+ years of experience in full-stack development\nStrong proficiency in React and Node.js\nExperience with TypeScript\nKnowledge of cloud platforms (AWS/GCP)\nExcellent problem-solving skills',
            benefits: 'Competitive salary\nHealth insurance\nRemote work flexibility\n401(k) matching\nProfessional development budget',
            isActive: true,
            isVisibleOnWebsite: true,
            openings: 2,
            createdById: owner.id,
        },
    });
    console.log('✅ Created sample job:', job1.title);

    const job2 = await prisma.job.upsert({
        where: { id: '00000000-0000-0000-0000-000000000002' },
        update: {},
        create: {
            id: '00000000-0000-0000-0000-000000000002',
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Hybrid',
            jobType: 'FULL_TIME',
            experienceLevel: 'THREE_TO_FIVE',
            salaryMin: 60000,
            salaryMax: 90000,
            salaryCurrency: 'USD',
            description: 'Join our design team to create beautiful, user-friendly interfaces for our products and client projects.',
            responsibilities: 'Create wireframes and prototypes\nDesign user interfaces\nConduct user research\nCollaborate with developers\nMaintain design systems',
            requirements: '3+ years of UI/UX design experience\nProficiency in Figma and Adobe Creative Suite\nStrong portfolio\nUnderstanding of design principles\nExcellent communication skills',
            benefits: 'Competitive salary\nHealth insurance\nFlexible work arrangements\nCreative freedom\nLatest design tools',
            isActive: true,
            isVisibleOnWebsite: true,
            openings: 1,
            createdById: owner.id,
        },
    });
    console.log('✅ Created sample job:', job2.title);

    console.log('\n🎉 Database seeded successfully!\n');
    console.log('📋 Test Credentials:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('OWNER:    owner@codenclick.com    / Owner@123');
    console.log('HR:       hr@codenclick.com       / HR@123');
    console.log('MANAGER:  manager@codenclick.com  / Manager@123');
    console.log('EMPLOYEE: employee@codenclick.com / Employee@123');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
