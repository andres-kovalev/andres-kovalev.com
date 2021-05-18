import Head from 'next/head';

import App from '../components/App';

export default function Home() {
    return (
        <>
            <Head>
                <title>Andres Kovalev | Front-End developer home page</title>
                <meta name="description" content="Andres Kovalev | Front-End developer home page" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href="logo192.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/logo180.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <link
                    href="https://fonts.googleapis.com/css?family=Lato:100,300&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <App />
        </>
    );
}
