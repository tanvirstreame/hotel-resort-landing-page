import React from "react";
import buildingImage from "../../assets/images/bedroom/bed.jpeg"

const MotivationBody = () => {
    return (
        <div className="motivation-body-component">
            <div className="motivation-main">
                <div className="row mt-5 slide-top">
                    <div className="col-md-6">
                        <div className="motivation-message">
                            <h2>Check Our Rooms</h2>
                            <span class="th-header-divider"></span>
                            <p className="text-justify">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem Ipsum
                            is that it has a more-or-less normal distribution of letters,
                            as opposed to using 'Content here, content here', making it look
                            like readable English. 
                            </p>
                            <button className="know-more">Learn More</button>
                            
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img className="w-100" src={buildingImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MotivationBody;