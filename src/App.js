import './App.css';
import Card from './components/Card';

import countryData from './data'

function App() {

  const cards = countryData.map(item =>{
 
    return(
      <Card
        key={item.id}
        {...item}
      />
    )

  })


  return (
    <div className='app'>

    <div className='title-header'><i className='fa fa-earth fa-earth-style'></i> Travel-Blog</div>
      {cards}
    </div>
  );
}

export default App;
