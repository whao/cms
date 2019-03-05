<template>
  <div class="container">
    <div class="columns">
      <div class="column is-2 ">
        <left-bar></left-bar>
      </div>
      <div class="column is-10">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link to="/">Mindeal</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">添加新品牌</a></li>
          </ul>
        </nav>
        <section>
          <editor :brand="brand" editor-title="Add New Brand" editor-submit="Submit" @brand-saved="save"></editor>
          <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
    import LeftBar from "./LeftBar"
    import Editor from "./BrandEditor"

    export default {
        data() {
            return {
                brand: {
                    name: '',
                    url: '',
                    picture: '',
                    status: 'draft',
                    tags: [],
                    body: ''
                },
                isLoading: false,
            }
        },
        components: {LeftBar, Editor},
        methods: {
            save(brand) {
                this.isLoading = true;
                const api = this.$store.state.api.url;
                const tmp = document.createElement('DIV');
                tmp.innerHTML = brand.body;
                brand.txt = tmp.textContent || tmp.innerText || '';
                this.axios.post(api + '/brands', brand).then(() => {
                    this.deal = {
                        name: '',
                        url: '',
                        picture: '',
                        status: 'draft',
                        tags: [],
                        body: ''
                    };
                    this.$toast.open({
                        duration: 5000,
                        message: 'Brand已保存',
                        type: 'is-success'
                    });
                    this.$router.push({name: 'brand-list'});
                })
            }
        }
    }
</script>
