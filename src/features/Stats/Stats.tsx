import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Stats = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="container py-2 py-md-4 py-lg-4">
            <div className="text-muted">
                <ul className="list-inline" >
                    <li className="list-inline-item">
                        <i className="far fa-clock">
                        </i>
                    </li>
                    <li className="list-inline-item">
                        <i className="far fa-eye">
                        </i>
                        <span className="ml-2">
                        </span>
                    </li>
                </ul>
                <span className="text-primary url-meta-title">
                </span>
            </div>
            <div className="card shadow-sm mt-3">
                <div className="form-row py-4">
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="text-center">
                        </div>
                        <div className="text-center pt-2">
                            <span>Scan QR Code</span>
                        </div>
                    </div>

                    <div className="col-12 col0-md-9 col-lg-9">
                        <div className="d-flex flex-column justify-content-between h-100 px-4 px-md-0 px-lg-0 pt-4 pt-md-0 pt-lg-0">
                            <div>
                                <label className="text-muted">Short Url</label></div>
                            <p>
							<span className="short-url">
							</span>
                                <button data-clipboard-text="{{ config('app.url')+'/'+url.url_key }}"
                                        className="btn btn-sm ml-4 btn-clipboard px-1 py-0 btn-outline-success">Copy</button>
                            </p>
                        </div>

                        <div className="text-overflow-ellipsis">
                            <label className="text-muted">Original Url</label></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Stats;