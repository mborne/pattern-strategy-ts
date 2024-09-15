import ImageProcessor from "./ImageProcessor";
import ImageProcessBlur from "./ImageProcessorBlur";
import ImageProcessorGreyscale from "./ImageProcessorGreyscale";
import ImageProcessorList from "./ImageProcessorList";

export default class ImageProcessorFactory {

    static createOne(operationName: string): ImageProcessor {
        switch(operationName){
            case "blur":
                return new ImageProcessBlur();
            case "greyscale":
                return new ImageProcessorGreyscale();
            default:
                throw new Error(`operation '${operationName}' not supported`);
        }
    }

    static createList(operationNames: string): ImageProcessor {
        const result = new ImageProcessorList();
        for ( const operationName of operationNames.split(',') ){
            result.add(ImageProcessorFactory.createOne(operationName));
        }
        return result;
    }
    
}
