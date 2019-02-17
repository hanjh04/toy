import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Book from "@/pages/Book.vue";
import Server from "@/pages/Server.vue";
import store from "../store/index.js";

const routes = [{
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [{
            path: "dashboard",
            name: "Dashboard",
            component: Dashboard
        },
        {
            path: "user",
            name: "User Profile",
            component: UserProfile
        },
        {
            path: "book",
            name: "Book Management",
            component: Book,
            beforeEnter(routeTo, routeFrom, next) {
                store.dispatch('FETCH_BOOKLIST')
                    .then(() => next())
                    .catch(() => console.log('load booklist fail'))
            },
            children: [{
                path: '',
                // component: BookListComponent,,
                name: 'bookList',
            }, {
                path: 'bookInfo',
                // component: BookDetailComponent,
                // component: Book,
                name: 'bookAdd'
            }, {
                path: ':idx',
                // component: BookDetailComponent,
                name: 'bookInfo',

            }]
        },
        {
            path: "server",
            name: "Server Management",
            component: Server
        },
        {
            path: "table",
            name: "Table List",
            component: TableList
        },
        {
            path: "typography",
            name: "Typography",
            component: Typography
        },
        {
            path: "icons",
            name: "Icons",
            component: Icons
        },
        {
            path: "maps",
            name: "Maps",
            meta: {
                hideFooter: true
            },
            component: Maps
        },
        {
            path: "notifications",
            name: "Notifications",
            component: Notifications
        },
        {
            path: "upgrade",
            name: "Upgrade to PRO",
            component: UpgradeToPRO
        }
    ]
}];

export default routes;