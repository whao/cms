import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import DealsList from './views/deals/List'
import DealsNew from './views/deals/New'
import DealsCategory from "./views/deals/settings/Category"
import BrandList from './views/brands/List'
import BrandNew from './views/brands/New'
import ShareList from './views/shares/List'
import ShareNew from './views/shares/New'
import * as AmplifyModules from 'aws-amplify'
import {AmplifyEventBus, AmplifyPlugin} from 'aws-amplify-vue'
import Authenticator from './views/auth/Authenticator'
import Store from './store'

Vue.use(Router);
Vue.use(AmplifyPlugin, AmplifyModules);
let user;

getUser().then((user) => {
    if (user) {
        router.push({path: '/'})
    }
});

AmplifyEventBus.$on('authState', async (state) => {
    if (state === 'signedOut') {
        user = null;
        Store.commit('setUser', null);
        router.push({path: '/auth'})
    } else if (state === 'signedIn') {
        user = await getUser();
        router.push({path: '/'})
    }
});

function getUser() {
    return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
        if (data && data.signInUserSession) {
            Store.commit('setUser', data);
            Vue.prototype.axios.defaults.headers.common['Authorization'] = data.signInUserSession.idToken.jwtToken;
            return data;
        }
    }).catch(() => {
        Store.commit('setUser', null);
        return null
    });
}

const router = new Router({
    routes: [
        {
            path: '/',
            component: Dashboard,
            meta: { requiresAuth: true}
        },
        {
            path: '/deals/list',
            name: 'deal-list',
            component: DealsList,
            meta: { requiresAuth: true}
        },
        {
            path: '/deals/new',
            component: DealsNew,
            meta: { requiresAuth: true}
        },
        {
            path: '/deals/category',
            component: DealsCategory,
            meta: { requiresAuth: true}
        },
        {
            path: '/brands/list',
            name: 'brand-list',
            component: BrandList,
            meta: { requiresAuth: true}
        },
        {
            path: '/brands/new',
            component: BrandNew,
            meta: { requiresAuth: true}
        },
        {
            path: '/shares/list',
            name: 'share-list',
            component: ShareList,
            meta: { requiresAuth: true}
        },
        {
            path: '/shares/new',
            component: ShareNew,
            meta: { requiresAuth: true}
        },
        {
            path: '/auth',
            component: Authenticator
        }
    ]
});

router.beforeResolve(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        user = await getUser();
        if (!user) {
            return next({
                path: '/auth',
                query: {
                    redirect: to.fullPath,
                }
            });
        }
        return next()
    }
    return next()
})

export default router;
