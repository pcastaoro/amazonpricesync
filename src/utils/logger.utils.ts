export function logInfo(context: any, message: string) {
    const timestamp = new Date().toISOString();
    const className = context.constructor.name;

    const methodName = (new Error().stack || '')
        .split('\n')
        .map(line => line.trim())
        .find(line => line.includes(className))
        ?.match(/\.([a-zA-Z0-9_]+) /)?.[1] || 'unknown';

    console.log(`[${timestamp}] - [${className}.${methodName}] - INFO: ${message}`);
}

export function logError(context: any, message: string) {
    const timestamp = new Date().toISOString();
    const className = context.constructor.name;

    const methodName = (new Error().stack || '')
        .split('\n')
        .map(line => line.trim())
        .find(line => line.includes(className))
        ?.match(/\.([a-zA-Z0-9_]+) /)?.[1] || 'unknown';

    console.error(`[${timestamp}] - [${className}.${methodName}] - ERROR: ${message}`);
}
