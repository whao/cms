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
              <li class="is-active"><a href="#" aria-current="page">List</a></li>
            </ul>
          </nav>
          <section>
            <b-field>
              <b-radio-button v-model="status" native-value="published" type="is-success">
                <span>已发布</span>
              </b-radio-button>

              <b-radio-button v-model="status" native-value="draft" type="is-warning">
                <span>草稿</span>
              </b-radio-button>
            </b-field>
          </section>
          <section>
            <b-table
                    :data="data"
                    :total="total"
                    paginated
                    pagination-simple
                    backend-pagination
                    :per-page="perPage"
                    @page-change="onPageChange"
                    :loading="loading">
              <template slot-scope="props">
                <b-table-column field="title" label="标题">
                  <a @click="editModal(props.row)">
                    {{ props.row.title }}
                  </a>
                </b-table-column>
                <b-table-column field="category" label="分类">
                  {{ props.row.category}}
                </b-table-column>
                <b-table-column field="status" label="状态">
                  {{ props.row.status }}
                </b-table-column>
                <b-table-column field="created_at" label="创建时间">
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
    import LeftBar from "./LeftBar"
    import EditModal from "./EditModal"

    export default {
        data() {
            return {
                data: [],
                total: 999,
                page: 1,
                perPage: 5,
                lastId: null,
                lastEpoch: null,
                loading: false,
                status: 'published',
                lastItem: null,
            }
        },
        components: {LeftBar},
        methods: {
            search(forward) {
                const api = this.$store.state.api.url;
                this.loading = true;
                this.axios.get(api + '/deals?status=' + this.status + '&lastId=' + this.lastId + '&lastEpoch=' + this.lastEpoch + '&perPage=' + this.perPage + '&forward=' + forward, this.$data).then((response) => {
                    console.log(response.data.Items);
                    if (forward) {
                        this.data = response.data.Items;
                        this.data.push(this.lastItem[0]);
                    } else {
                        this.data = response.data.Items;
                    }
                    if (response.data.lastId) {
                        this.lastId = response.data.lastId.id;
                        this.lastEpoch = response.data.lastId.created_at;
                    }
                    this.loading = false;
                })
            },
            reset() {
                this.page = 1;
                this.lastId = null;
                this.lastEpoch = null;
                this.lastItem = null;
            },
            onPageChange(page) {
                if (page > this.page) {
                    this.lastItem = this.data.splice(this.perPage - 1);
                    this.search(false);
                } else {
                    this.search(true);
                }
                this.page = page;
            },
            editModal(deal) {
                this.$modal.open({
                    parent: this,
                    component: EditModal,
                    hasModalCard: true,
                    props: {
                        deal: {
                            id: deal.id,
                            title: deal.title,
                            url: deal.url,
                            category: deal.category,
                            status: deal.status,
                            body: deal.body,
                            created_at: deal.created_at
                        }
                    }
                })
            }
        },
        watch: {
            status: function () {
                this.reset();
                this.search(false);
            }
        },
        mounted() {
            this.search(false);
        }
    }
</script>

<style>
</style>
