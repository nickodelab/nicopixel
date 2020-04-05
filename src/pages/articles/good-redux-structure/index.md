---
title: Great Redux structure to start with REDUX
date: "2020-04-01"
layout: post
draft: false
path: "/posts/great-redux-structure/"
category: "React"
tags:
  - "Redux"
description: "If you are ready to learn and start with redux here I present to you a good structure for all kind applications."
---

## Install
First install @material-ui core. This is the main library to use the main library

```shell 
npm install @material-ui/core
```

```shell 
yarn add @material-ui/core
```

## REDUX structure
![file-structure-theme-material-ui.png](./file-structure-theme-material-ui.png)


## Using with default styles
- All components in @MUI comes with default styles (with a [default theme](https://material-ui.com/customization/default-theme/)).

```jsx
import react from 'react'
import { Button } from '@material-ui/core'

const MyComponent = () => {
  return <Button>Material UI Button</Button>
}

export default MyComponent
```

## Using with custom styles
- Using `className` in the MUI Button component is enough to apply your CSS rules

##### withStyles HOC
```jsx

```
