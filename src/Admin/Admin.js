import React, { Component } from 'react'
import {Redirect, Route} from 'react-router-dom'
import { auth } from '../firebase-config'

import AdminMenu from './AdminMenu'
import AdminPortifolio from './AdminPortifolio'


class Admin extends Component{

  constructor(props, context) {
    super(props, context)

    this.state = {
      estaLogando: true,
      estaAutenticado: false,
      user: null
    }

  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({
        estaLogando: false,
        estaAutenticado: !!user,
        user
      })
    })
  }


  render() {
    if (this.state.estaLogando){
      return <p>aguarde ...</p>
    }
    if (!this.state.estaAutenticado) {
      return <Redirect to='/login'/>
    }
    
    return (
      <div>
        <h2>Painel Administrativo</h2>

        <Route path={'/'} component={AdminMenu} />
        <Route path={`${this.props.match.url}/portfolio`} component={AdminPortifolio}/>
        <p>{JSON.stringify(this.props)}</p>

      </div>
    )
  }
}

export default Admin
