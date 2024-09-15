import { JimpInstance } from "jimp";
import ImageProcessor from "./ImageProcessor";

export default class ImageProcessorGreyscale implements ImageProcessor {
    async process(image: JimpInstance): Promise<JimpInstance> {
        await image.color([{apply:'greyscale'}]);
        return image;
    }
}
