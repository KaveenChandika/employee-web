import React from 'react'

function header({name}) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
            <div className='container-fluid'>
              <a className='navbar-brand text-white fw-semibold ms-4' href="/">{name}</a>
            </div>
        </nav>
    </div>
  )
}

export default header