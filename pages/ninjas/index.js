import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import styles from '../../styles/Ninjas.module.css'
import Link from "next/link";

export const getStaticProps = async () => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        return {
            props: { ninjas: data}
        }
    }catch (e) {

    }
}

const Ninjas = ({ninjas}) => {
    return (
        <div>
            <h1> List of all ninjas</h1>

            {ninjas.map(({id, name}) => (
                <Link href={`/ninjas/${id}`} key={id}>
                    <a className={styles.single}>
                        <h3> {name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
};

Ninjas.propTypes = {
    ninjas: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Ninjas;
