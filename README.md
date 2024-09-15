# ts-strategy-pattern

Illustration de l'intérêt du patron de conception Strategy par rapport à une approche basée sur le polymorphisme.

## Description

Cette branche correspondant à une **solution basée sur une stratégie** où :

* [Application](./src/Application.ts) reste une classe concrète
* [ImageProcessor](./src/ImageProcessor.ts) est la **stratégie** modélisant le traitement avec plusieurs implémentations :
  * [ImageProcessorBlur](./src/ImageProcessorBlur.ts) pour l'opération `blur`
  * [ImageProcessorGreyscale](./src/ImageProcessorGreyscale.ts) pour l'opération `greyscale`
  * [ImageProcessorList](./src/ImageProcessorList.ts) représente une liste d'opération (**patron composite**)
* [ImageProcessFactory](./src/ImageProcessFactory.ts) assure la construction en faisant abstraction sur le parsing (**fabrique statique**)
* [cli.ts](./cli.ts) est adapté pour instancier l'application en fonction du nouveau paramètre (`operationName=blur|greyscale`)

Nous avons bien le fonctionnement attendu :

```bash
npx tsx cli.ts data/joconde.jpg data/joconde-blur-greyscale.jpg blur,greyscale
```

L'intérêt de l'approche est précisé dans le cours.

## Licence

[MIT](LICENSE)

