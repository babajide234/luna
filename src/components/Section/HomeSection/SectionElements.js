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