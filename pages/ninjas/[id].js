import React from 'react';
import axios from "axios";

export const getStaticPaths = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    const paths = data.map(({id}) => ({ params: { id: id.toString()}}) )
    console.log(paths)
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const {params: {id}} = context
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

    console.log(data)
    return {
        props: { user: data}
    }
}

const Detail = ({user}) => {
    return (
        <div>
            <h1>{user.name} </h1>
            <p> {user.email} </p>
            <p> {user.website} </p>
            <p> {user.address.city} </p>
        </div>
    );
};

export default Detail;
