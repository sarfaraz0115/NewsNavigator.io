import React from 'react'

const Placeholder = (props) => {
  return (
    <div>
        <div className="card" aria-hidden="true" style={{ width: '20rem', backgroundColor:props.background ===  '#1f1f1f' ? '#1f1f1f' : 'white'}}>
                <img src='.//src//assets//Images&Icons//tempImage.jpg' className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                </div>
            </div>
    </div>
  )
}

export default Placeholder
