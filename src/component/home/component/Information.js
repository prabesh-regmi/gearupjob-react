import "./information.css"

function Information() {
    return (
        <>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 className="display-4">Find Jobs Here.</h1>
                    </div>
                    <hr className="light-100" />
                    <div className="col-12">
                        <p className="lead">Welcom to the GearUpJob!
                            Find best company and get jobs faster and easily from here. </p>

                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <hr className="my-4" />
            </div>

            <div className="jumbotron">
                <div className="container-fluid padding">
                    <div className="row text-center padding">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <h1 className="fas fa">J</h1>
                            <h3>JOBS</h3>
                            <p>Find all jobs.</p>
                            <a href="#"><button type="button"
                                className="btn btn-outline-success btn-lg">Jobs</button></a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <h1 className="fas fa">C</h1>
                            <h3>Company</h3>
                            <p>Here are some Top Companies.</p>
                            <a href="#"><button type="button"
                                className="btn btn-outline-success btn-lg">Company</button></a>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <h1 className="fas fa">A</h1>
                            <h3>Connect</h3>
                            <p>Connect with us</p>
                            <a href="#"><button type="button" className="btn btn-outline-success btn-lg">Join</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Information;