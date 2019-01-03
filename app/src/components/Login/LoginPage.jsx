import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import styles from './styles.css'

class LoginPage extends React.Component {

  componentDidMount() {
    console.log('Login page mounted')
  }

    render () {
        return (
          <div className={styles.main}>
            <p>
              Select Wallet
            </p>
            <input className={styles.input}/>
            <p>
              User Name
            </p>
            <input className={styles.input}/>
            <p>
              Password
            </p>
            <input className={styles.input}/>
            <br/><br/>
            <a href="#" className={styles.button}>OK</a>
            <a href="#" className={styles.button}>Cancel</a>
          </div>
        )
    }
}

LoginPage.propTypes = {
  settings: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps)(LoginPage)
