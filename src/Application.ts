import { Jimp } from "jimp";

export type JimpImage = Awaited<ReturnType<typeof Jimp.read>>;

export default abstract class Application {
    async run(inputFile: string, outputFile: string): Promise<void> {
        const image = await Jimp.read(inputFile);
        await this.process(image);
        await image.write(outputFile as `${string}.${string}`);
    }

    protected abstract process(image: JimpImage): Promise<void>;
}
