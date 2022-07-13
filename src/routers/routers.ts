import Dashboard from "../features/Dashboard";
import Home from "../features/Home";
import Stats from "../features/Stats";
import Users from "../features/Users";
import routhPath from "../constant/routhPath";

export const routers = {
    dashboard: {
        path: routhPath.DASHBOARD,
        element: Dashboard,
        isPrivate: false
    },
    home: {
        path: routhPath.HOME,
        element: Home,
        isPrivate: false
    },
    stats: {
        path: routhPath.STATS,
        element: Stats,
        isPrivate: false
    },
    users: {
        path: routhPath.USERS,
        element: Users,
        isPrivate: false
    }
}