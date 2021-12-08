import React from 'react'
import { Button, withStyles } from '@material-ui/core'
import { ShoppingCart as ShoppingCartIcon } from '@material-ui/icons'

const styles = theme => ({
  amazonButton: {
    background: '#f4d078',
    background: '-webkit-linear-gradient(top, #f7dfa5, #f0c14b)',
    background: 'linear-gradient(to bottom,#f7dfa5,#f0c14b)',
    '&:hover': {
      color: 'inherit',
      background: '-webkit-linear-gradient(top,#f5d78e,#eeb933)',
    },
  },
})

const AmazonButton = ({ classes, label, goTo, href, ...props }) => (
  <Button
    aria-label={label}
    classes={{ root: classes.amazonButton }}
    startIcon={<ShoppingCartIcon />}
    variant="contained"
    href={goTo}
    disableElevation
    target="_blank"
    {...props}
  >
    {label}
  </Button>
)

export default withStyles(styles)(AmazonButton)
