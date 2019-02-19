<template>
  <aside class="menu is-hidden-mobile">
    <p class="menu-label">
      Deals
    </p>
    <ul class="menu-list">
      <li>
        <router-link to="/brands/list" :class="$route.fullPath === '/brands/list' ? 'is-active': ''">All Brands
        </router-link>
      </li>
      <li>
        <router-link to="/brands/new" :class="$route.fullPath === '/brands/new' ? 'is-active': ''">Add New Brand
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
    export default {}
</script>
