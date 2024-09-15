import { JimpInstance } from "jimp";
import ImageProcessor from "./ImageProcessor";

export default class ImageProcessBlur implements ImageProcessor {
    async process(image: JimpInstance): Promise<JimpInstance> {
        await image.blur(10);
        return image;
    }
}
