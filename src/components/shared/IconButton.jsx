import React from 'react'
import { IconButton as MUIIconButton, withStyles } from '@material-ui/core'

const styles = theme => ({
  iconButton: {
    padding: 0,
    margin: theme.spacing(1),
  },
  link: {
    color: 'inherit',
  },
})

const IconButton = ({
  classes,
  IconComponent,
  label,
  goTo,
  external,
  ...props
}) => (
  <MUIIconButton
    aria-label={label}
    classes={{ root: classes.iconButton }}
    color="primary"
    component="span"
    {...props}
  >
    {goTo ? (
      <a
        title={label}
        href={goTo}
        rel={external ? 'noreferrer noopener nofollow' : undefined}
        className={classes.link}
        target={external ? '_blank' : undefined}
      >
        <IconComponent />
      </a>
    ) : (
      <IconComponent />
    )}
  </MUIIconButton>
)

export default withStyles(styles)(IconButton)
