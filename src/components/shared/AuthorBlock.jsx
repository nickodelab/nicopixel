
import React from 'react'
import { Link } from 'gatsby'
import {
  Typography,
  Avatar,
  withStyles
} from '@material-ui/core'

const styles = theme => ({
  avatarLogo: {
    width: 150,
    height: 150,
    boxShadow: `0 4px 2px -2px ${theme.mixins.convertToRGB(theme.palette.grey[400], 0.3)}`
  },
  authorBlock: theme.mixins.flexy('column wrap', 'center', 'flex-end'),
  authorDescription: {
    marginTop: theme.spacing(4)
  }
})

const AuthorBlock = ({ classes, subtitle, imgPath, linkTo, ...avatarProps }) => (
  <div className={classes.authorBlock}>
    <Link to={linkTo}>
      <Avatar
        alt="@nicopixel Remote Fullstack Developer"
        classes={{ root: classes.avatarLogo }}
        src={imgPath}
        {...avatarProps}
      />
    </Link>
    <Typography classes={{ root: classes.authorDescription }}>{subtitle}</Typography>
  </div>
)

export default withStyles(styles)(AuthorBlock)
