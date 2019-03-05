<template>
  <div>
    <share-editor :share="share" editor-title="Edit share" editor-submit="Update" @share-saved="update"></share-editor>
    <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
  </div>
</template>

<script>
    import ShareEditor from "./ShareEditor"

    export default {
        data() {
            return {
                isLoading: false
            }
        },
        props: ['share'],
        components: {ShareEditor},
        methods: {
            update(share) {
                this.isLoading = true;
                const api = this.$store.state.api.url;
                const tmp = document.createElement('DIV');
                tmp.innerHTML = share.body;
                share.txt = tmp.textContent || tmp.innerText || '';
                this.axios.put(api + '/shares/' + share.id, share).then(() => {
                    this.isLoading = false;
                    this.$toast.open({
                        duration: 3000,
                        message: '晒单已更新',
                        type: 'is-success'
                    });
                    this.$emit('share-updated', this.$parent);
                })
            }
        }
    }
</script>
