import styled from "styled-components";

export const PicContainer = styled.div`
    width:${({width})=> width};
    height:${ ({height}) => height};
    display:flex;
    justify-content:flex-end;
    align-items: flex-end;
    background-image:url(${ ({url}) => url });
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow:hidden;
    padding:0;
`
export const PicLabel = styled.div`
    width:100%;
    background: linear-gradient(180deg, rgba(17, 17, 17, 0.12) 0%, #111111 100%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 32px 24px ;
    color:${props=>props.theme.colors.page.neutral};
    h3{
        margin-bottom:4px;
    }
`
export const PicFlag = styled.div`
    display:flex;
    svg{
        margin-right:10px;
    }
`