import { Container, Title } from "./components/StyleComponents";

const App = () => {
    return (
        <Container
            justify="space-around"
            align="flex-start"
            bgColor="#e3f2fd"
        >

            <Title>Texto Normal (24px)</Title>

            <Title
            size="32px"
            color="#6200ee"
            bold
            >
                Título Grande com cor desconhecida
            </Title>

            <Title
                size="18px"
                color="#00796b"            
            >
                Subtítulo Pequeno
            </Title>
        </Container>
    );
};

export default App;