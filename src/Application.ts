import {Jimp, JimpInstance} from 'jimp';
import ImageProcessor from './ImageProcessor';


export default class Application {

    readonly imageProcessor: ImageProcessor;

    constructor(imageProcessor: ImageProcessor){
        this.imageProcessor = imageProcessor;
    }

    async run(inputFile: string, outputFile: string){
        // lecture de l'image
        const image = await Jimp.read(inputFile);
        // traitement de l'image
        const result = await this.imageProcessor.process(image as JimpInstance);
        // sauvegarde de l'image
        await image.write(outputFile as `${string}.${string}`);
    }
}
