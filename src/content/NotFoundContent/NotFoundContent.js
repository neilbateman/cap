import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import FindIcon from '@material-ui/icons/FindInPage';
import HomeIcon from '@material-ui/icons/Home';
import EmptyState from '../../layout/EmptyState/EmptyState';
import App from '../../pages/src/App';

const styles = (theme) => ({
  emptyStateIcon: {
    fontSize: theme.spacing(12)
  },

  button: {
    marginTop: theme.spacing(1)
  },

  buttonIcon: {
    marginRight: theme.spacing(1)
  }
});

class NotFoundContent extends Component {
  render() {
    // Styling

    return (
<App/>
    );
  }
}

NotFoundContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFoundContent);
