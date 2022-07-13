import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <div className="card shadow-sm" v-cloak>
                <div className="card-body pt-4 pb-2">
                    <div className="mb-2 d-flex justify-content-between">
                        <h4 className="card-title">My URLs</h4>
                        <div className="btn btn-sm text-white bg-blue-grey">
                            Add URL
                        </div>
                    </div>
                    <div className="form-row bg-light text-blue-grey py-2">
                        <div className="col-12 col-md-3 p-2">
                            Short URL
                        </div>
                        <div className="col-12 col-md-5 p-2">
                            Long URL
                        </div>
                        <div className="col-md-1 p-2">
                            Clicks
                        </div>
                        <div className="col-md-2 p-2">
                            Date
                        </div>
                        <div className="col-md-1 p-2">
                            Actions
                        </div>
                    </div>
                    <div className="form-row border-bottom" v-for="(url,index) in urls" v-if="urls.length>0||!isLoading">
                        <div className="col-12 col-md-3 p-2 text-blue-grey">
                            </div>
                        <div className="col-12 col-md-5 p-2 text-overflow-ellipsis">
                            <a className="text-muted" target="_blank">
                            </a>
                        </div>
                        <div className="col-md-1 p-2">
                        </div>
                        <div className="col-12 col-md-2 p-2">
                        </div>
                        <div className="col-12 col-md-1 p-2">
                            <a className="fas fa-eye text-blue-grey">
                            </a>
                        <i className="fas fa-trash text-danger ml-2">
                        </i>
                </div>
            </div>
            <div className="text-center"  v-if="isLoading">
                Loading . . .
            </div>
            <div className="text-center"  v-if="urls.length==0">
                <h2 className="text-muted text-grey">No Urls Found</h2>
            </div>
            <div className="d-flex justify-content-between py-2" v-if="urls.length>0 && pagination.last_page!=1">
                <button className="btn btn-sm text-white bg-blue-grey" >Previous</button>
            <div>
                Page
            </div>
            <button className="btn btn-sm text-white bg-blue-grey" >Next</button>
</div>
</div>
            </div>
        </div>

    );
};
export default Dashboard;