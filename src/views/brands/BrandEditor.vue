<template>
  <div class="card">
    <header class="card-header"><p class="card-header-title">
      {{ editorTitle }}
    </p></header>
    <div class="card-content">
      <div class="content brand-form">
        <b-field
                label="品牌名称"
                :type="{'is-danger': errors.has('name')}"
                :message="errors.first('name')">
          <b-input
                  name="name"
                  maxlength="100"
                  v-model="brandToEdit.name"
                  v-validate="'required'"></b-input>
        </b-field>

        <b-field grouped>
          <b-field label="官网链接">
            <b-input v-model="brandToEdit.url"></b-input>
          </b-field>
          <b-field label="图片链接">
            <b-input v-model="brandToEdit.picture"></b-input>
          </b-field>
        </b-field>

        <b-field grouped>
          <b-field label="状态">
            <b-select placeholder="Select" v-model="brandToEdit.status">
              <option value="published">已发布</option>
              <option value="draft">草稿</option>
            </b-select>
          </b-field>

          <b-field label="标签">
            <b-taginput
                    v-model="brandToEdit.tags"
                    :data="tags"
                    :allow-new="true"
                    placeholder="添加标签">
            </b-taginput>
          </b-field>
        </b-field>

        <b-field label="品牌简介">
          <wysiwyg v-model="brandToEdit.body"/>
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
        props: ['brand', 'editor-title', 'editor-submit'],
        data() {
            return {
                tags: ['标签1', '标签2']
            }
        },
        computed: {
            brandToEdit: function () {
                return JSON.parse(JSON.stringify(this.brand));
            }
        },
        methods: {
            save() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.$emit('brand-saved', this.brandToEdit)
                    }
                });
            }
        }
    }
</script>

<style>
  .brand-form .editr {
    height: 450px;
  }
</style>
