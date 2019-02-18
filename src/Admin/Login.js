import React, { Component } from 'react'

import { auth } from '../firebase-config'

class Login extends Component{

  constructor(props) {
    super(props)

    this.email = null
    this.senha = null

    this.autenticaUsuario = this.autenticaUsuario.bind(this)
  }

  autenticaUsuario(e) {
    e.preventDefault()
    console.log(this.email.value, this.senha.value)
    auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
      .then(usuario => {
        console.log("Usuário Logado :", usuario)
      })
      .catch(error => {
        console.log('Error', error)
      })
  }

  render() {
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
            <small id="emailHelp"
                   className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password"
                   className="form-control"
                   id="exampleInputPassword1"
                   placeholder="Password"
                   ref={ref => this.senha = ref}
            />
          </div>

          <button className="btn btn-primary" onClick={this.autenticaUsuario}>Submit</button>

        </form>
      </div>
    )
  }
}

export default Login
