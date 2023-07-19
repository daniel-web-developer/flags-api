import { NextResponse } from 'next/server'

// export async function GET(request){
//     const { searchParams } = new URL(request.url)
//     const name = searchParams.get('name')
//     const res = await fetch(`https://restcountries.com/v3.1/name/$(name)`, {
//         headers: {
//             'Content-Type': 'application/json',
//             'API-Key': process.env.DATA_API_KEY,
//         },
//     })
//     const country = await res.json()

//     return NextResponse.json({ product })
// }

export async function GET(request){
    const res = await fetch(`https://restcountries.com/v3.1/all`, {
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY,
        },
    })
    const data = await res.json()

    return NextResponse.json({ data })
}
