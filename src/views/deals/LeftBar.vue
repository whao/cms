<template>
    <aside class="menu is-hidden-mobile">
        <p class="menu-label">
            Deals
        </p>
        <ul class="menu-list">
            <li><router-link to="/deals" class="is-active">Dashboard</router-link></li>
            <li><router-link to="/deals/list">Recent Deals</router-link></li>
            <li><router-link to="/deals/new">Add New Deal</router-link></li>
        </ul>
        <p class="menu-label">
            Administration
        </p>
        <ul class="menu-list">
            <li>
                <a>Deal Setting</a>
                <ul>
                    <li><a>Category</a></li>
                    <li><a>Keyword</a></li>
                </ul>
            </li>
            <li>
                <a>CMS User Setting</a>
                <ul>
                    <li><a>Users</a></li>
                    <li><a>Add User</a></li>
                </ul>
            </li>
        </ul>
    </aside>
</template>
