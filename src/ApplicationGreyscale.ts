import Application, { JimpImage } from "./Application";

export default class ApplicationGreyscale extends Application {
    protected async process(image: JimpImage): Promise<void> {
        await image.color([{ apply: "greyscale" }]);
    }
}
