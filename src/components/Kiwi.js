import React from "react";
import styled from "styled-components";

const KiwiStyle = styled.div`
    border-style: solid;
    border-width: 2px;
    float: left;
    p {
        font-size: 30px;
    }
    img {
        max-width: 320px;
        max-height: 240px;
    }
`;

export default class Kiwi extends React.Component {
    render() {
        return (
            <KiwiStyle><p>{this.props.title}</p>
                <p><a href={this.props.url}>{this.props.url}</a></p>
                <img src={this.props.img}/>
            </KiwiStyle>
        );
    }
};

