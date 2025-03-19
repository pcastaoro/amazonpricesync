import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ProductService} from './product.service';
import {ShopifyService} from './shopify/shopify.service';
import {ShopifyProductDto} from './shopify/shopify.product.dto';

@Controller('products')
export class ProductController {

  constructor(
      private readonly productService: ProductService,
      private readonly shopifyService: ShopifyService
  ) {
  }

  @Get('amazon-price-sync')
  async amazonSyncPrice(): Promise<string> {
    return await this.productService.amazonSyncPrice();
  }

  @Get('shopify/:id')
  async getShopifyProduct(@Param('id') id: string): Promise<ShopifyProductDto> {
    return await this.shopifyService.getProductById(Number(id));
  }

  @Post('shopify')
  async createProduct(@Body() productDto: ShopifyProductDto): Promise<ShopifyProductDto> {
    return await this.shopifyService.saveProduct(productDto);
  }

}
