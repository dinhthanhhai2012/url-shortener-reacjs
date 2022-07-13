import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";


const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="container-fluid">
            <div className="p-4 text-center container">
                <h1 className="p-4 banner-title">Let shorten your links here:</h1>
            </div>
            <div className="form-row p-2">
                <div className="col-12 col-lg-6 col-md-6 offset-md-3 offset-lg-3">
                        <div className="input-group mb-3 shadow-sm">
                            <div className="form-control form-control-lg bg-light" placeholder="Paste a link to be shortened" aria-label="Paste a link to be shortened">
                            </div>
                                <div className="input-group-append ">
                                    <button type="submit"
                                            className="btn bg-blue-grey shorten-btn text-white px-4">Shorten
                                    </button>
                                </div>
                        </div>
                        <div className="custom-url">
                            <div className="custom-url--title">Custom URL (optional)</div>
                            <span className="custom-url--description text-muted d-block mb-2">
					</span>
                            <div className="site-url">
                            </div>
                            <div className="form-control form-control-sm url-field" id="custom_url_key">
                            </div>
                                <small className="ml-3" id="link-availability-status">
                                </small>
                        </div>
                    <div className="alert bg-grey-100 text-danger mt-4 alert-dismissible fade show shadow-sm"
                         role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    @endif
                </div>

            </div>
        </div>
    );
};

export default Home;