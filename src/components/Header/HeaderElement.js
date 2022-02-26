import styled from "styled-components";

export const HeaderContainer = styled.div`
    margin:90px 0px;
    min-height:100vh;
    position:relative;
    &::before{
        content:'';
        background:url(${({url})=>url});
        background-position: center;
        background-size: cover;
        height: 400px;
        width: 400px;
        position:absolute;
        top: 140px;
        left:36%;
        z-index:-1;
    }

`
export const HeaderLeft = styled.div`
    margin-top:72px;
    z-index:100;
`
export const HeaderRight = styled.div`
    margin-top:72px;
    display:flex;
    justify-content: flex-end;
    z-index:1000;
`
export const HeaderBackgroundImage = styled.img`
    
`

