import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import AdminMenu from './AdminMenu'
import AdminPortifolio from './AdminPortifolio'


class Admin extends Component{

  render() {
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
