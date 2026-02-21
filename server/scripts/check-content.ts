
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const post = await prisma.resource.findUnique({
        where: { slug: 'seo-2026-semantic-search-ai' },
    });
    console.log('--- CONTENT START ---');
    console.log(post?.content);
    console.log('--- CONTENT END ---');
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
