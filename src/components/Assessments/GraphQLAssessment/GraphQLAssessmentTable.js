import React from 'react';
import {gql, useQuery} from "@apollo/client";

const GET_CAKE = gql`
   query GetCakes {
   cake {
     description
     id
     picture
     title
   }
}
`;

export default function Cakes() {
    const {loading: queryLoading, error: errorLoading, data: queryData} = useQuery(GET_CAKE);

    if (queryLoading) return <p>Loading...</p>;

    if (errorLoading) {
        return <p>Could not get counter: {errorLoading.message}</p>
    }

    return (
     <div>
        {queryData?.cake?.map((cake) => (
        <div key={cake.id}>
        <h2>{cake.title}</h2>
        <img src={cake.picture} alt="cake" />
        <p> {cake.description}</p>
        </div>
        ))}
        </div>

    )}
