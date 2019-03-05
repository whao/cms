<template>
  <aside class="menu is-hidden-mobile">
    <p class="menu-label">
      折扣
    </p>
    <ul class="menu-list">
      <li>
        <router-link to="/deals/list" :class="$route.fullPath === '/deals/list' ? 'is-active': ''">折扣列表
        </router-link>
      </li>
      <li>
        <router-link to="/deals/new" :class="$route.fullPath === '/deals/new' ? 'is-active': ''">添加新折扣
        </router-link>
      </li>
    </ul>
    <p class="menu-label">
      设置
    </p>
    <ul class="menu-list">
      <li>
        <router-link to="/deals/category" :class="$route.fullPath === '/deals/category' ? 'is-active': ''">分类</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
    export default {}
</script>
