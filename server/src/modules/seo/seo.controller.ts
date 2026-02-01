
import { Controller, Get, Header, Res, Query } from '@nestjs/common';
import { Public } from '../../common/decorators/public.decorator';
import { SeoService } from './seo.service';
import { Response } from 'express';

@Controller()
export class SeoController {
    constructor(private readonly seoService: SeoService) { }

    @Public()
    @Get('sitemap.xml')
    @Header('Content-Type', 'text/xml')
    async getSitemap(@Res() res: Response) {
        const sitemap = await this.seoService.generateSitemap();
        res.send(sitemap);
    }

    @Public()
    @Get('robots.txt')
    @Header('Content-Type', 'text/plain')
    async getRobots(@Res() res: Response) {
        const robots = await this.seoService.generateRobots();
        res.send(robots);
    }

    @Public()
    @Get('4f8a8b2c-9d3e-4f5a-9b8c-7d6e5f4a3b2c.txt')
    @Header('Content-Type', 'text/plain')
    getVerificationKey(@Res() res: Response) {
        res.send('4f8a8b2c-9d3e-4f5a-9b8c-7d6e5f4a3b2c');
    }

    @Public()
    @Get('snapshot')
    @Header('Content-Type', 'text/html')
    async getSnapshot(@Query('path') path: string, @Res() res: Response) {
        // Edge SEO: Serving pre-rendered content to Bots
        const snapshot = await this.seoService.generateSnapshot(path);
        res.send(snapshot);
    }
}
