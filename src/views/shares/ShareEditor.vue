<template>
  <div class="card">
    <header class="card-header"><p class="card-header-title">
      {{ editorTitle }}
    </p></header>
    <div class="card-content">
      <div class="content share-form">
        <b-field
                label="品牌名称"
                :type="{'is-danger': errors.has('name')}"
                :message="errors.first('name')">
          <b-input
                  name="name"
                  maxlength="100"
                  v-model="shareToEdit.name"
                  v-validate="'required'"></b-input>
        </b-field>

        <b-field grouped>
          <b-field label="图片链接">
            <b-input v-model="shareToEdit.picture"></b-input>
          </b-field>
        </b-field>

        <b-field grouped>
          <b-field label="状态">
            <b-select placeholder="Select" v-model="shareToEdit.status">
              <option value="published">已发布</option>
              <option value="submitted">已发布</option>
              <option value="draft">草稿</option>
            </b-select>
          </b-field>

          <b-field label="标签">
            <b-taginput v-model="shareToEdit.tags"
                        :data="tags"
                        :allow-new="true"
                        placeholder="添加标签">
            </b-taginput>
          </b-field>
        </b-field>

        <b-field label="品牌简介">
          <wysiwyg v-model="shareToEdit.body"/>
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
        props: ['share', 'editor-title', 'editor-submit'],
        data() {
            return {
                tags: ['标签1', '标签2']
            }
        },
        computed: {
            shareToEdit: function () {
                return JSON.parse(JSON.stringify(this.brand));
            }
        },
        methods: {
            save() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.$emit('brand-saved', this.shareToEdit)
                    }
                });
            }
        }
    }
</script>

<style>
  .share-form .editr {
    height: 450px;
  }
</style>
