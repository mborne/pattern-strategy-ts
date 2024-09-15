export default interface Application {
    run(inputFile: string, outputFile: string): Promise<void>;
}
