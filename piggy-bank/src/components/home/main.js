import React from 'react';

const Main = props => (
    <div>
        <div className="card text-center">
                <div className="card-header">
                    <h2>Hola</h2>
                </div>
            <div className="card-body">{props.name}</div>
        </div>
    </div>
  );
  
  export default Main;
  