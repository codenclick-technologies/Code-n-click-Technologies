import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: 'postgresql://postgres:password@localhost:5432/code_n_click?schema=public',
        },
    },
});

async function main() {
    try {
        await prisma.$connect();
        console.log('✅ Connected to database successfully via Prisma');
        const userCount = await prisma.user.count();
        console.log(`Found ${userCount} users`);
    } catch (e) {
        console.error('❌ Connection failed:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
