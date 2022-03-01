import styled from "styled-components";
const  btnborder = props => {
    return props.theme.colors.button.links
};

export const ButtonElement = styled.div`
    color:${props=>props.theme.colors.button.links};
    border: 2px solid ${props => props.theme.colors.button.links};
    padding:15px;
    position:relative;
    display:flex;
    align-items:center;
    background:${props=>props.theme.colors.page.neutral};
    outline:none;
    &:hover{
        cursor:pointer;
        color:${props=>props.theme.colors.page.neutral};
        background:${props=>props.theme.colors.button.links};
    }
`
export const ButtonElement2 = styled.div`
    color:${props=>props.theme.colors.button.links};
    border: none;
    padding:10px;
    position:relative;
    display:flex;
    align-items:center;
    &:hover{
        cursor:pointer;
    }
`
export const Arrow = styled.img`
    width:80px;
    height:10px;
    margin-left:50px;
`