<template>
    <div>
        <el-pagination
                style="margin: 1rem 0; display: flex; justify-content: center"
                layout="prev, pager, next"
                :current-page.sync="page"
                :total="totalPages">
        </el-pagination>
        <template v-if="!loading">
            <el-card class="box-card" v-for="post in posts">
                <div slot="header" class="clearfix">
                    <span>{{ post.title }}</span>
                </div>
                <div>
                    {{ post.body }}
                </div>
            </el-card>
        </template>
        <template v-else>
            <el-row>
                <el-col v-for="o in 3" :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
            </el-row>
        </template>
    </div>
</template>

<script>
    export default {
        name: "Posts",
        data () {
            return {
                loading: false,
                posts: null,
                page: 1,
                totalPages: 1
            }
        },
        watch: {
            page () {
                this.getPosts()
            }
        },
        created () {
            this.getPosts()
        },
        methods: {
            getPosts () {
                this.loading = true
                axios.get('posts', {
                    params: {
                        page: this.page
                    }
                }).then(res => {
                    this.posts = res.data.data
                    this.totalPages = res.data.total
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped>
    .box-card {
        margin: 2rem auto;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 120px;
        margin: 1rem auto;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
</style>