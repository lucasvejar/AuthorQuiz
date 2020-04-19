import React from 'react'


function Continue({show, onContinue}){
    return (
        <div className="row continue">
            {show?
            <div className="col-11">
                <input type="button" className="btn btn-primary btn-lg float-right" value="Continue" onClick={onContinue} />
            </div>
            : null
            }
        </div>
    );
}


export default Continue;
