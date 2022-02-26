import styled from "styled-components";

export const Container =styled.div`
    width:calc(100% - 15%);
    margin:0px auto;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const Col =styled.div`
    width:calc((100%/2) - 32px);
`
export const Col2 =styled.div`
    width:calc((100%/1.7) - 32px);
`
export const Col3 =styled.div`
    width:calc((100%/3) - 32px);
    display:flex;
    align-items:start;
`
export const Row = styled.div`
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom:40px;
    align-items: center;
    &:last-of-type{
        margin-bottom:0px;
    }
`
