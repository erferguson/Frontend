import React from "react";
import styled from "styled-components";

const GoogleBtn = styled.button`
font-size: 1.6rem;
border: black 1px;
text-align: center;
margin-left: 20%; 
margin-top: 10%;
margin-bottom: 5%;
`;

//Google Button
export function GoogleButton () {
    return (
        <div>
            <GoogleBtn>Sign In With Google</GoogleBtn>
        </div>
    )
}

const FaceBookBtn = styled.button`
font-size: 1.6rem;
border: blue 1px;
text-align: center;
margin-left: 20%; 
margin-top: 10%;
margin-bottom: 5%;
`;

//FaceBook Button
export function FaceBookButton () {
    return (
        <div>
            <FaceBookBtn>Sign In With FaceBook</FaceBookBtn>
        </div>
    )
}