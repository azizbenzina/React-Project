import axios from 'axios';
import React, { useState } from 'react'
import '../styles/add-hotel.css';

function AddHotel() {
    const [title, setTitle] = useState()
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [url, setUrl] = useState()


    const [image, setImage] = useState('https://m.economictimes.com/thumb/msid-89465809,width-1254,height-836,resizemode-4,imgsize-28786/indian-hotels.jpg')

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios
        .post("http://localhost:4000/app/add-hotel", {
          title: title,
          name: name,
          price: price,
          image: image,
          url: url
        })
        .then(function(response) {
          console.log(response.data);
            alert('Hotel : '+title +' successfuly added')
        })
        .catch(function(error) {
          console.log(error);
          alert(error)
        });    }

    return (
        <div className='addhotel'>
<br />
            <form onSubmit={handleSubmit}>


                <div className="container">
                    <div id="demo" className="carousel " data-ride="carousel">
                        <div className="carousel-inner">
                             <div className="carousel-item active">
                            <div className="card"> <div className="path"><h5>DASHBOARD / ADD / HOTEL</h5> 
                            </div> 
                            <div className="row">
                                 <div className="col-md-6 text-center align-self-center">
                                <img className="img-fluid" src={image}/> </div> 
                                <div className="col-md-6 info">
                                        <div className="row title">
                                        <div className="form-group">
                                            <input type="text" name="logname" className="form-style" required  onChange={e => setTitle(e.target.value)} placeholder="set Title..." id="logname" autoComplete="off"/>
                                            <i className="input-icon uil uil-user"></i>
                                        </div>

                                            </div> 
                                            <div className="form-group mt-3">
                                            <input type="text" name="logname" className="form-style" required  onChange={e => setName(e.target.value)} placeholder="set Name..." id="logname" autoComplete="off"/>
                                            <i className="input-icon uil uil-user"></i>
                                        </div>
                                        <div className="form-group mt-3">
                                            <input type="number" name="logname" className="form-style" required  onChange={e => setPrice(e.target.value)} placeholder="set Price $..." id="logname" autoComplete="off"/>
                                            <i className="input-icon uil uil-user"></i>
                                        </div>  
                                        <div className="form-group mt-3">
                                            <input type="text" name="logname" className="form-style" required  onChange={e => setUrl(e.target.value)} placeholder="set Hotel Site..." id="logname" autoComplete="off"/>
                                            <i className="input-icon uil uil-user"></i>
                                        </div>
                                         <div className="form-group mt-3">
                                            <input type="text" name="logname" className="form-style" required  onChange={e => setImage(e.target.value)} placeholder="set Image Url..." id="logname" autoComplete="off"/>
                                            <i className="input-icon uil uil-user"></i>
                                        </div>
                                        </div> 
                                        </div> 
                                        <div className="row lower">
                                   
                                    <div className="col text-center align-self-center">
                                         <button className="btn">Add Hotel</button> 
                                    </div> 
                                    </div> 
                                    </div>
                        </div>
                        </div> 
                        </div>
                         </div>


            </form>
        </div>
    )
}

export default AddHotel