import {Injectable} from '@nestjs/common';
import {logInfo} from 'src/utils/logger.utils';
import {AmazonProductDto} from "./amazon.product.dto";

@Injectable()
export class AmazonService {

    async getProductById(productId: number): Promise<AmazonProductDto> {
        logInfo(this, `Starting with the following value for productId: ${productId}`);

        return new AmazonProductDto();
    }

}
