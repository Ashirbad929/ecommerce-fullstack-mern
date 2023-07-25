import React from "react";
import ModalImage from "react-modal-image";

import { Addtocart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { message } from "antd";
import {CheckCircleOutlined,CloseCircleOutlined,CloseOutlined} from '@ant-design/icons'
const ProductCardIncheckout = ({ p }) => {
    const dispatch=useDispatch()
    const colors=["Black","Brown","Silver","White","Blue"]
    const handleColorChange=(e)=>{
        console.log('color changed',e.target.value)
        let cart=[]
        if(typeof window!=='undefined'){
            if(localStorage.getItem('cart')){
                cart=JSON.parse(localStorage.getItem('cart'))
            }
            cart.map((product,i)=>{
               if(product._id===p._id){
                cart[i].color=e.target.value
               }
        })
        console.log('cart updated')
        localStorage.setItem('cart',JSON.stringify(cart))
        }
        dispatch(Addtocart(cart))



    }
    const handleQuantityChange=(e)=>{
        console.log("Available quantity",p.quantity)
       
        let count=e.target.value < 0 ? 1:e.target.value; //prduct count cant be negative :)
        if(count>p.quantity){
            message.warning(`max Available:${p.quantity}`)
            return;

        }
        let cart=[]
        if(typeof window!='undefined'){

            if(localStorage.getItem('cart')){
                cart=JSON.parse(localStorage.getItem('cart'))

            }
            cart.map((product,i)=>{
                if(product._id==p._id){
                    cart[i].count=count
                }
               

            })
            localStorage.setItem('cart',JSON.stringify(cart))
            dispatch(Addtocart(cart))

        }
    }
    const handleRemove=()=>{
        console.log(p._id,'to remove')
        let cart=[]
        if(typeof window!='undefined'){

            if(localStorage.getItem('cart')){
                cart=JSON.parse(localStorage.getItem('cart'))

            }
            //[1,2,3,4,5]
            cart.map((product,i)=>{
                if(product._id==p._id){
                    cart.splice(i,1) //revove the product 
                }
               

            })
            localStorage.setItem('cart',JSON.stringify(cart))
            dispatch(Addtocart(cart))

        }

    }
  return (
    <tbody>
      <tr>
        <td>
          <div style={{width:"150px"}}>
            {p.images.length?(<ModalImage large={p.images[0][0].url} small={p.images[0][0].url}/>):(<p>image</p>)}
          </div>
        </td>
        <td>{p.title}</td>
        <td>₹{p.price}</td>
        <td>{p.brand}</td>
        <td>
            <select onChange={handleColorChange} name="color" className="form-control " >
                {p.color?<option>{p.color}</option>:<option>select</option>}
                {colors.filter((c)=>c!==p.color).map((c)=><option value={c} key={c}>{c}</option>)}

            </select>
        </td>
        <td>
            <input type="number" className="form-control" value={p.count} onChange={handleQuantityChange}/>
            
        </td>
        <td className="text-center">{p.shipping==="Yes"?<CheckCircleOutlined/>:<CloseCircleOutlined/>}</td>
        <td className="text-center"><CloseOutlined onClick={handleRemove} className="text-danger"/></td>
      </tr>
    </tbody>
  );
};

export default ProductCardIncheckout;
