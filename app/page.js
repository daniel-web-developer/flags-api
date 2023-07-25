'use client'
import Image from 'next/image'
import Link from 'next/link'
import Layout from './components/layout.js'
import { useState, useEffect } from 'react'

const urlAll = 'https://restcountries.com/v3.1/all'

function getAll(){
  const [isLoading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  const fetchAll = async () => {
    try{
      const res = await fetch(urlAll);
      const data = await res.json();
      setLoading(false);
      setCountries(data);
    }
    catch (error){
      console.log(error);
    }
  };

  useEffect(() => {
    let mounted = true;
    fetchAll().then((items) => {
      if (mounted){
        fetchAll(items);
      }
    });
    return () => (mounted = false);
  }, []);

  const allCountries = countries.map(({ name, flags, population, region, capital }) => (
    <Link href={'/details/' + name.common.toLowerCase()} key={name.official} className='country-block'>
      <Image src={flags.png} alt={name.common + " flag"} height={150} width={250} className='country-image' />
      <div className='country-text'>
        <p className='country-text-title'>{name.common}</p>
        <div className='country-text-description'>
          <p><span>Population: </span>{population.toLocaleString()}</p>
          <p><span>Region: </span>{region}</p>
          <p><span>Capital: </span>{capital}</p>
        </div>
      </div>
    </Link>
  ))

  if (isLoading) return(
    <div className='flex flex-justcont-c loading'>
      <h1>Loading...</h1>
    </div>
  )

  return(
    // <div className='flex flex-justcont-sb country'>{country}</div>
    <div className='flex flex-justcont-sb country'>
      {allCountries}
    </div>
  )
}

export default function Home() {
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
