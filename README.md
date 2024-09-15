# ts-strategy-pattern

Illustration de l'intérêt du patron de conception Strategy par rapport à une approche basée sur le polymorphisme.

## Description

Sur cette branche correspondant à une solution basée sur l'héritage :

* [Application](./src/Application.ts) a été promue en interface
* [ApplicationBlur](./src/ApplicationBlur.ts) implémente le cas `blur`
* [ApplicationGreyscale](./src/ApplicationGreyscale.ts) implémente le cas `greyscale`
* [cli.ts](./cli.ts) est adapté pour instancier l'application en fonction du nouveau paramètre (`operationName=blur|greyscale`)

Nous avons bien le fonctionnement attendu :

```bash
npx tsx cli.ts data/joconde.jpg data/joconde-blur.jpg blur
npx tsx cli.ts data/joconde.jpg data/joconde-greyscale.jpg greyscale
```

Les limites de l'approche sont décrites dans le cours.

## Licence

[MIT](LICENSE)







