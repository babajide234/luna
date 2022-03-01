import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body {
        font-family: 'Poppins', sans-serif;
        overflow-x:hidden;
    }

    ul{
        list-style:none;
    }

    body::-webkit-scrollbar {
        width: .5rem;
    }
       
    body::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
     
    body::-webkit-scrollbar-thumb {
      background-color: rgba( 0,0,0 , 0.2);
      outline: 1px solid ${props=>props.theme.colors.page.accent};
      border-radius:4px;
    }
    body::-webkit-scrollbar-thumb:hover {
      background-color: ${props=>props.theme.colors.page.accent_2};
      outline: 1px solid ${props=>props.theme.colors.page.accent};
      border-radius:4px;
    }
    
`
