import Image from 'next/image'
import Layout from './components/layout.js'

const urlAll = 'https://restcountries.com/v3.1/all'

export async function getAll(){
  const res = await fetch(urlAll);
  const data = await res.json();
  const oneCountry = data[0];

  const countries = data.map(({ name, postalcode, flags, population, region, capital }) => (
    <a key={postalcode} className='country-block'>
        <Image src={flags.png} alt={name.common + " flag"} height={150} width={250} className='country-image' />
        <div className='country-text'>
          <p className='country-text-title'>{name.common}</p>
          <div className='country-text-description'>
            <p><span>Population: </span>{population.toLocaleString()}</p>
            <p><span>Region: </span>{region}</p>
            <p><span>Capital: </span>{capital}</p>
          </div>
        </div>
      </a>
  ))

  console.log(data[0]);
  console.log(Object.keys(data[0]));

  return(
    // <div className='flex flex-justcont-sb country'>{country}</div>
    <div className='flex flex-justcont-sb country'>
      {countries}
    </div>
  )
}

export default function Home() {
  getAll()  
  return (
    <Layout>
      <div className='home padding'>
        <div className='flex flex-justcont-sb home-options mobile'>
          <div className='flex flex-alignit-c mobile-search'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className='home-search-svg'>{/* Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            <input type='text' placeholder='Search for a country...' className='home-search'>
            </input>
          </div>
          <select>
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
        <div className='flex'>
          {getAll()}
        </div>
      </div>
    </Layout>
  )
}
