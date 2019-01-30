<template>
    <div id="app">
        <div class="container">
            <div class="columns">
                <div class="column is-2 ">
                    <aside class="menu is-hidden-mobile">
                        <p class="menu-label">
                            Deals
                        </p>
                        <ul class="menu-list">
                            <li><a>Dashboard</a></li>
                            <li><a class="is-active">Recent Deals</a></li>
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
                </div>
                <div class="column is-10">
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li><a href="..">Mindeal</a></li>
                            <li><a href="..">Deals</a></li>
                            <li class="is-active"><a href="#" aria-current="page">List</a></li>
                        </ul>
                    </nav>
                    <section>
                        <b-table :data="data" :columns="columns" :paginated="true" :pagination-simple="false"></b-table>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    { 'id': 1, 'title': 'Christian Louboutin情人节套装，包括经典红色指甲油和口红', 'author': '猪猪', 'date': '2016-10-15 13:43:27', 'gender': 'Male', 'status': '已发布' },
                    { 'id': 2, 'title': 'Burberry 19年春季限量格纹腮红，不管是收藏还是自用都不错', 'author': '猪猪', 'date': '2016-12-15 06:00:53', 'gender': 'Male', 'status': '草稿' },
                    { 'id': 3, 'title': 'Yuzefi新一季的包包可以85折收啦，Code【CNY15】', 'author': '猪猪', 'date': '2016-04-26 06:26:28', 'gender': 'Female', 'status': '草稿' },
                    { 'id': 4, 'title': '这双超好看的Roger Vivier现在85折收，Code【CNY15】', 'author': '猪猪', 'date': '2016-04-10 10:28:46', 'gender': 'Male', 'status': '已发布' },
                    { 'id': 5, 'title': '要过年啦~Gucci庆祝中国春节的猪猪限定看一看，肉嘟嘟的可爱', 'author': '猪猪', 'date': '2016-12-06 14:38:38', 'gender': 'Female', 'status': '已发布' }
                ],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'title',
                        label: 'Title',
                    },
                    {
                        field: 'author',
                        label: '编辑',
                    },
                    {
                        field: 'status',
                        label: '状态',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    }
                ]
            }
        }
    }
</script>

<style>
</style>
