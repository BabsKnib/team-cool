import Vue from 'vue';
import Router from 'vue-router';
// import LandingPage from '../src/components/LandingPage.vue';
import Transactions from '../src/components/Transactions.vue';
import Rankings from '../src/components/Rankings.vue';
import Statistics from '../src/components/Statistics.vue';
import RankingsCountry from '../src/components/RankingsCountry.vue';
import RankingsFriends from '../src/components/RankingsFriends.vue';
import UserProfile from '../src/components/UserProfile.vue';
import SendToken from '../src/components/SendToken.vue';
import WorldMap from '../src/components/WorldMap.vue';
import Faq from '../src/components/Faq.vue';
import Investors from '../src/components/InvestorsPage.vue';
import About from '../src/components/AboutPage.vue';
import Contact from '../src/components/Contacts.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: About,
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq,
    },
    {
      path: '/ranking',
      name: 'Rankings',
      component: Rankings,
    },
    {
      path: '/countryranking',
      name: 'RankingsCountry',
      component: RankingsCountry,
    },
    {
      path: '/friendsranking',
      name: 'RankingsFriends',
      component: RankingsFriends,
    },
    {
      path: '/myaccount/transactions',
      name: 'transactions',
      component: Transactions,
    },
    {
      path: '/myaccount',
      name: 'myaccount',
      component: UserProfile,
    },
    {
      path: '/sendtokens',
      name: 'sendToken',
      component: SendToken,
    },
    {
      path: '/worldmap',
      name: 'worldmap',
      component: WorldMap,
    },
    {
      path: '/myaccount/statistics',
      name: 'statistics',
      component: Statistics,
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq,
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq,
    },
    {
      path: '/investors',
      name: 'investors',
      component: Investors,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
  mode: 'history',
});
