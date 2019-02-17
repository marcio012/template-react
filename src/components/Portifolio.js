import React, { Component } from 'react'

import config from './../firebase-config'
import ItemPortfolio from './ItemPortfolio'

// const Portifolio = (props) => {
class Portifolio extends Component{

  constructor(props) {
    super(props)

    this.state = {
      portifolio: {
        // titulo: 'Titulo Teste',
        // descricao: 'Descricao Teste'
      }
    }

    config.syncState('portifolio', {
      context: this,
      state: 'portifolio',
      asArray: false
    })
  }

  render() {

    return (

      <div id='portfolio' className='container-fluid text-center bg-grey'>
        <h2>Portfolio</h2>
        <h4>What we have created</h4>
        <div className='row text-center '>
          {
            // /*loop portfolio*/
            // JSON.stringify(Object.keys(this.state.portifolio))
          }

          {
            Object.keys(this.state.portifolio)
              .map(key => {
                return (
                  <ItemPortfolio key={key} conteudo={this.state.portifolio[key]}/>
                )
              })
          }

        </div>

        <h2>What our customers say</h2>
        <div id='myCarousel' className='carousel slide text-center' data-ride='carousel'>

          <ol className='carousel-indicators'>
            <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
            <li data-target='#myCarousel' data-slide-to='1'></li>
            <li data-target='#myCarousel' data-slide-to='2'></li>
          </ol>


          <div className='carousel-inner' role='listbox'>
            <div className='item active'>
              <h4>
                'This company is the best. I am so happy with the result!'
                <span>Michael Roe, Vice President, Comment Box</span>
              </h4>
            </div>
            <div className='item'>
              <h4>
                'One word... WOW!!'
                <span>John Doe, Salesman, Rep Inc</span>
              </h4>
            </div>
            <div className='item'>
              <h4>
                'Could I... BE any more happy with this company?'
                <span>Chandler Bing, Actor, FriendsAlot</span>
              </h4>
            </div>
          </div>


          <a className='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>
            <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a className='right carousel-control' href='#myCarousel' role='button' data-slide='next'>
            <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </div>

    )
  }
}

export default Portifolio
