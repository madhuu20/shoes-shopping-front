import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addshoes, deleteshoes, getshoes, updateshoes } from '../redux/actions/shoesActions'

const Dashboard = () => {
    const [userResponse, setUserResponse] = useState({ hero: "https://source.unsplash.com/320x150/?shoes,newbalance,nike,boots,Skechers" })
    const config = [
        { fieldName: "title", type: "text" },
        { fieldName: "desc", type: "text" },
        { fieldName: "amount", type: "number" },
    ]
    const { shoes, shoesAdd, shoesdelete } = useSelector(state => state.sneakers)
    const handleChange = e => {
        setUserResponse({ ...userResponse, [e.target.name]: e.target.value })
    }

    const callAction = useDispatch()

    const handleSubmit = e => {
        callAction(addshoes(userResponse))
    }

    useEffect(() => {
        callAction(getshoes())
    }, [shoesAdd, shoesdelete])

    return <>


        <div className="container-expand text-center mt-3">
            <div className="container mt-3">
                {
                    config.map(item => <input
                        type={item.type}
                        name={item.fieldName}
                        onChange={handleChange}
                        className='form-control my-3'
                        placeholder={`Enter ${item.fieldName} here`}></input>)
                }
            </div>
            {/* <input type="file" className="form-control" id="customFile" /> */}
            <button onClick={handleSubmit} type="button" className="btn btn-sm btn-primary mb-3 w-50">Add Shoes</button>

            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Describtion</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shoes.map(item => <tr>
                            <td>{item.id}</td>
                            <td><img src={item.hero} alt="" /></td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>{item.amount}</td>
                            <td>
                                <button onClick={e => callAction(updateshoes(item.id))}
                                    data-bs-toggle="modal" data-bs-target="#editModal" type="button" class="btn btn-sm btn-warning px-4"><i className='bi bi-pen'></i>Edit</button>
                                <button onClick={e => callAction(deleteshoes(item.id))} type="button" class="btn btn-sm btn-danger px-4 ms-3"><i className='bi bi-trash'></i>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>


            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update shoes details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <button type="button" className='btn btn-sm btn-success mx-3 px-5' data-bs-dismiss="modal" ><i className='bi bi-trash'></i>Update</button>
                            <button type="button" className='btn btn-sm btn-danger mx-3 px-5' data-bs-dismiss="modal"><i className='bi bi-trash'></i>Cancle</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>




        {/* </div > */}
    </>
}

export default Dashboard