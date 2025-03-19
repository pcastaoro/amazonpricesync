import { Type } from 'class-transformer';
import {
    IsArray,
    IsBoolean,
    IsDate,
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested
} from 'class-validator';

class ShopifyProductOptionDto {
    @IsNumber()
    id: number;

    @IsNumber()
    product_id: number;

    @IsString()
    name: string;

    @IsArray()
    @IsString({ each: true })
    values: string[];
}

class ShopifyProductImageDto {
    @IsNumber()
    id: number;

    @IsOptional()
    @IsString()
    alt?: string;

    @IsNumber()
    position: number;

    @IsNumber()
    product_id: number;

    @IsDate()
    created_at: Date;

    @IsDate()
    updated_at: Date;

    @IsString()
    admin_graphql_api_id: string;

    @IsNumber()
    width: number;

    @IsNumber()
    height: number;

    @IsString()
    src: string;

    @IsArray()
    @IsNumber({}, { each: true })
    variant_ids: number[];
}

class ShopifyProductVariantDto {
    @IsNumber()
    id: number;

    @IsNumber()
    product_id: number;

    @IsString()
    title: string;

    @IsString()
    price: string;

    @IsNumber()
    position: number;

    @IsString()
    inventory_policy: string;

    @IsString()
    compare_at_price: string;

    @IsString()
    option1: string;

    @IsOptional()
    @IsString()
    option2?: string;

    @IsOptional()
    @IsString()
    option3?: string;

    @IsDate()
    created_at: Date;

    @IsDate()
    updated_at: Date;

    @IsBoolean()
    taxable: boolean;

    @IsString()
    barcode: string;

    @IsString()
    fulfillment_service: string;

    @IsNumber()
    grams: number;

    @IsString()
    inventory_management: string;

    @IsBoolean()
    requires_shipping: boolean;

    @IsString()
    sku: string;

    @IsNumber()
    weight: number;

    @IsString()
    weight_unit: string;

    @IsNumber()
    inventory_item_id: number;

    @IsNumber()
    inventory_quantity: number;

    @IsNumber()
    old_inventory_quantity: number;

    @IsString()
    admin_graphql_api_id: string;

    @IsOptional()
    @IsNumber()
    image_id?: number;
}

export class AmazonProductDto {
    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsString()
    body_html: string;

    @IsString()
    vendor: string;

    @IsOptional()
    @IsString()
    product_type?: string;

    @IsDate()
    created_at: Date;

    @IsString()
    handle: string;

    @IsDate()
    updated_at: Date;

    @IsDate()
    published_at: Date;

    @IsOptional()
    @IsString()
    template_suffix?: string;

    @IsString()
    published_scope: string;

    @IsArray()
    @IsString({ each: true })
    tags: string[];

    @IsString()
    status: string;

    @IsString()
    admin_graphql_api_id: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ShopifyProductVariantDto)
    variants: ShopifyProductVariantDto[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ShopifyProductOptionDto)
    options: ShopifyProductOptionDto[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ShopifyProductImageDto)
    images: ShopifyProductImageDto[];

    @ValidateNested()
    @Type(() => ShopifyProductImageDto)
    image: ShopifyProductImageDto;
}

