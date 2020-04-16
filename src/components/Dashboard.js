import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { AxiosAuth } from '../utils/AxiosAuth';

function Dashboard() {

    useEffect(() => {
        AxiosAuth().get("https://partydox.herokuapp.com/trips/2")
            .then(res => {

            })
            .catch(err => {
                console.log(err)
            })
    },{})

  return (
    <div className="dashboard">
        <p>hello from the dashboard</p>
    </div>
  );
}

export default Dashboard;
