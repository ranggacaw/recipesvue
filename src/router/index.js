import { createRouter, createWebHashHistory } from 'vue-router'
import ContactRecipes from '../views/ContactUs.vue'
import RecipesAll from '../views/Recipes.vue'
import RecipesDetails from '../views/RecipesDetail.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/contact-us',
    name: 'contact-recipes',
    component: ContactRecipes
  },
  {
    path: '/recipes-all',
    name: 'recipes',
    component: RecipesAll
  },
  {
    path: '/recipes-detail',
    name: 'recipes-detail',
    component: RecipesDetails
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
