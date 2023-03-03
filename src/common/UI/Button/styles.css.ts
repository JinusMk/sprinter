import { style } from "@vanilla-extract/css";
import theme, { vars } from "common/themes/light.css";

export default {
    container: style({
        display: 'flex',
        padding: vars.space.p8,
        backgroundColor: theme.color.colorPrimaryGreen,
        color: theme.color.colorWhite,
        fontSize: vars.fontSize.base,
        fontWeight: vars.fontWeight.medium,
        border: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vars.radius.base,
        cursor: 'pointer',
        ':hover': {
            backgroundColor: theme.color.colorPrimaryGreenDark
        }
    })
}