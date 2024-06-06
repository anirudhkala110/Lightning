import React, { useState } from 'react';
import imge from './ThermostateMatter.jpg';
import 'bootstrap/js/dist/modal';
import PageNoteFound from '../Utils/PageNoteFound';

const Data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const UpdateImages = () => {
    const [addImage, setAddImage] = useState(false);
    const [pic, setPic] = useState(null);
    const [auth, setAuth] = useState(false) // it will block unauthorised uploads and page rendering

    const handleOpenImage = (img) => {
        window.open(img);
    };
    const previewImage = (event) => {
        var input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                setPic(e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    };

    return (
        <div className='min-vh-100'>
            {
                auth ? <div className='container py-3'>
                    <div className='w-100 justify-content-end d-flex my-2'>
                        <button
                            onClick={() => setAddImage(!addImage)}
                            className={`${!addImage ? 'btn btn-success' : 'btn btn-danger'}`}
                        >
                            {addImage ? <span>Close <i className='bi bi-x-lg'></i></span> : <span>Add Image <i className='bi bi-plus-lg'></i></span>}
                        </button>
                    </div>
                    {addImage && (
                        <form>
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Select Image</label>
                                <input
                                    className="form-control"
                                    type="file"
                                    id="formFile"
                                    onChange={previewImage}
                                />
                                <hr />
                                {pic ? <div className='w-100 d-flex align-items-center justify-content-center'>
                                    <img id="preview" alt="Preview Image" src={pic} style={{ height: '350px', width: '' }} />
                                </div> : <div className='w-100 d-flex align-items-center justify-content-center' style={{ height: '350px', width: '100%' }}>
                                    <center>Image Preview</center>
                                </div>}
                            </div>
                        </form>
                    )}
                    <div className='row col-12'>
                        {Data.map(data => (
                            <div key={data} className='border homehoverTab p-1 d-flex justify-content-center col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3' style={{ maxHeight: '350px' }}>
                                <div>
                                    <img
                                        src={imge}
                                        className='w-100 img-thumbnail'
                                        style={{ maxHeight: '230px', width: "100%" }}
                                        onClick={() => handleOpenImage(imge)}
                                    />
                                    <div>
                                        Image Name {data}
                                        <br />
                                        <button className='btn-warning w-50 btn'>Update</button>
                                        <button className='btn-danger w-50 btn'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> :
                    <div className='min-vh-100 bg-white'><PageNoteFound /></div>
            }
        </div>
    );
};

export default UpdateImages;
