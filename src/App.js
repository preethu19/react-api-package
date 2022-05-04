import React, {useState, useEffect} from 'react';
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import {getNFT} from './packages/get-nft';
import {Card} from './Card'


function App() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [result, setResult] = useState()

    useEffect(()=>{
      const getResponse = async () =>{
        const data = await getNFT();
        setResult(data)
      }
      getResponse();
    }, [])

  return (
    <div className="App">
      <h1>NFTs</h1>
      {result? (
        <Carousel responsive={responsive}>
        {result.tiles && result.tiles.map((val)=>{
          return (
            <Card
            key={val.tile}
            title={val.title}
            price={val.attributes[0].str_value}
            image={val.image.url}
            link={val.actions.DETAIL_VIEW.url}
            />
          )
        })
      }
      
      </Carousel>
      ): null}
      
      
      
      
      
    </div>
  );
}

export default App;
