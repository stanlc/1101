<template>
   <el-form>
       <el-form-item v-for="(item,index) in options" :key="item.index" :label="'选项名'+(index+1)" label-width="80px">
           <el-input v-model="item.label" @input="sendMsg"></el-input>
       </el-form-item>
       <el-form-item v-for="(item,index) in options" :key="item.index" :label="'选项值'+(index+1)" label-width="80px">
           <el-input v-model="item.value" @input="sendMsg"></el-input>
       </el-form-item>
       <el-form-item>
           <el-button @click="add" type="primary" size="small" icon="el-icon-plus"></el-button>
           <el-button @click="remove" type="danger" size="small" icon="el-icon-delete"></el-button>
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
        // computed: {
        //     options: {
        //         get(){
        //             return this.value.data
        //         },
        //         set(v){
        //             console.log(v)
        //             this.$emit('myEvent',v)
        //         }
        //     }
        // },
        data() {
            return {
               options:this.value.data,
            }
        },
        methods: {
            sendMsg() {
                this.$emit('myEvent',this.options)
            },
            add(){
                let index = this.options.length+1
                this.options.push({label:'选项名'+index,value:'选项值'+index})
                // this.$forceUpdate()
                this.sendMsg()
            },
            remove(){
                this.options.pop()
                this.sendMsg()
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>