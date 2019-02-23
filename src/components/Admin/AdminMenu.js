import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = props => {

  return (

    <div className="list-group">
      <a href='/' className="list-group-item list-group-item-action active">
        Selecione uma opção
      </a>

      <Link to='/admin/portfolio' className="list-group-item list-group-item-action">Portifólio</Link>
      {/*<button type="button" className="list-group-item list-group-item-action">Morbi leo risus</button>*/}
      {/*<button type="button" className="list-group-item list-group-item-action">Porta ac consectetur ac</button>*/}
      {/*<button type="button" className="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>*/}
    </div>

  )
}

export default AdminMenu
