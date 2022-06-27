# Typescript starter

## Présentation
Starter pour les projets en typescript. Il est déjà configuré avec les outils suivants:
* 🏭 TSC: Compilateur pour typescript.
* 👅 Typescript 3.9.9: Langage pour le développement.
* 💪 Jest: pour les tests unitaires.

## Prérequis
Pour développer avec ce projet vous avez besoin de [nodeJS](https://nodejs.org/en/).

## Utilisation
Avant toutes utilisations, vous devez récuperer vos dependances:
```shell
npm i
```

### Pour le développement:
Votre code DOIT se trouver dans le dossier `/src`.

Pour executer votre code:
```sh
npm run start:dev
```

### Pour la création d'artefact de production
Pour compiler votre code:
```sh
npm run build
```

### Pour lancer les tests:
Les fichiers de tests doivent finir par `.spec.ts` ou par `.test.ts`.

Pour lancer les tests:
```sh
npm run test
```

Pour lancer le coverage:
```sh
npm run test:coverage
```

## Notes de version

Voir [CHANGELOG.md](./CHANGELOG.md)

2. Pour lancer les tests:
    * Pour lancer les tests unitaires sans coverage:
        ```shell
        npm run test
        ```

    * Pour lancer les tests avec le coverage:
        ```shell
        npm run test:coverage
        ```
3. Pour lancer la mise en production:
    ```shell
    npm run build
    ```