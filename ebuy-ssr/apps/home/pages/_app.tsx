import { AppProps } from "next/app";
import Head from "next/head";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Header from "../components/Header";
function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Welcome to ebuy!</title>
            </Head>
            <main>
                <Header />
                <Container style={{ marginTop: "5rem" }}>
                    <Component {...pageProps} />
                </Container>
            </main>
        </>
    );
}
export default CustomApp;
