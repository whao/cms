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
                        <div class="card">
                            <header class="card-header"><p class="card-header-title">
                               Add new deal
                            </p></header>
                            <div class="card-content">
                                <div class="content deal-form">
                                    <b-field label="标题">
                                        <b-input maxlength="100"></b-input>
                                    </b-field>

                                    <b-field label="URL">
                                        <b-input></b-input>
                                    </b-field>

                                    <b-field label="分类">
                                        <b-select placeholder="Select">
                                            <option value="护肤美妆">护肤美妆</option>
                                            <option value="服饰">服饰</option>
                                        </b-select>
                                    </b-field>

                                    <b-field label="正文">
                                        <wysiwyg v-model="myHTML" />
                                    </b-field>

                                    <div class="field is-grouped">
                                        <div class="control">
                                            <button class="button is-primary" type="button" @click="save">Submit</button>
                                        </div>
                                        <div class="control">
                                            <button class="button">Draft</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftBar from "./LeftBar"
    export default {
        data() {
            return {

            }
        },
        components: {
            LeftBar
        },
        methods: {
            save() {
                const api = this.$store.state.api.baseUrl + this.$store.state.api.stage;
                this.axios.post(api+'/deals', {title: 'test', body: 'body'}).then((response) => {
                    console.log(response);
                })
            }
        }
    }
</script>

<style>
    .deal-form .editr {
        height: 600px;
    }
</style>
