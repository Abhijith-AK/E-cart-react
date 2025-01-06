import React from 'react'
import Header from '../components/Header'

const View = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col mx-5">
                <div className="grid grid-cols-2 items-center h-screen">
                    <img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" width={'450px'} height={'200px'} alt="" />
                    <div className="">
                        <h3 className='font-bold'>PID : id</h3>
                        <h1 className='text-5xl font-bold'>Product Name</h1>
                        <h4 className="font-bold text-red-600 text-2xl">$ 250</h4>
                        <h4>Brand : brand</h4>
                        <h4>Category : category</h4>
                        <p>
                            <span className="font-bold">Description</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rem iusto veritatis vel? Quos rerum rem dolor doloremque amet aut, accusantium repudiandae, perspiciatis ullam in nulla delectus sed ducimus officia?
                            <div className="flex justify-between mt-5">
                                <button className="bg-blue-600 text-white p-2">Add to Wishlist</button>
                                <button className="bg-green-600 text-white p-2">Add to Cart</button>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View