'use client'
import Image from 'next/image'
import Link from 'next/link'
import Layout from './components/layout.js'
import { useState, useEffect } from 'react'

const urlAll = 'https://restcountries.com/v3.1/all'

function getCountries(searchValue, regionValue){
  const [isLoading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const fetchAll = async () => {
    try{
      setLoading(true);
      const res = await fetch(urlAll);
      const data = await res.json();
      setCountries(data);
      setLoading(false);
    }
    catch (error){
      console.log(error);
    }
  };

  // const fetchByName = async (searchValue) => {
  //   try{
  //     setLoading(true);
  //     const urlName = 'https://restcountries.com/v3.1/name/' + searchValue
  //     const res = await fetch(urlName);
  //     const data = await res.json();
  //     setCountries(data);
  //     setLoading(false);
  //   }
  //   catch (error){
  //     console.log(error);
  //   }
  // };

  const fetchByRegion = async (regionFilter) => {
    try{
      setLoading(true);
      const urlRegion = 'https://restcountries.com/v3.1/region/' + regionFilter
      const res = await fetch(urlRegion);
      const data = await res.json();
      setCountries(data);
      setLoading(false);
    }
    catch (error){
      console.log(error);
    }
  };
  
  const searchCountries = (searchValue) => {
    if (searchValue != ''){
      setSearchResults(
        countries.filter((country) => {
          Object.values(country)
            .join("")
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        })
      );

      if (searchResults.length === 0){
        setSearchResults(countries);
      }
    }
  }

  useEffect(() => {
    let mounted = true;
    if (regionValue == ''){
      fetchAll().then((items) => {
        if (mounted){
          fetchAll(items);
        }
      });
      return () => (mounted = false);
    }
    if (regionValue != ''){
      fetchByRegion(regionValue);
    }

  }, [regionValue]);


  if (searchResults == undefined){
    return(
      <p>No countries found.</p>
    )
  }

  if (isLoading) return(
    <div className='flex flex-justcont-c loading'>
      <h1>Loading...</h1>
    </div>
  )

  if (countries.message == 'Not Found'){
    return(
      <p className='country-notfound'>No countries found.</p>
    )
  }
  else{
    const returnCountries = countries.map(({ name, flags, population, region, capital }) => (
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
    return(
      <div className='flex flex-justcont-sb country'>
        {returnCountries}
      </div>
    )
  }
}

export default function Home() {
  const [region, setRegion] = useState('');
  const [search, setSearch] = useState('');

  const changeSearch = (event) => {
    setSearch(event.target.value)
  }

  const changeRegion = (event) => {
    setRegion(event.target.value)
  }

  return (
    <Layout>
      <div className='home padding'>
        <div className='flex flex-justcont-sb home-options mobile'>
          <div className='flex flex-alignit-c mobile-search'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className='home-search-svg'>{/* Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            <input type='search' id='search' placeholder='Search for a country...' onChange={changeSearch} className='home-search'>
            </input>
          </div>
          <select onChange={changeRegion}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className='flex'>
          {getCountries(search, region)}
        </div>
      </div>
    </Layout>
  )
}
