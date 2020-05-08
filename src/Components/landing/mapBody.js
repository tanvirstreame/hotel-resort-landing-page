import React from "react";

const MapBody = () => {
    return (
        <div className="map-body-component text-center">
            <div className="map-main">
                <h4 className="text-center mt-5 contact-us">Contact Us</h4>
                <span class="th-header-divider"></span>
                <div class="row">
                    <div className="col-md-12">
                        <iframe
                            width="600"
                            height="500"
                            className="gmap"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapBody;