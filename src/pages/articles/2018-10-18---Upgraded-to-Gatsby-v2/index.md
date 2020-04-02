---
title: All you need to know to use Material-UI like a PRO
date: "2020-02-16"
layout: post
draft: false
path: "/posts/install-material-ui/"
category: "React"
tags:
  - "Material-UI"
description: "Install, use, customize, advanced tips, withStyles, Icons, Theme, JSS, Tricks and Tips to start using Material-UI right now"
---

## Install
First install @material-ui core. This is the main library to use the main library

```shell 
npm install @material-ui/core
```

```shell 
yarn add @material-ui/core
```

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
import react from 'react'
import { Button, withStyles } from '@material-ui/core'

// can be an object
const customStyles = {
  myCustomClass: {
    textTransform: 'uppercase'
  }
}

// also can be a function receiving theme as parameter
// in this case you have to return an object
const customStyles = theme => ({
  myCustomClass: {
    textTransform: 'uppercase',
    padding: theme.spacing(3),
    color: theme.palette.primary.main
  }
})

const MyComponent = ({ classes }) => {
  return <Button className={classes.myCustomClass}>
          Material UI Button
         </Button>
}

export default withStyles(customStyles)(MyComponent)
```

##### makeStyles HOOK
```jsx
import react from 'react'
import { Button, makeStyles } from '@material-ui/core'

// you can use also an object as parameter for makeStyles
const useMyComponentStyle = makeStyles((theme) => ({
  myCustomClass: {
    textTransform: 'uppercase',
    padding: theme.spacing(3),
    color: theme.palette.primary.main
  }
}))

const MyComponent = () => {
  const classes = useMyComponentStyle()
  return <Button className={classes.myCustomClass}>
              Material UI Button
         </Button>
}

export default MyComponent
```

## Using overriding the internal Material-UI styles
To override styles you have to use the prop `classes` in the @MUI component. All Material-UI component.
You can find a list with all styles applied to the component in the API docs. For example, for the Button component [here](https://material-ui.com/api/button/#css) you can find all css rule name applied

```jsx
import react from 'react'
import { Button, withStyles } from '@material-ui/core'

// also can be a function receiving theme as parameter
// in this case you have to return an object
const customStyles = theme => ({
  myDisabledButton: {
    color: theme.palette.secondary.main
  }
})

// overriding the root class from the Button component
const MyComponent = ({ classes }) => {
  return <Button classes={{ disabled: classes.myDisabledButton }}>
          Material UI Button
         </Button>
}

export default withStyles(customStyles)(MyComponent)
```

#### Media queries in Material-UI

#### Using overriding @MUI styles

#### Creating a Material-UI theme

#### A little bit of JSS. The great ally for Material-UI

#### The most used Material-UI components


### Other useful information and links
* [Material-UI Official Website](https://material-ui.com/)
* 
