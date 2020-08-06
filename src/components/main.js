import React, {useState} from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import Confirmation from './confirmation/confirm'
import Registration from './registration/registration'
import {Container} from '@material-ui/core'

export default function Main(){

    const [isConfirmed, onClick] = useState(false)


    if(isConfirmed)
        return(
            <div style={{ backgroundColor: 'white' }}>
                <Container >
                    <Navbar />
                    <Confirmation />
                    {/* <Footer /> */}
                </Container>
                <Footer />

            </div>
        )
    else {
        return(
            <div style={{ backgroundColor: 'white' }}>
                <Container>
                    <Navbar />
                    <Registration onPress={onClick} />
                </Container>
                <Footer />

            </div>
        )
    }
}
