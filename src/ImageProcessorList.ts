import { JimpInstance } from "jimp";
import ImageProcessor from "./ImageProcessor";

export default class ImageProcessorList implements ImageProcessor {
    readonly processors: Array<ImageProcessor>;

    constructor(){
        this.processors = [];
    }

    add(processor: ImageProcessor){
        this.processors.push(processor);
    }

    async process(image: JimpInstance): Promise<JimpInstance>{
        let result = image;
        for ( const processor of this.processors ){
            result = await processor.process(result);
        }
        return result;
    }
}
