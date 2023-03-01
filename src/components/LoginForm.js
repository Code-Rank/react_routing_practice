

const LoginForm=(props)=>{

    return (
        <>
        <div className="container mt-5" style={{marginLeft:"30%",color:props.themeColor.color,border:`1px solid ${props.themeColor.color}`,width:"50%"}}>
            
            <h2 className="text-center mb-5 mt-3">Login</h2>
            <hr/>
            <div className="col-12" >
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                   
                    <div className="col-12 mb-5">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
            </div>
        
        </>
    );
}


export default LoginForm;