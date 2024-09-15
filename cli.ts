import process from "process";

import ApplicationBlur from "./src/ApplicationBlur";
import ApplicationGreyscale from "./src/ApplicationBlur";
import Application from "./src/Application";

function createApplication(operationName): Application {
    switch(operationName){
        case "blur":
            return new ApplicationBlur();
        case "greyscale":
            return new ApplicationGreyscale();
        default:
            throw new Error(`operation '${operationName}' not supported`);
    }
}

async function main(){
    const params = process.argv.slice(2);
    if ( params.length != 3 ){
        throw new Error("Usage: npx tsx cli.ts <inputFile> <outputFile> (blur|greyscale)");
    }
    const inputFile = params[0];
    const outputFile = params[1] as `${string}.${string}`;
    const operationName = params[2];
    const application = createApplication(operationName);
    application.run(inputFile,outputFile);
}

main();
