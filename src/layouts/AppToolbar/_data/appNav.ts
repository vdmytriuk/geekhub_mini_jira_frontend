import backlog from "../../../assets/svg/backlog.svg";
import favorite from "../../../assets/svg/favorite.svg";
import squares from "../../../assets/svg/squares.svg";
import timer from "../../../assets/svg/timer.svg";

import {ROUTER} from "../../../common/config/router";

export const APP_NAV = [
    {
        icon: squares,
        text: 'Dashboard',
        anchor: ROUTER.HOME,
    },
    {
        icon: timer,
        text: 'Recent',
        anchor: "/",
    },
    {
        icon: favorite,
        text: 'Favorites',
        anchor: "/",
    },
    {
        icon: backlog,
        text: 'Archived',
        anchor: "/",
    },
]