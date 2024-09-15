import { JimpInstance } from "jimp";

export default interface ImageProcessor {
    process(image: JimpInstance): Promise<JimpInstance>;
}
