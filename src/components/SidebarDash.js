import React from 'react'

function SidebarDash() {


  return (
    <div className='sideB'>        
<ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">

    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Admin Page</div>
    </a>

    <hr className="sidebar-divider my-0"/>

    <li className="nav-item active">
        <a className="nav-link" href="/dashbord">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a>
    </li>

    <hr className="sidebar-divider"/>

    <div className="sidebar-heading">
        Interface
    </div>

    <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="buttons.html">Buttons</a>
                <a className="collapse-item" href="cards.html">Cards</a>
            </div>
        </div>
    </li>

   

    <hr className="sidebar-divider"/>

    <div className="sidebar-heading">
        Addons
    </div>

    <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
        </a>
        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Login Screens:</h6>
                <a className="collapse-item" href="/auth">Sign In</a>
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Hotel Management:</h6>
                <a className="collapse-item" href="/dashbord/add-hotel">Add Hotel</a>
            </div>
        </div>
    </li>

    <li className="nav-item">
        <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></a>
    </li>

    <li className="nav-item">
        <a className="nav-link" href="/tables">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
    </li>

    <hr className="sidebar-divider d-none d-md-block"/>

    {/* <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
    </div> */}



</ul></div>
  )
}

export default SidebarDash