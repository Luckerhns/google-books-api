import React, { ComponentElement, FunctionComponent } from 'react';
import { IBody } from '../../types/interfaces';
import styles from '../../styles/Body.module.css'

const Body: FunctionComponent<IBody> = ({children}) => {
    return (
        <div className={styles.body__container}>
            {children}
        </div>
    );
};

export default Body;