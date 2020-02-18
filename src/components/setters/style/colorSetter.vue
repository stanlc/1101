<template>
    <el-form-item :label="value.label">
        <el-color-picker v-model="color" ></el-color-picker>
    </el-form-item>
</template>

<script>
    export default {
        props: {
            value: {
                type: Object
            }
        },
        computed: {
            color: {
                get(){
                    return this.value.data
                },
                set(v){
                   this.$emit('myEvent',v)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>