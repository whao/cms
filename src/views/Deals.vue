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
                            <li><a class="is-active">Dashboard</a></li>
                            <li><router-link to="/deals/list">Recent Deals</router-link></li>
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
                            <li class="is-active"><a href="#" aria-current="page">Dashboard</a></li>
                        </ul>
                    </nav>
                    <section class="hero is-info welcome is-small">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title">
                                    Welcome, Admin.
                                </h1>
                            </div>
                        </div>
                    </section>
                    <section class="info-tiles">
                        <div class="tile is-ancestor has-text-centered">
                            <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <p class="title">439</p>
                                    <p class="subtitle">Deals</p>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <p class="title">59k</p>
                                    <p class="subtitle">评论</p>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <p class="title">340</p>
                                    <p class="subtitle">晒单</p>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <p class="title">100k</p>
                                    <p class="subtitle">Click</p>
                                </article>
                            </div>
                        </div>
                    </section>
                    <div class="columns">
                        <div class="column is-6">
                            <div class="card events-card">
                                <header class="card-header">
                                    <p class="card-header-title">
                                       Deals
                                    </p>
                                    <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                                    </a>
                                </header>
                                <div class="card-table">
                                    <div class="content">
                                        <table class="table is-fullwidth is-striped">
                                            <tbody>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Christian Louboutin情人节套装</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Burberry 19年春季限量格纹腮红</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Yuzefi新一季的包包可以85折收啦</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Christian Louboutin情人节套装</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Burberry 19年春季限量格纹腮红</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Yuzefi新一季的包包可以85折收啦</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Christian Louboutin情人节套装</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Burberry 19年春季限量格纹腮红</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                <td>Yuzefi新一季的包包可以85折收啦</td>
                                                <td><a class="button is-small is-primary" href="#">Action</a></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <footer class="card-footer">
                                    <a href="#" class="card-footer-item">View All</a>
                                </footer>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="card">
                                <header class="card-header">
                                    <p class="card-header-title">
                                        Deals Search
                                    </p>
                                    <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                                    </a>
                                </header>
                                <div class="card-content">
                                    <div class="content">
                                        <div class="control has-icons-left has-icons-right">
                                            <input class="input is-large" type="text" placeholder="">
                                            <span class="icon is-medium is-left">
                      <i class="fa fa-search"></i>
                    </span>
                                            <span class="icon is-medium is-right">
                      <i class="fa fa-check"></i>
                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <header class="card-header">
                                    <p class="card-header-title">
                                        晒单 Search
                                    </p>
                                    <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                                    </a>
                                </header>
                                <div class="card-content">
                                    <div class="content">
                                        <div class="control has-icons-left has-icons-right">
                                            <input class="input is-large" type="text" placeholder="">
                                            <span class="icon is-medium is-left">
                      <i class="fa fa-search"></i>
                    </span>
                                            <span class="icon is-medium is-right">
                      <i class="fa fa-check"></i>
                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .columns {
        width: 100%;
        height: 100%;
        margin-left: 0;
    }
    .menu-label {
        color: #8F99A3;
        letter-spacing: 1.3;
        font-weight: 700;
    }
    .menu-list a {
        color: #0F1D38;
        font-size: 14px;
        font-weight: 700;
    }
    .menu-list a:hover {
        background-color: transparent;
        color: #276cda;
    }
    .menu-list a.is-active {
        background-color: transparent;
        color: #276cda;
        font-weight: 700;
    }
    .card {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
        margin-bottom: 2rem;
    }
    .card-header-title {
        color: #8F99A3;
        font-weight: 400;
    }
    .info-tiles {
        margin: 1rem 0;
    }
    .info-tiles .subtitle {
        font-weight: 300;
        color: #8F99A3;
    }
    .hero.welcome.is-info {
        background: #36D1DC;
        background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);
        background: linear-gradient(to right, #5B86E5, #36D1DC);
    }
    .hero.welcome .title, .hero.welcome .subtitle {
        color: hsl(192, 17%, 99%);
    }
    .card .content {
        font-size: 14px;
    }
    .card-footer-item {
        font-size: 14px;
        font-weight: 700;
        color: #8F99A3;
    }
    .card-footer-item:hover {
    }
    .card-table .table {
        margin-bottom: 0;
    }
    .events-card .card-table {
        max-height: 250px;
        overflow-y: scroll;
    }
</style>
