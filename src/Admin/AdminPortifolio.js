import React, { Component } from 'react'

import config, { storage } from './../firebase-config'

class AdminPortifolio extends Component{

  render() {
    return (

      <div className="container-fluid">
        <h2>Portifolio na Area Administrativa</h2>
        <form>
          <div className="form-group text-left">
            <label htmlFor="titulo">Titulo:</label>
            <input type="text"
                   className="form-control"
                   id="titulo"
                   aria-describedby="titulo do portfolio"
                   placeholder="Titulo do Portfolio"
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="descricao">Descrição:</label>
            <textarea className="form-control"
                      id="descricao"
                      placeholder="descricao do projeto"
            />
          </div>
          <div className="form-group text-left">
            <label className="form-check-label" htmlFor="img">Upload da Imagem</label>
            <input type="file" className="form-control-file" id="img"/>
          </div>
          <div className="form-group text-left">
            <button type="submit" className="btn btn-primary">Salvar</button>
          </div>
        </form>
      </div>
    )
  }


}

export default AdminPortifolio
