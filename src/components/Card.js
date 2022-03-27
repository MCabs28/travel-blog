import React from 'react'
import './Card.css'



const Card = ({coverImg, cont, loc, gmap, spot, date, desc}) => {
  return (
    <>
        <div className='card'>
                
                <div className='img-loc'>
                    <img 
                    src={require(`../images/${coverImg}`)} 
                    alt='img' className='img-style'/>
                </div>

                <div className='desc-loc'>
                      
                        <p className='country'><i className='fa fa-map-marker-alt fa-styling'></i>{loc}<a href={gmap} className='gmap-loc'>View in Google Map</a></p> 
                        <h1 className='name-loc'>{spot}</h1>

                        <p className='date-loc'>{date}</p>
                        <p className='about-loc'> {desc}</p>
                </div>

        </div>
    </>
  )
}

export default Card