import React from 'react'
import {Input} from 'antd'
const LocalSearch = ({keyword,setKeyword}) => {
    const handleSearchChange=(e)=>{
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase())
      }

  return (
    <Input
    style={{marginTop:"3.5em"}}
     type="search"
     placeholder="search catagory.."
     value={keyword}
     onChange={handleSearchChange}
    
     
     >

    </Input>
  )
}

export default LocalSearch