import { useRouter } from "next/router";

export async function getCountry(){
    const router = useRouter();
    const { name } = router.query;
    const urlCountry = 'https://restcountries.com/v3.1/name/{name}'

    const res = await fetch(urlCountry);
    const data = await res.json();

    return(
        <div>{data.name}</div>
    )
}

export default function Detail() {
    return (
      <Layout>
        <div>
            {getCountry}
        </div>
      </Layout>
    )
}



// import { useRouter } from 'next/router'
// import { getAllCountriesNames, getAllCountriesData } from '../lib/countries.js'
// import Layout from '../components/layout.js'

// export default function Detail() {
//     const router = useRouter()

//     return (
//       <Layout>
//         {countryData.name}
//       </Layout>
//     )
// }

// export async function getStaticPaths(){
//     const paths = getAllCountriesNames();

//     return{
//         paths,
//         fallback: false,
//     };
// }

// export async function getStaticProps({ params }){
//     const countryData = getAllCountriesData(params.name);

//     return{
//         props: {
//             countryData,
//         }
//     }
// }
