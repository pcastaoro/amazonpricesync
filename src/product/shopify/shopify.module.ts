import {Module} from '@nestjs/common';
import {HttpModule} from '@nestjs/axios';
import {ShopifyClient} from './shopify.client';
import {ShopifyService} from './shopify.service';

@Module({
    imports: [HttpModule],
    providers: [ShopifyClient, ShopifyService],
    exports: [ShopifyService, ShopifyClient],
})
export class ShopifyModule {
}
