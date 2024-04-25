import React,{useState} from 'react'
import Navbar from './Navbar';
import Cart from './Cart';
import Main from './Main';
import './styles/App.css'

const App = () => {
  const [show,setShow]=useState(true);
  const [cart,setCart]=useState([]);
  // warning message
  const [warning,setWarning]=useState(false);
  
  // const handleClick=(item)=>{
  //   console.log(item);
  // }
  const handleClick=(item)=>{
    let isPresent=false;
    cart.forEach((product)=>{
      if(item.id===product.id)
      isPresent=true;
    })
    if(isPresent){
      setWarning(true);
      setTimeout(()=>{
        setWarning(false);
      },2000);
      return;
    }
  setCart([...cart,item]);
  }

  const handleChange=(item,d)=>{
    let ind = -1;
    cart.forEach((data,index)=>{
      if(data.id === item.id)
      ind=index;
    });
    const tempArr=cart;
    tempArr[ind].amount +=d;
    if(tempArr[ind].amount===0)
      tempArr[ind].amount=1;
    setCart([...tempArr])
  }
  return (
    <React.Fragment>
      <Navbar setShow={setShow}/>
      {
        show ? <Main handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
      }
      {
        warning && <div className='warning'>Item is already added to your cart</div>
      }
    </React.Fragment>
  )
}

export default App
