import React from 'react'
import { Drawer,Button } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openDrawer } from '../../store/slices/drawerSlice'
const Siddedrawer = ({children}) => {
    const dispatch=useDispatch()
    const drawer=useSelector((state)=>state.drawer)
    const cart=useSelector((state)=>state.cart)
  return (
    <Drawer className='text-center' title={`cart / ${cart.length} products`} onClose={()=>dispatch(openDrawer(false))} open={drawer}>
        {/* {JSON.stringify(cart)} */}
    <Link onClick={()=>dispatch(openDrawer(false))} style={{width:"100%"}} to='/cart' className='text-center btn btn-primary  '>Go to cart</Link>    
    {cart.map((p)=>(
        <div key={p._id} className='row'>
            <div className='col'>
                {p.images[0][0]?(<><img src={p.images[0][0].url} style={{width:"200x",height:"100px",objectFit:"cover"}} /><p className='text-center bg-scondary'>{p.title}X{p.count}</p></>) :(<p>!!</p>)}
            </div>
        </div>
    ))}

    
    </Drawer>
  )
}

export default Siddedrawer