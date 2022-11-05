import { Col, Row } from "react-bootstrap";
import { BodyContainer } from "../../components/BodyContainer/BodyContainer";
import { Cards } from "../../components/Cards/Cards";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header"
import './Home.css';

export const Home = () => {
    return (
        <>
            <BodyContainer>
                <Row>
                    <Cards />
                </Row>
                
            </BodyContainer>
        </>
    );
}