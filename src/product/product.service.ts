import {Injectable} from '@nestjs/common';
import {AmazonProductDto} from "./amazon/amazon.product.dto";
import {logError, logInfo} from "../utils/logger.utils";
import {loadCsvData} from '../utils/csv.util';
import {extractAmazonProductIdFromLink} from "../utils/string.util";
import {ShopifyService} from "./shopify/shopify.service"
import {AmazonService} from "./amazon/amazon.service"
import {ShopifyProductDto} from "./shopify/shopify.product.dto";

@Injectable()
export class ProductService {

  constructor(
      private readonly shopifyService: ShopifyService,
      private readonly amazonService: AmazonService
  ) {
  }

  async amazonSyncPrice(): Promise<string> {
    logInfo(this, `Starting the flow`);

    const productLinks = await loadCsvData();

    for (const productLink of productLinks) {
      logInfo(this, `Processing with the following value for productLink: ${productLink}`);

      const amazonProductId = extractAmazonProductIdFromLink(productLink);
      //TODO: Dev the getProductById of Amazon
      const amazonProductDto: AmazonProductDto = await this.amazonService.getProductById(Number(amazonProductId));

      try {
        const shopifyProductDto: ShopifyProductDto = await this.shopifyService.getProductById(Number(14755956883788));
        logInfo(this, `Product with ID ${14755956883788} found. Proceeding with update process.`);
        //TODO: Call the UpdateProduct API of Shopify: await this.shopifyService.updateProduct(amazonProductDto);

      } catch (error) {
        if (error?.response?.status === 404) {  //TODO: Also check for "Not found" status
          logInfo(this, `Product with ID ${14755956883788} not found (404). Proceeding to create a new product.`);

          const newShopifyProductDto: ShopifyProductDto = await this.shopifyService.saveProduct(new ShopifyProductDto());
          logInfo(this, `New product successfully created on Shopify: ${JSON.stringify(newShopifyProductDto)}`);

          //TODO: Save the ID of the Shopify product associated with the Amazon link somewhere
        } else {
          //TODO: Create a table for all products with errors so they can be processed later
          logError(this, `Error while fetching product with ID ${14755956883788}: ${error.message}`);
          throw error;
        }
      }
    }

    logInfo(this, `Ending the flow`);
    return 'Amazon Sync Price completed correctly.';
  }

}
