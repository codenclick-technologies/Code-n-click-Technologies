const { PrismaClient } = require('@prisma/client');

process.env.DATABASE_URL = 'postgresql://postgres:password@localhost:5432/code_n_click?schema=public';

console.log('Imported PrismaClient:', PrismaClient);

const prisma = new PrismaClient();
console.log('Prisma instance:', prisma);

async function main() {
    try {
        console.log('Attempting to connect to:', process.env.DATABASE_URL);
        await prisma.$connect();
        console.log('✅ Connected to database successfully via Prisma');

        if (!prisma.user) {
            throw new Error('prisma.user is undefined');
        }

        const userCount = await prisma.user.count();
        console.log(`Found ${userCount} users`);
    } catch (e) {
        console.error('❌ Connection failed:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
