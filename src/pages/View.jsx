import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

const View = () => {
    const { id } = useParams()
    console.log(id);

    const [product, setProduct] = useState([])

    useEffect(() => {
        if (sessionStorage.getItem("allProducts")) {
            const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
            console.log(allProducts)
            setProduct(allProducts.find(product => product.id == id));
        }
    }, [])

    return (
        <>
            <Header />
            <div className="flex flex-col mx-5">
                <div className="grid grid-cols-2 items-center h-screen">
                    <img src={product?.thumbnail} width={'450px'} height={'200px'} alt="" />
                    <div>
                        <h3 className='font-bold'>PID : {product?.id}</h3>
                        <h1 className='text-5xl font-bold'>{product?.title}</h1>
                        <h4 className="font-bold text-red-600 text-2xl my-2">{product?.price}</h4>
                        <h4>Brand : {product?.brand}</h4>
                        <h4>Category : {product?.category}</h4>
                        <p>
                            <span className="font-bold">Description</span> : {product?.description}
                            <div className="flex justify-between mt-5">
                                <button className="bg-blue-600 text-white p-2">Add to Wishlist</button>
                                <button className="bg-green-600 text-white p-2">Add to Cart</button>
                            </div>
                        </p>
                        <h3 className='font-bold mt-5 text-xl mb-2'>Client Reviews</h3>
                        {
                            product?.reviews?.map(item => (
                                <div key={item?.date} className="shadow border rounded p-2 mb-2">
                                    <h5>
                                        <span className='font-bold'>{item?.reviewerName}</span> : <span>{ item?.comment }</span>
                                    </h5>
                                    <p>Rating: { item?.rating } <i className="fa-solid fa-star text-yellow-400"></i></p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default View