import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {
    const dispatch = useDispatch()

    const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)
    console.log(allProducts, loading, errorMsg)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
            <Header insideHome={true} />
            <div className="container px-4 mx-auto" style={{ paddingTop: '100px' }}>
                {
                    loading ?
                        <div className="flex justify-center items-center my-5">
                            <img src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif" alt="" />
                        </div>
                        :
                        <>
                            <div className="grid grid-cols-4 gap-4">
                                {
                                    allProducts?.length > 0 ?
                                        allProducts?.map(product => (
                                            <div key={product?.id} className="rounded border p-2 shadow">
                                                <img src={product?.thumbnail} width={'100%'} height={'200px'} alt="" />
                                                <div className="text-center">
                                                    <h3 className='text-xl font-bold'>{product?.title}</h3>
                                                    <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More</Link>
                                                </div>
                                            </div>
                                        ))
                                        :
                                        <div className="flex justify-center items-center font-bold text-red-600 my-5 text-lg">
                                            Product Not Found
                                        </div>
                                }
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default Home