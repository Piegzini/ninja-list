import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        return {
            props: { ninjas: data}
        }
    }catch (e) {

    }
}

const Index = ({ninjas}) => {
    return (
        <div>
            <h1> List of all ninjas</h1>

            {ninjas.map(({id, name}) => (
                <div key={id}>
                    <a className={styles.single}>
                        <h3> {name}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
};

Index.propTypes = {

};

export default Index;
