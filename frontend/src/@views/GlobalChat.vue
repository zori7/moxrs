<template>
    <div>
        <el-card class="chat">
            <div>
                <div v-for="(message, $i) in messages" :key="$i" class="message">
                    <span>
                        {{ message.body }}
                    </span>
                    <span style="float: right">
                        <small>{{ message.from }}, {{ message.date | date }}</small>
                    </span>
                </div>
            </div>
        </el-card>
        <el-input v-model="message" @keyup.enter.native="pushMessage" />
    </div>
</template>

<script>
    export default {
        name: "GlobalChat",
        data () {
            return {
                message: '',
                messages: []
            }
        },
        watch: {
            'messages.length': {
                handler () {
                    this.messages.sort((a, b) => moment(a.date).isAfter(moment(b.date)) ? 1 : -1)
                }
            }
        },
        mounted () {
            Echo
                .channel('moxrs_database_global-chat')
                .listen('GlobalMessage', ({ message }) => {
                    this.messages.push(message)
                    let chat = document.getElementsByClassName('chat')[0]
                    this.$nextTick(() => {
                        chat.scrollTop = chat.scrollHeight
                    })
                })
        },
        methods: {
            pushMessage () {
                axios.post('global-messages', {
                    message: this.message
                })
                    .then(res => {
                        this.messages.push(res.data)
                        this.message = ''
                        let chat = document.getElementsByClassName('chat')[0]
                        this.$nextTick(() => {
                            chat.scrollTop = chat.scrollHeight
                        })
                    })
            }
        }
    }
</script>

<style scoped>
    .chat {
        height: calc(100vh - 180px);
        overflow-y: auto;
        margin-bottom: 1rem;
        scroll-behavior: smooth;
    }
    .message {
        box-shadow: 0 2px 3px 0 rgba(200, 210, 220, 0.4);
        margin: 0.5rem 0;
        padding: 1rem;
        border-radius: 5px;
    }
</style>