import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { build } from "vite";

//TIPO
type checkout = {
    products: [
        {
            id: number,
            price: number
        }
    ],
    delivery: {
        receiver: string,
        address: {
            description: string,
            city: string,
            zipCode: string,
            number: number,
            complement: string
        }
    },
    payment: {
        card: {
            name: string,
            number: string,
            code: string,
            expires: {
                month: number,
                year: number
            }
        }
    }
}

//INTERFACE
interface Post {
    id: number
    name: string
}

//CREATEAPI
const api = createApi({
    reducerPath: 'reqApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/efood/' }),
    endpoints: (builder) => ({
        //GET RESTAURANTES - NÃO USADA / CHAMADAS DE GET NO PROJETO, EU UTILIZEI O FETCH
        getRestauranteByName: builder.query<Object, void>({
            query: () => `restaurantes`,
        }),
        //GET CHECKOUT
        getCheckoutByName: builder.query<any, void>({
            query: () => `checkout`,
        }),
        //POST
        purchase: builder.mutation<any, checkout>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body: body
            })
        })
    }),
})

export const { useGetRestauranteByNameQuery, useGetCheckoutByNameQuery, usePurchaseMutation } = api

export default api;