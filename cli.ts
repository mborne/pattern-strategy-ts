import process from "process";

import Application from "./src/Application";

async function main(){
    const params = process.argv.slice(2);
    if ( params.length != 2 ){
        throw new Error("Usage: npx tsx cli.ts <inputFile> <outputFile>");
    }
    const inputFile = params[0];
    const outputFile = params[1] as `${string}.${string}`;
    const application = new Application();
    application.run(inputFile,outputFile);
}

main();
