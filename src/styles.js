import { Component } from "react";
import styled from 'styled-components'

export const Title = styled.h1 `
    color: #0f0;
    font-size = ${props => '${props.fontSize} px;'}

    background: gray;
    span{
        font-size:12px;
    }

`;

export const TitleSmall = styled(Title)`

    color: #00f;
    font-size: 14px;

`;
