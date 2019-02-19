<template>
  <aside class="menu is-hidden-mobile">
    <p class="menu-label">
      Deals
    </p>
    <ul class="menu-list">
      <li>
        <router-link to="/deals/list" :class="$route.fullPath === '/deals/list' ? 'is-active': ''">All Deals
        </router-link>
      </li>
      <li>
        <router-link to="/deals/new" :class="$route.fullPath === '/deals/new' ? 'is-active': ''">Add New Deal
        </router-link>
      </li>
    </ul>
    <p class="menu-label">
      Settings
    </p>
    <ul class="menu-list">
      <li>
        <router-link to="/deals/category" :class="$route.fullPath === '/deals/category' ? 'is-active': ''">Category</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
    export default {}
</script>
