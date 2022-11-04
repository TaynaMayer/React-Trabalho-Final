import { BodyContainer } from "../../components/BodyContainer/BodyContainer";
import { Cards } from "../../components/Cards/Cards";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header"
import './Home.css';

export const Home = () => {
    return (
        <>
            <Header />

            <BodyContainer>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </BodyContainer>
            <Footer />
        </>
    );
}