import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout.js';

export async function getCountry(country){

  const urlCountry = 'https://restcountries.com/v3.1/name/' + country + '?fullText=true'

  const res = await fetch(urlCountry);
  const data = await res.json();

  console.log(urlCountry);
  console.log(data);

  const countryData = data.map(({ name, postalcode, flags, population, region, capital }) => (
    <div>
      <Image src={flags.png} alt={name.common + " flag"} height={380} width={530} className='detail-image'/>
    </div>
  ))

  return(
    <div className='flex flex-justcont-sb country'>
      {countryData}
    </div>
  )
}

export default function Detail({
  params
}) {
  
  function test(){
    console.log("VIVA CRISTO REY")
    console.log(params)
  }

  // getCountry(params.name)

  return (
  <Layout>
    <div className='detail padding'>
      <div className='detail-padding'>
        <Link href="/" className='flex detail-back'>
          <Image />
          Back
        </Link>
        {getCountry(params.name)}
      </div>
    </div>
  </Layout>
  )
}
