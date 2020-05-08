import React from "react";

const getYear = () => {
    return new Date().getFullYear();
}

const TopBody = () => {

    return (
        <div className="footer-component">
            <div className="footer-main">
                <div className="row mt-5 footer">
                    <div className="col-md-4 text-white footer-link-pad-first">
                        <h6 className="text-uppercase">Quick Link</h6>
                        <p className="footer-text">Home</p>
                        <p className="footer-text">Service</p>
                        <p className="footer-text">Contact</p>
                        <p className="footer-text">Home</p>
                    </div>
                    <div className="col-md-4 text-white footer-link-pad-middle">
                        <h6 className="text-uppercase">Follow Us</h6>
                        <p className="footer-text">Facebook</p>
                        <p className="footer-text">Twitter</p>
                        <p className="footer-text">Linkedin</p>
                    </div>
                    <div className="col-md-4 text-white footer-link-pad-last">
                        <h6 className="text-uppercase">Contact Us</h6>
                        <p className="footer-text">Company Ink</p>
                    </div>
                </div>
                <div className="text-center text-white footer-bottom align-items-end p-2">
                    <p class="copyright">Copyright &copy;{getYear()}</p>
                </div>
            </div>
        </div>
    )
}

export default TopBody;