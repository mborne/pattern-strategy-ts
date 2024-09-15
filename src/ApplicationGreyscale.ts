import Application from "./Application";

import { Jimp } from "jimp";

export default class ApplicationGreyscale implements Application {
    async run(inputFile: string, outputFile: string){
        // lecture de l'image
        const image = await Jimp.read(inputFile);
        // traitement de l'image
        await image.blur(10);
        // sauvegarde de l'image
        await image.write(outputFile as `${string}.${string}`);
    }
}
