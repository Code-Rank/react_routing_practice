
import {Link} from "react-router-dom";
const Nav = (props) => {

    return (<>

        <nav className="navbar navbar-expand-lg " style={{ background: props.themeColor.bg }}>

            <div className="container-fluid"  style={{borderBottom:"1px solid black"}}>
                <button  style={{background:'white'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <a className="navbar-brand" href="/" style={{color:props.themeColor.color}}>CodeRank</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/login" style={{color:props.themeColor.color}} >Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup" style={{color:props.themeColor.color}}>Sign up</Link>
                        </li>
                        
                    </ul>
                    <form className="d-flex">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button> */}
                        <div className="form-check form-switch">

                            <input className="form-check-input" type="checkbox" id="mode" onClick={props.EnableDarkMode} />

                        </div>
                    </form>
                </div>
            </div>
        </nav>


    </>);
}

export default Nav;