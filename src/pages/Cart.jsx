import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
      <>
          <Header />
          <div className="px-5" style={{ paddingTop: '100px' , minHeight: '70vh'}}>
              <>
                  <h1 className='text-5xl font-bold text-blue-600'>Cart Summary</h1>
                  <div className='grid grid-cols-3 gap-4 mt-5'>
                      <div className="col-span-2 shadow border rounded p-5">
                          <table className="table-auto w-full">
                              <thead>
                                  <tr>
                                      <td className="font-semi-bold">#</td>
                                      <td className="font-semi-bold">Name</td>
                                      <td className="font-semi-bold">Image</td>
                                      <td className="font-semi-bold">Quantity</td>
                                      <td className="font-semi-bold">Price</td>
                                      <td className="font-semi-bold">...</td>
                                  </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                      <td>1</td>
                                      <td>Product name</td>
                                      <td><img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" alt="" height={'70px'} width={'70px'} /></td>
                                      <td>
                                          <div className="flex">
                                              <button className="font-bold">-</button>
                                              <input type="text" style={{ width: '40px' }} className='border rounded p-1 mx-2' value={2} readOnly />
                                              <button className="font-bold">+</button>
                                          </div>
                                      </td>
                                      <td>$ 100</td>
                                      <td><button className='text-red-600'><i className="fa-solid fa-trash"></i></button></td>
                                 </tr>
                              </tbody>
                          </table>
                          <div className="float-right">
                              <button className="bg-red-600 rounded p-2 text-white">Empty Cart</button>
                              <Link to={'/'} className='bg-blue-600 ms-3 p-2 rounded text-white'>Shop More</Link>
                          </div>
                      </div>
                      <div className="col-span-1">
                          <div className="border rounded shadow p-5">
                              <h2 className="text-2xl font-bold my-4">Total Amount : <span className='text-red-600'>$ 9.99</span></h2>
                              <hr />
                              <button className="bg-green-600 rounded p-2 text-white w-full mt-4">Check OUT</button>
                          </div>
                      </div>
                  </div>
              </>
          </div>
      </>
  )
}

export default Cart