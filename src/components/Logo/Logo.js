import React, { useState, useCallback, useEffect } from 'react';
import cx from 'classnames';

import styles from './Logo.module.scss';

import useLogoStyles from '../../hooks/useLogoStyles';

function Logo() {
    const classes = useLogoStyles();
    const [ isSecondary, setIsSecondary ] = useState(false);
    const toggle = useCallback(
        () => setIsSecondary(isSecondary => !isSecondary),
        []
    );

    useEffect(() => {
        const interval = setInterval(toggle, 4000);

        return () => clearInterval(interval);
    }, []);

    const className = cx(styles.title, classes.logo, {
        [classes.secondary]: isSecondary
    });

    return (
        <React.Fragment>
            <h1 className={className}>
                Andres Kovalev
            </h1>
            <h2 className={styles.subtitle}>Front-End developer</h2>
        </React.Fragment>
    );
}

export default Logo;