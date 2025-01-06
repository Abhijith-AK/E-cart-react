import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Header />
            <div className="container px-4 mx-auto" style={{ paddingTop: '100px' }}>
                <div className="grid grid-cols-4 gap-4">
                    <div className="rounded border p-2 shadow">
                        <img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" width={'100%'} height={'200px'} alt="" />
                        <div className="text-center">
                            <h3 className='text-xl font-bold'>Product name</h3>
                            <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More..</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home