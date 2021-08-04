import { createTheme } from "@material-ui/core/styles";


export const buttonTheme =  createTheme({
    overrides:{
        MuiButton:{
            text:{
                background: 'linear-gradient(45deg, red, blue)',
                borderRadius:3,
                border:0,
                color:'white',
                height:45,
                padding: '10px 50px',
                boxShadow: '0 3px, 5px, 2px, rgba(255, 105, 135, .3)'
            },
        },
    },
})