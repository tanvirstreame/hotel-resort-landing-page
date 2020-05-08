import React from "react";
import bedroomImage from "../../assets/images/bedroom/bedroom.jpeg"
import masterBedroomImage from "../../assets/images/bedroom/master_bedroom.jpg"
import bedroomViewImage from "../../assets/images/bedroom/bedroom_view.jpg"

const CategoriesBody = () => {
    return (
        <div className="categories-body-component">
            <div className="categories-main">
                <div className="text-center categories-title">Find great places to stay</div>
                <div className="text-center">
                    <span class="th-header-divider"></span>
                </div>
                <p className="text-center categories-message">Rent some of the best apartments from Bucharest</p>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img className="card-img-top" src={bedroomImage} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img className="card-img-top" src={masterBedroomImage} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary">Explore</a>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img className="card-img-top" src={bedroomViewImage} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CategoriesBody;