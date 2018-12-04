french available after the break

# Technical test for Junior developpers

## Some technical foreword

This exercise uses a standard angular 7 stack, which is the stack used at Lucca today. If you're not familiar with the framework there are a lot of tutorials available on the web. Here is a [link](https://angular.io/tutorial) to the tutorail provided by the angular team, for this exercise you dont need to master aspects about _routing_ or _http_

We also use _lucca-front_ as a css framework. lucca-front is our in-house open source framework for building angular applications. you can find documentation of the features at this [url](https://luccasa.github.io/design-system#/) and the source code is available [here](https://github.com/LuccaSA/lucca-front)

This exercise also uses [firebase](https://firebase.google.com/) for its server side db. The db is in read only mode, no need for authentication.

> you'll remark it doesn't use it at its full potential, and there are some strange synthaxes going on.
> That's because at Lucca we dont use firebase ; we use REST APIs. As a result i tried to mimic the comportment of a REST API via firebase.
> That's why you'll see the `take(1)` used, breaking the binding between firebase and our app, because i want to mimic a `http.get` and i don't really care about the fact that a change in the db could appear instantanously in the app.
> The use of firebase is just temproary, newer version will use a REST server.

## Getting started

Fork this repo

run in a shell
- `npm i` - it will install all necessary dependencies
- `npm start` - will launch the application on localhost:4200

Submit your work via a PR to this repo

## Mission statement

I want you to enrich the page displaying a destination details, with a list of activities available at said destination. each destination have `n` activities, and an activity is linked to `1` destination.

You have a list of activities available in firebase under the path `/activities`

A moqup of what is expected is available here

## Q&A

> how much time am I suppose to work on this exercise

This exercise is supposed take between 1 to 4 hours. The amount opf time you spend on this isn't a criteria, and more isn't necessarily better. I'd rather see someone work 3 hours on this and return something thats no perfect, than someone spendong a whole weekend to return something super polished. Keep in mind you're not getting paid for the time you work on this. If you want to spend more time, you can, but do it because it brings you something (you want to hone your skills), not because you expect something from lucca.

-------------

# Test technique pour dev junior

Enoncé à venir