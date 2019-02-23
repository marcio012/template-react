import React, { Component } from 'react'

import { auth } from '../firebase-config'
import {Redirect} from 'react-router-dom'

class Login extends Component{

  constructor(props) {
    super(props)

    this.state = {
      estaAutenticado: false,
      estalogado: false,
      error: false
    }

    this.email = null
    this.senha = null

    this.autenticaUsuario = this.autenticaUsuario.bind(this)
  }

  autenticaUsuario(e) {
    e.preventDefault()
    this.setState({estalogado: true, error: false})
    console.log(this.email.value, this.senha.value)
    auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
      .then(usuario => {
        console.log("Usuário Logado :", usuario)
        this.setState({estaAutenticado: true})

      })
      .catch(error => {
        console.log('Error', error)

        this.setState({error: true, estaAutenticado: false, estalogado: false})
      })
  }

  render() {

    if (this.state.estaAutenticado) {
      return <Redirect to='/admin'/>
    }

    return (
      <div className='container-fluid'>
        <h1>Login</h1>

        <form>

          <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email"
                   className="form-control"
                   id="exampleInputEmail1"
                   aria-describedby="emailHelp"
                   placeholder="nome@email.com"
                   ref={ref => this.email = ref}
            />

          </div>

          <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password"
                   className="form-control"
                   id="exampleInputPassword1"
                   placeholder="Password"
                   ref={ref => this.senha = ref}
            />

            {
              this.state.error && <small id="emailHelp"
                                         className="form-text text-muted">
                Error ao logar. Verificar nome usuário e senha.
              </small>
            }

          </div>


          <button className="btn btn-primary"
                  disabled={this.state.estalogado}
                  onClick={this.autenticaUsuario}>
            Submit
          </button>

        </form>
      </div>
    )
  }
}

export default Login
