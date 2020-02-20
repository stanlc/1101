<template>
    <el-form>
        <el-form-item :label="value.label" label-width="80px">
            <el-select v-model="justify">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        props: {
            value: {
                type: Object
            }
        },
        computed: {
            justify: {
                get(){
                    return this.value.data
                },
                set(v){
                   this.$emit('myEvent',v)
                }
            }
        },
        data() {
            return {
                options:[
                    {
                        value:'start',
                        label:'左对齐'
                    },
                    {
                        value:'center',
                        label:'居中'
                    },
                    {
                        value:'end',
                        label:'右对齐'
                    },
                ]
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