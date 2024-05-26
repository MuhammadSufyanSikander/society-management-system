const ROUTES = {
  register: '/register',
  login: '/login',
  users: '/users',
  societies: '/societies',
  allSocieties: '/owner/societies',
  allEvents: '/owner/events',
  events: '/events',
  event: '/event',
  userProfile: '/user-profile',
  homepage: '/homepage',
  aboutUs: '/aboutus',
  contactUs: '/contactus',
  faq: '/faq',
  society: '/society',
  feedbackForm: '/feedbackForm',
}

export const loggedOutRoutes = [
  {
    label: 'Homepage',
    route: ROUTES.homepage,
  },
  {
    label: 'Societies',
    route: ROUTES.societies,
  },
  {
    label: 'Events',
    route: ROUTES.events,
  },
  {
    label: 'FAQ',
    route: ROUTES.faq,
  },
  {
    label: 'Feedback',
    route: ROUTES.feedbackForm,
  },
  {
    label: 'Contact Us',
    route: ROUTES.contactUs,
  },
  {
    label: 'About Us',
    route: ROUTES.aboutUs,
  },
]

export const studentRoutes = [
  {
    label: 'Homepage',
    route: ROUTES.homepage,
  },
  // {
  //   label: 'Users',
  //   route: ROUTES.users,
  // },
  {
    label: 'Societies',
    route: ROUTES.societies,
  },
  {
    label: 'Events',
    route: ROUTES.events,
  },
  {
    label: 'Profile',
    route: ROUTES.userProfile + '/1',
  },
  {
    label: 'FAQ',
    route: ROUTES.faq,
  },
  {
    label: 'Feedback',
    route: ROUTES.feedbackForm,
  },
  {
    label: 'Contact Us',
    route: ROUTES.contactUs,
  },
  {
    label: 'About Us',
    route: ROUTES.aboutUs,
  },
]

export const adminRoutes = [
  {
    label: 'Homepage',
    route: ROUTES.homepage,
  },
  {
    label: 'Users',
    route: ROUTES.users,
  },
  {
    label: 'Societies',
    route: ROUTES.societies,
  },
  {
    label: 'Events',
    route: ROUTES.events,
  },
  {
    label: 'FAQ',
    route: ROUTES.faq,
  },
  {
    label: 'Feedback',
    route: ROUTES.feedbackForm,
  },
  {
    label: 'Contact Us',
    route: ROUTES.contactUs,
  },
  {
    label: 'About Us',
    route: ROUTES.aboutUs,
  },
]

export const ownerRoutes = [
  {
    label: 'Homepage',
    route: ROUTES.homepage,
  },
  {
    label: 'Users',
    route: ROUTES.users,
  },
  {
    label: 'Societies',
    route: ROUTES.societies,
  },
  {
    label: 'All Societies',
    route: ROUTES.allSocieties,
  },
  {
    label: 'Events',
    route: ROUTES.events,
  },
  {
    label: 'All Events',
    route: ROUTES.allEvents,
  },
  {
    label: 'FAQ',
    route: ROUTES.faq,
  },
  {
    label: 'Feedback',
    route: ROUTES.feedbackForm,
  },
  {
    label: 'Contact Us',
    route: ROUTES.contactUs,
  },
  {
    label: 'About Us',
    route: ROUTES.aboutUs,
  },
]

export default ROUTES
