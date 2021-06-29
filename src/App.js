import React, {useState, useEffect} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
    const [loading, setLoading] = useState(true);
    const [persons, setPersons] = useState([]);
    const [value, setValue] = useState(0);


    useEffect(() => {
        setPersons(data);
        setLoading(false);  
    }, [])

     const handleClickRight = () => {
        setValue((prevState) => {
            if(value < persons.length-1) {
               return prevState + 1;
            }else {
                return prevState = 0;
            }
        })
    }

    const handleClickLeft = () => {
        setValue((prevState) => {
            if(value > 0) {
               return prevState - 1;
            }else {
                return prevState = persons.length-1;
            }
        })
    }
    
    if(loading) {
       return (
           <div>
               <h2>Loading...</h2>
           </div>
       )
    }
    const {id, image, name, quote, title} = persons[value]
    return (
        <section>
         <h1>Reviews</h1>
         <FiChevronLeft style={{color: 'green'}} onClick={handleClickLeft}/>
        <div key={id}>
          <img src={image} alt={title} style={{borderRadius: '50%', width: '140px', height: '125px'}}/>
          <h3>{name}</h3>
          <h4>{title}</h4>
          <p>{quote}</p>
        </div>
        <FiChevronRight style={{color: 'green'}} onClick={handleClickRight}/>
      </section>  
    )
}

export default App