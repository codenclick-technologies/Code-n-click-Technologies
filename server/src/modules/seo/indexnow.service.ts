
import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class IndexNowService {
    private readonly logger = new Logger(IndexNowService.name);
    private readonly HOST = 'https://codenclick.in';
    private readonly KEY = '4f8a8b2c-9d3e-4f5a-9b8c-7d6e5f4a3b2c';
    private readonly KEY_LOCATION = `https://codenclick.in/${this.KEY}.txt`;

    async submitUrl(url: string) {
        try {
            // Bing Endpoint (Shared with Yandex)
            const endpoint = 'https://api.indexnow.org/indexnow';

            const payload = {
                host: 'codenclick.in',
                key: this.KEY,
                keyLocation: this.KEY_LOCATION,
                urlList: [url]
            };

            this.logger.log(`🚀 IndexNow: Pushing URL to Search Engines: ${url}`);

            // Fire and forget - don't block the main thread
            axios.post(endpoint, payload).then(res => {
                this.logger.log(`✅ IndexNow Success: ${res.status}`);
            }).catch(err => {
                this.logger.error(`❌ IndexNow Failed: ${err.message}`);
            });

        } catch (error) {
            this.logger.error('IndexNow Error', error);
        }
    }
}
