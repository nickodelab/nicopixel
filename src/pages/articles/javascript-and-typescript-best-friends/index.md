---
title: Javascript and Typescript: Best friends!
date: '2021-10-26'
layout: post
draft: true
path: '/posts/javascript-and-typescript-best-friends/'
category:
  - 'Typescript'
  - 'React'
description: 'bla bla'
---

### Interfaces

Object interfaces

```ts
interface User {
  name: string
  id: number
}
const user: User = {
  name: 'Hayes',
  id: 0,
}
```

Classes interfaces

```ts
interface User {
  name: string
  id: number
}

class UserAccount {
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}

const user: User = new UserAccount('Murphy', 1)
```

Interfaces to indicates that a function returns an interface

```ts
function getAdminUser(): User {
  //...
}
```

In an interface you can use:

- `boolean`
- `bigint`
- `null`
- `number`
- `string`
- `symbol`
- `undefined`

TypeScript extends this list with a few more:

- `any`: anything
- `unknown`: someone using this type declares what the type is
- `never`: it’s not possible that this type could happen
- `void`: function which returns undefined or has no return value

### Composing Types

With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with unions, and with generics.

#### Unions

You can use Unions to create complex types by combining simple ones.

```ts
type WindowStates = 'open' | 'closed' | 'minimized'
type LockStates = 'locked' | 'unlocked'
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9
```

```ts
function getLength(obj: string | string[]) {
  return obj.length
}
```

#### Generics

An array with generics can describe the values that the array contains.

```ts
type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{ name: string }>
```

You can declare your own types that use generics:

```ts
interface Backpack<Type> {
  add: (obj: Type) => void
  get: () => Type
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get()

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23)
// ERROR!! => Argument of type 'number' is not assignable to parameter of type 'string'.
```

### Structural Typing or "Duck Typing"

In the following example the point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check.

```ts
interface Point {
  x: number
  y: number
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`)
}

// logs "12, 26"
const point = { x: 12, y: 26 }
logPoint(point)
```

The shape-matching only requires a subset of the object’s fields to match.

```ts
const point3 = { x: 12, y: 26, z: 89 }
logPoint(point3) // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 }
logPoint(rect) // logs "33, 3"

const color = { hex: '#187ABF' }
logPoint(color) // ERROR!
```
