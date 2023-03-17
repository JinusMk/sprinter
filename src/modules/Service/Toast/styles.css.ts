import { style } from "@vanilla-extract/css";

export default {
    wrapper: style({
        position: 'fixed',
        zIndex: 10,
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media': {
            'screen and (max-width: 767px)': {
              bottom: '2rem',
              top: 'unset',
            },
          },
      }),
} 

