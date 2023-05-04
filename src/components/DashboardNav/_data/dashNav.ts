import squares from "../../../assets/svg/squares.svg";
import profile from "../../../assets/svg/profile.svg";

import {ROUTER} from "../../../common/config/router";

export const DASH_NAV = [
    {
        icon: squares,
        text: 'Dashboard',
        anchor: ROUTER.HOME,
    },
    {
        icon: profile,
        text: 'My account',
        anchor: ROUTER.USER_PROFILE,
    }
]