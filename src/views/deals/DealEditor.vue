<template>
  <div class="card">
    <header class="card-header"><p class="card-header-title">
      {{ editorTitle }}
    </p></header>
    <div class="card-content">
      <div class="content deal-form">
        <b-field
                label="标题"
                :type="{'is-danger': errors.has('title')}"
                :message="errors.first('title')">
          <b-input
                  name="title"
                  maxlength="100"
                  v-model="dealToEdit.title"
                  v-validate="'required'"></b-input>
        </b-field>

        <b-field grouped>
          <b-field label="购买链接">
            <b-input v-model="dealToEdit.url"></b-input>
          </b-field>
          <b-field label="图片链接">
            <b-input v-model="dealToEdit.picture"></b-input>
          </b-field>
        </b-field>


        <b-field grouped>
          <b-field
                  label="原价"
                  :type="{'is-danger': errors.has('msrp')}"
                  :message="errors.first('msrp')">
            <b-input
                    name="msrp"
                    v-model="dealToEdit.msrp"
                    v-validate="'required'"></b-input>
          </b-field>

          <b-field
                  label="现价"
                  :type="{'is-danger': errors.has('price')}"
                  :message="errors.first('price')">
            <b-input
                    name="price"
                    v-model="dealToEdit.price"
                    v-validate="'required'"></b-input>
          </b-field>

          <b-field
                  label="折扣码"
                  :type="{'is-danger': errors.has('coupon')}"
                  :message="errors.first('coupon')">
            <b-input
                    name="coupon"
                    v-model="dealToEdit.coupon"></b-input>
          </b-field>
        </b-field>

        <b-field grouped>
          <b-field label="分类">
            <b-select placeholder="Select" v-model="dealToEdit.category">
              <option v-for="category in categories" :value="category.name" :key="category.name">
                {{ category.name }}
              </option>
            </b-select>
          </b-field>

          <b-field label="状态">
            <b-select placeholder="Select" v-model="dealToEdit.status">
              <option value="published">已发布</option>
              <option value="draft">草稿</option>
            </b-select>
          </b-field>

          <b-field label="标签">
            <b-taginput
                    v-model="dealToEdit.tags"
                    :data="tags"
                    :allow-new="true"
                    placeholder="添加标签">
            </b-taginput>
          </b-field>
        </b-field>

        <b-field label="正文">
          <wysiwyg v-model="dealToEdit.body"/>
        </b-field>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary" type="button" @click="save">{{ editorSubmit }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['deal', 'editor-title', 'editor-submit'],
        data() {
            return {
                categories: [],
                tags: ['独家', '直邮']
            }
        },
        computed: {
            dealToEdit: function () {
                return JSON.parse(JSON.stringify(this.deal));
            }
        },
        methods: {
            loadCategories() {
                const api = this.$store.state.api.url;
                this.axios.get(api + '/meta/category').then((response) => {
                    this.categories = response.data.Items;
                });
            },
            save() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.$emit('deal-saved', this.dealToEdit)
                    }
                });
            }
        },
        mounted() {
            this.loadCategories();
        }
    }
</script>

<style>
  .deal-form .editr {
    height: 450px;
  }
</style>
