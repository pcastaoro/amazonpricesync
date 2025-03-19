import {HttpException, Injectable} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {lastValueFrom} from 'rxjs';
import {AxiosResponse} from 'axios';
import {SHOPIFY_CONFIG} from './shopify.config';
import {logError, logInfo} from "../../utils/logger.utils";

@Injectable()
export class ShopifyClient {
    constructor(
        private readonly httpService: HttpService
    ) {
    }

    async getProductById(productId: number): Promise<any> {
        const url = `${SHOPIFY_CONFIG.baseUrl}/products/${productId}.json`;

        try {
            const response: AxiosResponse<any> = await lastValueFrom(
                this.httpService.get<any>(url, {
                    headers: {
                        'X-Shopify-Access-Token': SHOPIFY_CONFIG.accessToken,
                    },
                }),
            );
            logInfo(this, `Product received from Shopify: ${response.statusText}`);
            return response.data;
        } catch (error) {
            logError(this, `Failed to fetch product from Shopify: ${error.message}`);
            throw new HttpException(
                `Failed to fetch product from Shopify: ${error.message}`,
                error.response?.status || 500,
            );
        }
    }

    async createProduct(productData: any): Promise<any> {
        const url = `${SHOPIFY_CONFIG.baseUrl}/products.json`;

        try {
            const response: AxiosResponse<any> = await lastValueFrom(
                this.httpService.post<any>(url, productData, {
                    headers: {
                        'X-Shopify-Access-Token': SHOPIFY_CONFIG.accessToken,
                        'Content-Type': 'application/json',
                    },
                }),
            );
            logInfo(this, `Product created on Shopify: ${response.statusText}`);
            return response.data;
        } catch (error) {
            logError(this, `Failed to create product on Shopify: ${error.message}`);
            throw new HttpException(
                `Failed to create product on Shopify: ${error.message}`,
                error.response?.status || 500,
            );
        }
    }
}
