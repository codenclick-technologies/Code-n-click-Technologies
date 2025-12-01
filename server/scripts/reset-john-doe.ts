import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function resetPassword() {
    const email = 'john.doe@codenclick.com';
    const newPassword = 'employee123';

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            console.log(`❌ User with email ${email} not found.`);
            return;
        }

        console.log(`Found user: ${user.name} (${user.role}) - Status: ${user.status}`);

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await prisma.user.update({
            where: { email },
            data: {
                passwordHash: hashedPassword,
                status: 'ACTIVE', // Ensure active
            },
        });

        console.log(`✅ Password for ${email} has been reset to: ${newPassword}`);
    } catch (error) {
        console.error('Error resetting password:', error);
    } finally {
        await prisma.$disconnect();
    }
}

resetPassword();
