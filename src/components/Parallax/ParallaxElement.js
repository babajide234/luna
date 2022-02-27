import styled from "styled-components";

export const Psection =styled.div`
    width:100%;
    position : relative;
    padding:100px 0px;
    background:url(${({url})=>url});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height:70vh;
    margin-bottom:0px;
`
export const Pcontent =styled.div`
    width:100%;
    padding:48px;
    position : relative;
    background:rgba(159, 95, 46, 0.72);
    color:${props => props.theme.colors.page.neutral};
    p{
        line-height:30px;
    }
`