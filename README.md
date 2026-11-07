# strategy-pattern-ts

Illustration de l'intérêt du [patron de conception Strategy](https://mborne.github.io/cours-patron-conception/annexe/design_pattern/behavior/Strategy.html) par rapport à une approche basée sur le polymorphisme.

## Description

Sur cette branche correspondant à une **solution basée sur le patron [Template Method](https://mborne.github.io/architecture/patrons-conception/comportement/template-method.html)** :

* [Application](./src/Application.ts) est une classe abstraite qui porte le squelette du traitement (lecture, traitement, écriture) et délègue le traitement lui-même à la méthode abstraite `process`
* [ApplicationBlur](./src/ApplicationBlur.ts) ne redéfinit que `process` pour le cas `blur`
* [ApplicationGreyscale](./src/ApplicationGreyscale.ts) ne redéfinit que `process` pour le cas `greyscale`
* [cli.ts](./cli.ts) instancie l'application en fonction du paramètre `operationName=blur|greyscale`

Nous avons bien le fonctionnement attendu :

```bash
npx tsx cli.ts data/joconde.jpg data/joconde-blur.jpg blur
npx tsx cli.ts data/joconde.jpg data/joconde-greyscale.jpg greyscale
```

**Les limites de l'approche sont décrites dans le cours** : l'héritage ne permet pas de combiner les traitements (`blur,greyscale`) sans explosion combinatoire des classes.

## Licence

[MIT](LICENSE)
