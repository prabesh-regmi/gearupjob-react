import img from "../../../images/Search.png"
import './search.css';

function Search() {
    return (
        <>
            <div className="s002" style={{ background: `url(${img})`, backgroundAttachment: "fixed" }}>
                <form>
                    <div className="inner-form">
                        <div className="input-field first-wrap">
                            <div className="icon-wrap">
                                <i className="fas fa-search" style={{fontSize:'14px',marginRight:'5px'}}></i>
                            </div>
                            <input name="query" id="query" className="form-control mr-sm-2" type="search" placeholder="Search Anything..." aria-label="Search" />
                        </div>
                        <div className="input-field first-wrap">
                            <div className="icon-wrap">
                                <i className="fa fa-map-marker" aria-hidden="true" style={{fontSize:'17px',marginRight:'0px'}}></i>
                            </div>
                            <input name="query1" id="query1" className="form-control mr-sm-2" type="search" placeholder="Loation..." aria-label="Search" />
                        </div>
                        <div className="input-field first-wrap">
                            <div className="icon-wrap">
                                <i className="fa fa-list-alt" aria-hidden="true" style={{fonSize:'15px',marginRight:'5px'}}></i>

                            </div>
                            <input name="query2" id="query2" list="Catagories" className="form-control mr-sm-2" type="search" placeholder="Choose a Category..." aria-label="Search" />
                            <datalist id="Catagories">

                            </datalist>

                        </div>

                        <div className="input-field fifth-wrap">
                            <button className="btn-search" type="submit">SEARCH</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Search;