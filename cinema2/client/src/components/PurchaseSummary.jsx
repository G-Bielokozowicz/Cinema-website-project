import { Link } from 'react-router-dom'
import styled from 'styled-components'

function PurchaseSummary() {

    const helo = 'HelloWordl'

    return (
        <Wrapper>
            <TextStyle>
                Purchase summary
            </TextStyle>
            <ButtonRow>
                <Button to = {'print'}>
                    Print ticket
                </Button>
            </ButtonRow>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
`

const TextStyle=styled.section`
    /* display: grid; */
    margin-top: 20%;
    outline: #24a763; 
`

const ButtonRow=styled.section`
    /* display: grid; */
    margin-top: 20%;
    //outline: #24a763
`

const Button = styled(Link)`
    background-color: #d34d18;
    color: #000;
    height: 50px;
    width: 150px; //szerokosc przycisku
    font-size: 20px;
    border-radius: 20px; //okragle rogi
    border: none;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    display: flex;
    &:focus {
    color: #ffffff;
    }
`
export default PurchaseSummary