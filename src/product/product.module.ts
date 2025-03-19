import {Module} from '@nestjs/common';
import {HttpModule} from '@nestjs/axios';
import {ShopifyModule} from './shopify/shopify.module';
import {ProductService} from './product.service';
import {ProductController} from './product.controller';

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
        ShopifyModule,
    ],
    controllers: [ProductController],
    providers: [ProductService],
    exports: [ProductService],
})
export class ProductModule {
}
