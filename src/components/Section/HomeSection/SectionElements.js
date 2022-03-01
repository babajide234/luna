import styled from "styled-components";

export const SectionContainer =styled.div`
    min-height:100vh;
    margin-bottom:60px;
    padding-bottom:100px;
    position:relative;
`

export const SectionIcon =styled.img`
    position:absolute;
    ${({bottom})=> bottom ? 'bottom:'+bottom+';':''};
    ${({top})=> top ? 'top:0;':''};
    left:${({left})=>left};
    width:${({width})=>width};
    height:${({height})=>height};
    z-index:-1;
`

export const ContainerLeft = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    .div{
        width:300px;
    }
`
export const ContainerRight = styled.div`

`
export const Cube = styled.div`
    width:calc((100%/5) - 20px);
    border:1px solid #eee;
    padding:20px;
    display:flex;
    justify-content:center;
    align-items:center;
`
