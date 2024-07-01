import React, { useContext, useEffect, useRef, useState } from 'react'
import './Home.css'
import { Coincontext } from '../../context/Coincontext'
import { Link } from 'react-router-dom'
import Choose from '../choose/Choose'
import Video from '../../assets/video/btc.mp4'
import Join from '../join/Join'

const Home = () => {
  const {allCoin,currency} = useContext(Coincontext);
  const [displayCoin,setDisplayCoin] = useState([]);

  //copy allcoin data in display coin
  useEffect(()=>{
    setDisplayCoin(allCoin)
  },[allCoin])

  //Pagination
  const[currentPage,setCurrentPage] = useState(1);
  const itemPerPage = 10;
  const totalPages = 3;
  const startIndex = (currentPage-1)*itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const handleClick = (page)=>{
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for(let i = 1;i <= totalPages;i++){
      pageNumbers.push(
        <button key = {i} onClick={()=>handleClick(i)} className={i===currentPage?'active':''} >
          {i}
        </button>
      )
    }
    return pageNumbers;
  };

  //search input
  const [input,setInput] = useState('')
  const inputHandler = (e)=>{
    setInput(e.target.value);
    if(e.target.value === ""){
      setDisplayCoin(allCoin);
    }
  }

  const searchHandler = async(e)=>{
    e.preventDefault();
    const coins = await allCoin.filter((item)=>{
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins);
  }

  return (
    <div className="home" id='Home'>
      <div className="hero">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={Video} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>Largest <br/>Crypto Marketplace</h1>
          <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about crypto currencies.</p>
        </div>
        <form onSubmit={searchHandler}>
          <input onChange={inputHandler} list='coinList' value = {input} type="text" placeholder='Search Cryto...' required/>
          <datalist id='coinList'>
            {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
          </datalist>
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className="cryptotable" id='Market'>
        <div className="layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className='hour'>24H Change</p>
          <p className='marketcap'>Market Cap</p>
        </div>
        {
          displayCoin.slice(startIndex,endIndex).map((item,index)=>(
            <Link to={`/market/${item.id}`} className="layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name + "-" + item.symbol}</p>
              </div>
              <p>{currency.symbol}{item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h > 0 ? "green": "red"}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
              <p className='marketcap'>{currency.symbol}{item.market_cap.toLocaleString()}</p>
            </Link>
          ))
        }
      </div>

      <div className='list-pagination'>
        {renderPageNumbers()}
      </div>

      <div className="why-us">
        <Choose/>
      </div>
      <div className="footer">
        <Join/>
      </div>
    </div>
  )
}

export default Home