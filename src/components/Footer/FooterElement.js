import styled from "styled-components";

export const FooterContainer = styled.div`
    background:${props => props.theme.colors.page.ink};
    width:100%;

`
export const FooterMenu= styled.div`
    display:flex;
    justify-content:space-between;
    width:60%;
`
export const FooterInnerContainer= styled.div`
    display:flex;
    flex-flow:column wrap;
    width:100%;
    height:500px;
    padding-top:80px;
    justify-content:space-between;
`

export const Copyrite= styled.div`
    display:flex;
    justify-content:space-between;
    color:${props=> props.theme.colors.page.accent};
    padding:0px 0px 80px 0px ;
    
`
export const FooterMenuItem= styled.div`
    color:${props=> props.theme.colors.page.accent};
    h4{
        margin-bottom:32px;
    }
    `
export const FooterMenuList= styled.ul`    
    color:${props=> props.theme.colors.page.accent_2};
`
export const FooterMenuListItem= styled.li`
    margin-bottom:12px;
    &:last-of-type{
        margin-bottom:0px;
    }
`
export const FooterMenuListLink= styled.a`

`
export const SocialMenu = styled.ul`
    display:flex;


`
export const SocialMenuItem = styled.li`
    margin-right:32px;
    &:last-of-type{
        margin-right:0px;
    }
`
export const SocialMenuLink = styled.a`

`