<template>
  <aside class="menu is-hidden-mobile">
    <p class="menu-label">
      晒单
    </p>
    <ul class="menu-list">
      <li>
        <router-link to="/shares/list" :class="$route.fullPath === '/shares/list' ? 'is-active': ''">晒单列表
        </router-link>
      </li>
      <li>
        <router-link to="/shares/new" :class="$route.fullPath === '/brands/new' ? 'is-active': ''">添加新晒单
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
    export default {}
</script>
