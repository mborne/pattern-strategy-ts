import process from "process";

import Application from "./src/Application";
import ImageProcessorFactory from './src/ImageProcessFactory';

async function main(){
    const params = process.argv.slice(2);
    if ( params.length != 3 ){
        throw new Error("Usage: npx tsx cli.ts <inputFile> <outputFile> (blur|greyscale)");
    }
    const inputFile = params[0];
    const outputFile = params[1] as `${string}.${string}`;
    const operationName = params[2];
    const imageProcessor = ImageProcessorFactory.createList(operationName);
    const application = new Application(imageProcessor);
    application.run(inputFile,outputFile);
}

main();
