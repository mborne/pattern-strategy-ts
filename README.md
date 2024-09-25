# strategy-pattern-ts

Illustration de l'intérêt du patron de conception Strategy par rapport à une approche basée sur le polymorphisme.

## Principe

Nous partons d'un projet où :

* [Application](./src/Application.ts) permet de flouter une image (`blur`).
* [cli.ts](cli.ts) expose cette application sous forme d'une API en ligne de commande :

```bash
npx tsx cli.ts data/joconde.jpg data/joconde-blur.jpg
```

Nous explorons plusieurs approches pour offrir un choix entre `blur` et `greyscale` :

* La branche ["heritage"](https://github.com/mborne/pattern-strategy-ts/tree/heritage#readme) correspond à une approche basée sur le polymorphisme au niveau de l'application ("Template Method")
* La branche ["strategie"](https://github.com/mborne/pattern-strategy-ts/tree/strategy#readme) correspond à une approche basée sur le patron de conception "Stratégie".


## Licence

[MIT](LICENSE)







