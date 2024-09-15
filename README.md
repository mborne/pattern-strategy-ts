# ts-strategy-pattern

Illustration de l'intérêt du patron de conception Strategy par rapport à une approche basée sur le polymorphisme.

## Description

Nous partons d'un projet où :

* [Application](./src/Application.ts) permet de flouter une image (`blur`).
* [cli.ts](cli.ts) expose cette application sous forme d'une API en ligne de commande :

```bash
npx tsx cli.ts data/joconde.jpg data/joconde-blur.jpg
```


## Licence

[MIT](LICENSE)







