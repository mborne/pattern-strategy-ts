import Application from "./Application";

import { Jimp } from "jimp";

export default class ApplicationBlur implements Application {
    async run(inputFile: string, outputFile: string){
        // lecture de l'image
        const image = await Jimp.read(inputFile);
        // traitement de l'image
        await image.color([{apply:'greyscale'}]);
        // sauvegarde de l'image
        await image.write(outputFile as `${string}.${string}`);
    }
}
