import * as fs from 'fs';
import * as csv from 'csv-parser';

export async function loadCsvData(): Promise<string[]> {
    return new Promise((resolve, reject) => {

        const filePath = `C:\\Users\\pcast\\OneDrive\\Desktop\\products.csv`;

        const data: string[] = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                if (row['productLink']) {
                    data.push(row['productLink']);
                }
            })
            .on('end', () => {
                resolve(data);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}
