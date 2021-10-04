import React from 'react'
import { Chip, withStyles } from '@material-ui/core'

const styles = theme => ({
  badge: {
    margin: '2px',
  },
})

const Badge = ({ label, isFeatured, classes }) => (
  <Chip
    classes={{ root: classes.badge }}
    label={label}
    color={isFeatured ? 'primary' : 'default'}
  />
)

export default withStyles(styles)(Badge)
