

import image from './personal_phone_book.png';

const HomePage = () => {
    return (
        <div className="card m-3 border border-1" style={{ width: 1040}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start"  style={{ width: 400}}alt="personal_phone_book" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Hello! It's you personal phonebook here</h5>
                        <p className="card-text md-5"  >Let organise all your important contacts in this convenient app</p>
                        <ul className="list-group list-group-numbered md-5" style={{ width: 200}}>
                            <li className="list-group-item border border-0">Simply</li>
                            <li className="list-group-item border border-0">Reliably</li>
                            <li className="list-group-item border border-0">Available anywhere</li>

                        </ul> 
                        <h5 className="card-title"  >Register now and enjoy!</h5>

                    </div>
                      
            </div>
            </div>
        </div>
    );


}

export default HomePage;