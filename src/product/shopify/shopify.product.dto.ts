import {
    IsArray,
    IsBoolean,
    IsDateString,
    IsInt,
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class ProductVariantDto {
    @IsInt()
    id: number;

    @IsInt()
    product_id: number;

    @IsString()
    title: string;

    @IsString()
    price: string;

    @IsInt()
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

    @IsDateString()
    created_at: string;

    @IsDateString()
    updated_at: string;

    @IsBoolean()
    taxable: boolean;

    @IsString()
    barcode: string;

    @IsString()
    fulfillment_service: string;

    @IsInt()
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

    @IsInt()
    inventory_item_id: number;

    @IsInt()
    inventory_quantity: number;

    @IsInt()
    old_inventory_quantity: number;

    @IsString()
    admin_graphql_api_id: string;

    @IsOptional()
    @IsInt()
    image_id?: number;
}

class ProductOptionDto {
    @IsInt()
    id: number;

    @IsInt()
    product_id: number;

    @IsString()
    name: string;

    @IsInt()
    position: number;

    @IsArray()
    @IsString({ each: true })
    values: string[];
}

class ProductImageDto {
    @IsInt()
    id: number;

    @IsString()
    alt: string;

    @IsInt()
    position: number;

    @IsInt()
    product_id: number;

    @IsDateString()
    created_at: string;

    @IsDateString()
    updated_at: string;

    @IsString()
    admin_graphql_api_id: string;

    @IsInt()
    width: number;

    @IsInt()
    height: number;

    @IsString()
    src: string;

    @IsArray()
    @IsInt({ each: true })
    variant_ids: number[];
}

class ProductMainImageDto {
    @IsInt()
    id: number;

    @IsString()
    alt: string;

    @IsInt()
    position: number;

    @IsInt()
    product_id: number;

    @IsDateString()
    created_at: string;

    @IsDateString()
    updated_at: string;

    @IsString()
    admin_graphql_api_id: string;

    @IsInt()
    width: number;

    @IsInt()
    height: number;

    @IsString()
    src: string;

    @IsArray()
    @IsInt({ each: true })
    variant_ids: number[];
}

export class ShopifyProductDto {
    @IsInt()
    id: number;

    @IsString()
    title: string;

    @IsString()
    body_html: string;

    @IsString()
    vendor: string;

    @IsString()
    product_type: string;

    @IsDateString()
    created_at: string;

    @IsString()
    handle: string;

    @IsDateString()
    updated_at: string;

    @IsOptional()
    @IsDateString()
    published_at?: string | null;

    @IsOptional()
    @IsString()
    template_suffix?: string;

    @IsString()
    published_scope: string;

    @IsString()
    tags: string;

    @IsString()
    status: string;

    @IsString()
    admin_graphql_api_id: string;

    @ValidateNested({ each: true })
    @Type(() => ProductVariantDto)
    @IsArray()
    variants: ProductVariantDto[];

    @ValidateNested({ each: true })
    @Type(() => ProductOptionDto)
    @IsArray()
    options: ProductOptionDto[];

    @ValidateNested({ each: true })
    @Type(() => ProductImageDto)
    @IsArray()
    images: ProductImageDto[];

    @IsOptional()
    @ValidateNested()
    @Type(() => ProductMainImageDto)
    image?: ProductMainImageDto | null;
}

export class ShopifyDto {
    @ValidateNested()
    @Type(() => ShopifyProductDto)
    product: ShopifyProductDto;
}
