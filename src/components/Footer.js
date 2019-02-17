import React from 'react'

const Footer = props => {
  return (

    <footer className='container-fluid text-center'>
      <a href='/' title='To Top'>
        <span className='glyphicon glyphicon-chevron-up'></span>
      </a>
      <p>
        Site Criado por Márcio Heleno usando o Bootstrap
        <a href='https://www.marcioheleno.website'
           title='Site Web Develop from Márcio Heleno'>
          www.marcioheleno.website
        </a>
      </p>
    </footer>

  )
}


export default Footer
