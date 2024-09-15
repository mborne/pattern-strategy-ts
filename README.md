# ts-strategy-pattern

Illustration de l'intérêt du patron de conception Strategy par rapport à une approche basée sur le polymorphisme.

## Problème

Nous patrons d'un projet où :

* [Application](./src/Application.ts) permet de flouter une image (`blur`).
* [cli.ts](cli.ts) expose cette application sous forme d'une API en ligne de commande :

```bash
npx tsx cli.ts data/joconde.jpg data/joconde-blur.jpg
```

Nous souhaitons améliorer l'application en permettant deux opérations :

* Flouter une image (`blur`)
* Convertir l'image en niveau de gris (`grayscale`)

La cible est l'API suivante :

```
npx tsx cli.ts <inputFile> <outputFile> (blur|grayscale)
```

## Licence

[MIT](LICENSE)







