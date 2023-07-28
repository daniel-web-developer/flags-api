'use client'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout.js';
import { useState, useEffect } from 'react'

function getCountry(country){
  const [isLoading, setLoading] = useState(true);
  const [oneCountry, setOneCountry] = useState([]);
  const [borderCountry, setBorderCountry] = useState([]);

  const urlCountry = 'https://restcountries.com/v3.1/name/' + country

  useEffect(() => {
    const fetchCountry = async () => {
      try{
        const res = await fetch(urlCountry);
        const data = await res.json();
        setLoading(false);
        setOneCountry(data);
        data[0]?.borders?.forEach((border) => {
          return fetchByCode(border);
        })
      }
      catch (error){
        console.log(error);
      }
    };
    fetchCountry(country)

    const fetchByCode = async (code) => {
      try{
        const urlCode = 'https://restcountries.com/v3.1/alpha/' + code
        const res = await fetch(urlCode);
        const data = await res.json();
        setBorderCountry((cur) => [...cur, data[0].name.common])
      }
      catch (error){
        console.log(error);
      }
    };
  }, [country])

  const countryData = oneCountry.map(({ name, flags, population, region, subregion, capital, tld, currencies, borders }) => (
    <div key={name} className='flex flex-justcont-sb flex-alignit-c detail-mobile'>
      <div className='detail-image-mobile'>
        <Image src={flags.png} alt={name.common + " flag"} height={380} width={530} className='detail-image'/>
      </div>
      <div className='detail-text'>
        <p className='detail-text-title'>{name.common}</p>
        <div className='flex flex-justcont-sb breakpoint'>
          <div className='detail-text-first'>
            <p className='detail-text-category'><span>Native Name: </span>{Object.values(name.nativeName)[0].common}</p>
            <p className='detail-text-category'><span>Population: </span>{population.toLocaleString()}</p>
            <p className='detail-text-category'><span>Region: </span>{region}</p>
            <p className='detail-text-category'><span>Sub Region: </span>{subregion}</p>
            <p className='detail-text-category'><span>Capital: </span>{capital}</p>
          </div>
          <div>
            <p className='detail-text-category'><span>Top Level Domain: </span>{tld}</p>
            <p className='detail-text-category'><span>Currencies: </span>{
              oneCountry.map(({ currencies }) => {
                let count = 0
                let currencyString = '';
                
                Object.values(currencies).map(({name}) => {
                count++;
  
                if (count < Object.keys(currencies).length){
                  currencyString += name + ', ';
                }
                else{
                  currencyString += name;
                }
              })

              return currencyString})
            }
            
            </p>
            <p className='detail-text-category'><span>Languages: </span>{oneCountry.map(({ languages }) => {
              let count = 0;
              let allTheLanguages = '';

              Object.values(languages).map((name) => {
                count++;
                if (count < Object.keys(languages).length){
                  allTheLanguages += name + ', ';
                }
                else{
                  allTheLanguages += name;
                }
              })
              return allTheLanguages;
            })}</p>
          </div>
        </div>
        <div className='flex detail-border'>
          <p className='detail-border-text-main'>Border Countries: </p>
          <div className='flex detail-border-countries'>{
          borders == undefined ? (
            <p className='detail-border-text detail-border-text-none'>No borders</p>
          )
          :
          borderCountry.map((country) => {
            return <Link href={'/details/' + country} key={country} className=''>{country}</Link>
          })}
          </div>
        </div>
      </div>
    </div>
  ))

  if (isLoading) return(
    <div className='flex flex-justcont-c loading'>
      <h1>Loading...</h1>
    </div>
  )

  return(
    <>
      {countryData}
    </>
  )
}

export default function Detail({
  params
}) {

  // getCountry(params.name)

  return (
  <Layout>
    <div className='detail padding'>
      <div className='detail-padding'>
        <Link href="/" className='flex flex-justcont-c detail-back'>
          <span className="material-symbols-outlined">keyboard_backspace</span>
          Back
        </Link>
        {getCountry(params.name)}
      </div>
    </div>
  </Layout>
  )
}
