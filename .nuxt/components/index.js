import { wrapFunctional } from './utils'

export { default as Dashboard } from '../..\\components\\Dashboard.vue'
export { default as DashTitle } from '../..\\components\\DashTitle.vue'
export { default as EventCard } from '../..\\components\\EventCard.vue'
export { default as Nav } from '../..\\components\\Nav.vue'
export { default as PostCard } from '../..\\components\\PostCard.vue'
export { default as Template } from '../..\\components\\Template.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'

export const LazyDashboard = import('../..\\components\\Dashboard.vue' /* webpackChunkName: "components/dashboard" */).then(c => wrapFunctional(c.default || c))
export const LazyDashTitle = import('../..\\components\\DashTitle.vue' /* webpackChunkName: "components/dash-title" */).then(c => wrapFunctional(c.default || c))
export const LazyEventCard = import('../..\\components\\EventCard.vue' /* webpackChunkName: "components/event-card" */).then(c => wrapFunctional(c.default || c))
export const LazyNav = import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const LazyPostCard = import('../..\\components\\PostCard.vue' /* webpackChunkName: "components/post-card" */).then(c => wrapFunctional(c.default || c))
export const LazyTemplate = import('../..\\components\\Template.vue' /* webpackChunkName: "components/template" */).then(c => wrapFunctional(c.default || c))
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))