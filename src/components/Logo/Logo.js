import React, { useState, useCallback, useEffect } from 'react';

import styles from './Logo.module.scss';

import Canvas from '../Canvas';
import primaryText from '../../consts/primary-logo';
import secondaryText from '../../consts/secondary-logo';

function Logo() {
    const [ isSecondary, setIsSecondary ] = useState(false);
    const toggle = useCallback(
        () => setIsSecondary(isSecondary => !isSecondary),
        []
    );

    useEffect(() => {
        const interval = setInterval(toggle, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Canvas
            label="Andres Kovalev - Front-End developer"
            className={ styles.logo }
            image={ isSecondary ? secondaryText : primaryText }
            minPixels={ 250 }
        />
    );
}

export default Logo;