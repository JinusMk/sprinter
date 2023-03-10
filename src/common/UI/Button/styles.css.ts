import { recipe } from "@vanilla-extract/recipes";
import theme, { vars } from "common/themes/light.css";

export const buttonStyles = recipe({
    base: {
        display: 'flex',
        padding: 7,
        fontSize: vars.fontSize.base,
        fontWeight: vars.fontWeight.medium,
        border: '1px solid',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vars.radius.base,
        cursor: 'pointer',
    },
    variants: {
        buttonType: {
            primary: {
                backgroundColor: theme.color.colorPrimaryGreen,
                color: theme.color.colorWhite,
                borderColor: theme.color.colorPrimaryGreen,
                ':hover': {
                    backgroundColor: theme.color.colorPrimaryGreenDark,
                    borderColor: theme.color.colorPrimaryGreenDark
                }
            },
            secondary: {
                backgroundColor: theme.color.colorWhite,
                color: theme.color.colorPrimaryGreen,
                borderColor: theme.color.colorPrimaryGreen,
                ':hover': {
                    backgroundColor: theme.color.colorPrimaryGreen,
                    color: theme.color.colorWhite,
                }
            }
        },
        disabled: {
            true: {
                opacity: '0.4',
                pointerEvents: 'none'
            }
        }
    }
})