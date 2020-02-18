<template>
    <el-form-item :label="value.label" label-width="80px">
        <el-input v-model="attr" @input="sendMsg"></el-input>
    </el-form-item>
</template>

<script>
    export default {
        props: {
            value: {
                type: Object
            }
        },
        data() {
            return {
                attr: this.value.data
            }
        },
        methods: {
            sendMsg() {
                this.$emit('myEvent',this.attr)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>