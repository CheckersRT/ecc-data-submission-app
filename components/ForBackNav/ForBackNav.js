import ForwardButton from "../ForwardButton/ForwardButton"
import BackButton from "../BackButton/BackButton"
import styled from "styled-components"

export default function ForBackNav({text, onClick, forButton}) {
    return (
        <Container>
            <BackButton />
            {!forButton ? null : <ForwardButton text={text} onClick={onClick}/>}
        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: space-between;
`