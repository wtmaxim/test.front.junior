french available after the break

# Technical test for Junior developpers

## Mission statement

This SPA provides 2 main views. the first one allows you to search for a destination and when you click on one, you'll go to the second one that display some information about said destination.

I want you to enrich the page displaying a destination'd details with a list of activities available at said destination. Each destination have `n` activities, and an activity is linked to `1` destination.

You have a list of activities available in firebase under the path `/activities`

A moqup of what is expected is available [here](https://github.com/LuccaSA/test.front.junior/blob/master/moqup-large.png) or [here](https://github.com/LuccaSA/test.front.junior/blob/master/moqup-small.png)

## Getting started

Fork this repo

run in a shell

- `npm i` - it will install all necessary dependencies
- `npm start` - will launch the application on localhost:4200

Submit your work via a PR to this repo

## Technical remarks

This exercise uses a standard angular 7 stack, which is the stack used at Lucca today. If you're not familiar with the framework there are a lot of tutorials available on the web. Here is a [link](https://angular.io/tutorial) to the tutorail provided by the angular team. For this exercise you dont need to master aspects about _routing_ or _http_.

This exercise also use _lucca-front_ as a css framework. lucca-front is our in-house open source framework for building angular applications. You can find documentation of the features at this [url](https://luccasa.github.io/design-system#/) and the source code is available [here](https://github.com/LuccaSA/lucca-front)

This exercise also uses [firebase](https://firebase.google.com/) for its server side db. The db is in read only mode, no need for authentication.

> You'll remark it doesn't use it at its full potential, and there are some strange syntaxes going on.
> That's because at Lucca we dont use firebase ; we use REST APIs. As a result i tried to mimic the comportment of a REST API via firebase.
> That's why you'll see the `take(1)` used, breaking the binding between firebase and our app, because i want to mimic a `http.get` and i don't really care about the fact that a change in the db could appear instantanously in the app.
> The use of firebase is just temproary, newer version will use a REST server.

## Q&A

> how much time am I suppose to work on this exercise

This exercise is supposed take between 1 to 4 hours. The amount of time you spend on this isn't a criteria, and more isn't necessarily better. I'd rather see someone work 3 hours on this and return something thats no perfect, than someone spending a whole weekend to return something super polished. Keep in mind you're not getting paid for the time you work on this. If you want to spend more time, you can, but do it because it brings you something (you want to hone your skills), not because you expect something from Lucca.

-------------

# Test technique pour dev junior

## Enoncé

L'application met à disposition 2 écrans, le premier permet de chercher une destination et quand vous en sélectionnez une, vous êtes dirigé vers le 2e écran qui affiche le détail de la destination en question.

Ce qui est attendu est que vous enrichissiez cet écran avec une liste d'activités touristiques disponibles à la destination en question. Le lien entre destination et activite est `1-N`, (`1` destination a `N` activites, `1` activite est liee a `1` destination)

Une liste d'activités est diponible dans la base firebase sous le chemin `/activities`

Une maquette du rendu est disponible [ici](https://github.com/LuccaSA/test.front.junior/blob/master/moqup-large.png) ou [là](https://github.com/LuccaSA/test.front.junior/blob/master/moqup-small.png)

## Marche à suivre

Faites un fork ce repo dans votre espace github

lancez ces lignes de commande

- `npm i` - installera toutes les dépendances nécessaires
- `npm start` - lancera l'application à l'adresse localhost:4200

Soumettez votre travail via une PR vers ce repo

## Remarques techniques

Cet exercice utilise une stack angular 7 classique, c'est la stack utilisée chez Lucca aujourd'hui. Si vous n'avez jamais utilisé angular ou êtes un peu rouillé, moult tutoriels sont disponibles sur le web. [Celui-ci](https://angular.io/tutorial) est le tuto fourni par la team angular. Pour cet exercice, il n'est pas nécessaire de maitriser les aspects liés au _routeur_ ou aux _appels http_.

Cet exercice utilise aussi _lucca-front_ comme framework css. Lucca-front est notre librairie open source interne de framework UI/UX pour application angular. Une documentation des composants css est disponible [ici](https://luccasa.github.io/design-system#/) et le code source est [là](https://github.com/LuccaSA/lucca-front)

Cet exercice utilise aussi [firebase](https://firebase.google.com/) comme base de donnée. La base est en lecture seule open bar, pas besoin d'authentification.

> Vous remarquerez que l'utilisation faite de firebase est tres marginale et pas vraiment dans les standards de firebase, ce qui fait apparaitre des syntaxes bizare.
> Ceci est du au fait que, chez Lucca, on n'utilise pas firebase, mais plutot des apis REST. afin de mieux coller au code lucca, j'ai essayé de reproduire le comportement d'une api REST via une base firebase.
> C'est pour ca par exemple la presence de `take(1)` dans les appels en db, pour ressembler a un appel `http.get`.
> L'utilisation de firebase est temporaire, une prochaine version de cet exercice viendra avec son propre server http REST

## FaQ

> Combien de temps je suis sense bosser dessus

C'est fait pour etre faisable en 1 a 4h. Le temps passé dessus n'est pas un critère de notation, et plus n'est pas forcément mieux. Je prefère relire le travail de quelqu'un qui y passe 3h et rend quelque chose qui marche mais n'est pas parfait, plutot que celui de quelqu'un qui y passe tout un week end et rend quelque chose d'ultra peaufiné. Gardez en memoire que vous ne serez pas payé pour le temps passé à travailler sur ce test, si vous voulez y passer plus de temps, vous pouvez, mais faites le parce que ça vous apporte quelque chose (pour affuter vos compétences angular), plutot que parce que vous attendez quelque chose en retour de la part de Lucca.