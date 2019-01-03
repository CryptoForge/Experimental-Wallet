import PropTypes from 'prop-types'
import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { render } from 'react-dom'

import styles from './styles.css'

import Login from './components/Login/LoginPage'



class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      pageSelection: 0
    }
  }

  render() {
        return (
            <div className={styles.wrapper}>
              <header className={styles.header}>Header</header>
                <article className={styles.main}>
                  <Login/>
                </article>
                <aside className={styles.aside} className={styles.asideA}>Aside 1</aside>
                <aside className={styles.aside} className={styles.asideB}>Aside 2</aside>
              <footer className={styles.footer}>Footer</footer>
            </div>
        )
    }
}


App.propTypes = {
  context: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    context: state.context
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators(
    {
    },
    dispatch
  )
}

export default connect(mapStateToProps, matchDispatchToProps)(App)
