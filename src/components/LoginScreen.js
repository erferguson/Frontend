import React from "react";
import styled from "styled-components";

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

export default function LoginScreen () {
    return (
        <div>
            <Header>Log in</Header>
            <Title>Welcome back</Title>
        </div>
    )
};