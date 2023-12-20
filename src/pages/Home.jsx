import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getshoes } from '../redux/actions/shoesActions'

const Home = () => {
    const { shoes, shoesAdd } = useSelector(state => state.sneakers)
    const callAction = useDispatch()
    useEffect(() => {
        callAction(getshoes())
    }, [shoesAdd])

    return <>
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center">
                {
                    shoes && shoes.map(item => <div className="col-sm-4 col-md-4 col-lg-4 my-3">
                        <div key={item.id} class="card text-center">
                            <div class="card-header">
                                <strong class='fs-4'>{item.title}</strong>
                                <br />
                                <strong>{item.desc}</strong>
                            </div>
                            <div>
                                <img class='img-fluid' src={item.hero} alt="" />
                            </div>
                            <strong class="py-1">Price :- {item.amount}</strong>

                            <div class="card-footer d-flex justify-content-center align-items-center">
                                <span>Add quantity :- </span>
                                <button type="button" class="btn btn-sm btn-primary ms-2 px-3">+1</button>
                                <button type="button" class="btn btn-sm btn-primary ms-2 px-3">-1</button>
                                <button type="button" class="btn btn-sm btn-success ms-2 px-5">Buy</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

        </div >
    </>
}

export default Home