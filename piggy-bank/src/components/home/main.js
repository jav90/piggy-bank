import React from 'react';

const Main = props => (
    <div>
        <div className="card text-center">
                <div className="card-header">
                    <h1>Welcome, Testname</h1>
                    <div className="home-pigu">
                    <img src={ require('./assets/images/green-pigu.png') } />
                    </div>
                
                </div>
            <div className="card-body">{props.name}</div>
        </div>
    </div>
  );
  
  export default Main;
  