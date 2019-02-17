import React, { Component } from 'react'

import config, { storage } from './../firebase-config'

class AdminPortifolio extends Component{

  constructor(props) {
    super(props)

    this.gravaPortfolio = this.gravaPortfolio.bind(this)
  }

  gravaPortfolio(e) {
    e.preventDefault()
    console.log("Vamos Gravar")

    const arquivo = this.img.files[0]
    const {name, size, type} = arquivo

    const ref = storage.ref(name)
    ref.put(arquivo)
      .then(img => {
        img.ref.getDownloadURL()
          .then(downloadURL => {

            const novoPortifolio = {
              titulo: this.titulo.value,
              descricao: this.descricao.value,
              img: downloadURL
            }


            // gravando no firebase
            config.push('portifolio', {
              data: novoPortifolio
            })
        })
      })

    console.log(arquivo)
  }


  render() {
    return (

      <div className="container-fluid">
        <h2>Portifolio na Area Administrativa</h2>
        <form onSubmit={this.gravaPortfolio}>
          <div className="form-group text-left">
            <label htmlFor="titulo">Titulo:</label>
            <input type="text"
                   className="form-control"
                   id="titulo"
                   aria-describedby="titulo do portfolio"
                   placeholder="Titulo do Portfolio"
                   ref={(ref) => this.titulo = ref }
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="descricao">Descrição:</label>
            <textarea className="form-control"
                      id="descricao"
                      placeholder="descricao do projeto"
                      ref={(ref) => this.descricao = ref}
            />
          </div>
          <div className="form-group text-left">
            <label className="form-check-label" htmlFor="img">Upload da Imagem</label>
            <input type="file"
                   className="form-control-file"
                   id="img"
                   ref={(ref) => this.img = ref}
            />
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
