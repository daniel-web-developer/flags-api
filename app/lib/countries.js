const urlAll = 'https://restcountries.com/v3.1/all'
// const urlDetails = 'https://restcountries.com/v3.1/name/{name}'

// export async function getAll(){
//     const res = await fetch(urlAll);
//     const data = await res.json();

//     return data;
// }

export async function getAllCountriesNames(){
    const res = await fetch(urlAll);
    const data = await res.json();
    const names = data.map(({name}) => (
        name.common
    ))

    return{
        params:{
            name: names
        }
    }
}

export async function getAllCountriesData(name){
    const urlDetails = 'https://restcountries.com/v3.1/name/' + name;
    const res = await fetch(urlDetails);
    const data = await res.json();

    return{
        name,
        data
    }
}
