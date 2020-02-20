<template>
    <el-form-item :label="value.label" label-width="80px">
        <el-select v-model="size">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
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
            size: {
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
                        value:'mini',
                        label:'mini'
                    },
                    {
                        value:'small',
                        label:'小型'
                    },
                    {
                        value:'medium',
                        label:'中型'
                    },
                    {
                        value:'',
                        label:'默认'
                    }
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