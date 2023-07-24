export async function getCountry(name){

    const country = name.split('/details/')
    const urlCountry = 'https://restcountries.com/v3.1/name/' + country[1]

    const res = await fetch(urlCountry);
    const data = await res.json();

    // console.log(name);
    // console.log(country);
    console.log(urlCountry);
    // console.log("12345");
    const countryData = data.map(({name}) => (
        <div>VIVA CRISTO REY{name}</div>
    ))

    return(
        { countryData }
    )
}

export default function RenderCountry(name){
    return(
        <>
            {getCountry(name)}
        </>
    )
}
