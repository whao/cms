<template>
  <deal-editor :deal="deal" editor-title="Edit deal" editor-submit="Update" @deal-saved="update"></deal-editor>
</template>

<script>
    import DealEditor from "./DealEditor"

    export default {
        props: ['deal'],
        components: {DealEditor},
        methods: {
            update(deal) {
                const api = this.$store.state.api.url;
                this.axios.put(api + '/deals/' + deal.id, deal).then((response) => {
                    console.log(response);
                    this.$toast.open({
                        duration: 5000,
                        message: 'Deal已更新',
                        type: 'is-success'
                    });
                })
            }
        }
    }
</script>
