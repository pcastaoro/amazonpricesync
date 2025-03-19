import {Injectable} from '@nestjs/common';
import {ShopifyClient} from './shopify.client';
import {ShopifyProductDto} from './shopify.product.dto';
import {plainToInstance} from 'class-transformer';
import {validateOrReject} from 'class-validator';
import {logInfo} from 'src/utils/logger.utils';

@Injectable()
export class ShopifyService {
    constructor(
        private readonly shopifyClient: ShopifyClient
    ) {
    }

    async getProductById(productId: number): Promise<ShopifyProductDto> {
        logInfo(this, `Starting with the following value for productId: ${productId}`);

        const response = await this.shopifyClient.getProductById(productId);
        const product = plainToInstance(ShopifyProductDto, response.product);
        await validateOrReject(product);

        return product;
    }

    async saveProduct(productDto: ShopifyProductDto): Promise<ShopifyProductDto> {
        logInfo(this, `Saving product with title: ${productDto.title}`);

        const response = await this.shopifyClient.createProduct(productDto);
        const product = plainToInstance(ShopifyProductDto, response.product);
        await validateOrReject(product);

        return product;
    }
}
