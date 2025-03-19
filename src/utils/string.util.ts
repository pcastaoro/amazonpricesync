export function extractAmazonProductIdFromLink(link: string): string | null {
    try {
        const match = link.match(/\/dp\/([A-Z0-9]+)/);

        if (match && match[1]) {
            return match[1];
        }

        return null;
    } catch (error) {
        return null;
    }
}
