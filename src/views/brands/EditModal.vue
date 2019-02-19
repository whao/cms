<template>
  <div>
    <brand-editor :brand="brand" editor-title="Edit brand" editor-submit="Update" @brand-saved="update"></brand-editor>
    <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
  </div>
</template>

<script>
    import BrandEditor from "./BrandEditor"

    export default {
        data() {
            return {
                isLoading: false
            }
        },
        props: ['brand'],
        components: {BrandEditor},
        methods: {
            update(brand) {
                this.isLoading = true;
                const api = this.$store.state.api.url;
                const tmp = document.createElement('DIV');
                tmp.innerHTML = brand.body;
                brand.txt = tmp.textContent || tmp.innerText || '';
                this.axios.put(api + '/brands/' + brand.id, brand).then(() => {
                    this.isLoading = false;
                    this.$toast.open({
                        duration: 3000,
                        message: 'Deal已更新',
                        type: 'is-success'
                    });
                    this.$emit('deal-updated', this.$parent);
                })
            }
        }
    }
</script>
