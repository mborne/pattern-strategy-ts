import Application, { JimpImage } from "./Application";

export default class ApplicationBlur extends Application {
    protected async process(image: JimpImage): Promise<void> {
        await image.blur(10);
    }
}
