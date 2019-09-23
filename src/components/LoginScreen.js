import React from "react";
import styled from "styled-components";
import { GoogleButton, FaceBookButton } from "../components/button";


//styled components
const Header = styled.h3`
padding-top: 5%;
padding-bottom: 3%;
text-align: center;
background-color: black;
color: white;
`;

const Title = styled.h2`
text-align: center;
`;

const EmailText = styled.input`
width: 100%;
text-align: center;
`;

export default function LoginScreen () {
    return (
        <div>
            <Header>Log in</Header>
            <Title>Welcome back</Title>
                <GoogleButton />
                <FaceBookButton />
                <br></br>
                <hr></hr>
                <br></br>
            
            <EmailText type="text" placeholder="Email" />
        </div>
    )
};