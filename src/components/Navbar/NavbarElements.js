import styled from "styled-components"

export const NavbarCointainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0;
    width: 100%;
    padding:30px 0px;
    background:${props=> props.theme.colors.page.neutral};
    z-index:10000;
`
export const NavLogo = styled.img`
    position: static;
    width: 104.89px;
    height: 71px;

`
export const NavMenu = styled.ul`
    display:flex;
`
export const NavItem = styled.li`
    margin-right:48px;
    &:last-of-type{
        margin-right:0px;
    }
`
export const Navlink = styled.a`
    color:${ props => props.theme.colors.page.accent_2}
    
`