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
              <li><a href="..">Mindeal</a></li>
              <li><a href="..">Deals</a></li>
              <li class="is-active"><a href="#" aria-current="page">New</a></li>
            </ul>
          </nav>
          <section>
            <editor :deal="deal" editor-title="Add New Deal" editor-submit="Submit" @deal-saved="save"></editor>
            <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import LeftBar from "./LeftBar"
    import Editor from "./DealEditor"

    export default {
        data() {
            return {
                deal: {
                    title: '',
                    url: '',
                    category: '',
                    status: 'draft',
                    body: ''
                },
                isLoading: false,
            }
        },
        components: {LeftBar, Editor},
        methods: {
            save(deal) {
                this.isLoading = true;
                const api = this.$store.state.api.url;
                this.axios.post(api + '/deals', deal).then((response) => {
                    console.log(response);
                    this.deal = {
                        title: '',
                        url: '',
                        category: '',
                        status: 'draft',
                        body: ''
                    };
                    this.$toast.open({
                        duration: 5000,
                        message: 'Deal已保存',
                        type: 'is-success'
                    });
                    this.$router.push({name: 'deal-list'});
                })
            },
            complete() {
                this.$snackbar.open({
                    duration: 5000,
                    message: 'Deal创建成功，',
                    type: 'is-danger',
                    position: 'is-bottom-left',
                    actionText: 'Undo',
                    queue: false,
                    onAction: () => {
                        this.$toast.open({
                            message: 'Action pressed',
                            queue: false
                        })
                    }
                })
            }
        }
    }
</script>
