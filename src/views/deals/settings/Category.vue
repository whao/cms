<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <div class="column is-2 ">
          <left-bar></left-bar>
        </div>
        <div class="column is-10">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li><a href="/">Mindeal</a></li>
              <li><router-link to="/deals">Deals</router-link></li>
              <li class="is-active"><a href="#" aria-current="page">Categories</a></li>
            </ul>
          </nav>
          <section>
            <b-table
                    :data="data"
                    :loading="loading">
              <template slot-scope="props">
                <b-table-column field="name" label="名称">
                    {{ props.row.name }}
                </b-table-column>
                <b-table-column field="created_at" label="创建时间" width="160">
                  {{ new Date(parseInt(props.row.created_at)) | moment('MM/DD/YYYY HH:mm')}}
                </b-table-column>
              </template>
            </b-table>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import LeftBar from "./../LeftBar"

    export default {
        data() {
            return {
                data: [],
                loading: false
            }
        },
        components: {LeftBar},
        methods: {
            loadCategories() {
                const api = this.$store.state.api.url;
                this.axios.get(api + '/meta/category').then((response) => {
                    console.log(response);
                    this.data = response.data.Items;
                });
            },
        },
        mounted() {
            this.loadCategories();
        }
    }
</script>

<style>
</style>
