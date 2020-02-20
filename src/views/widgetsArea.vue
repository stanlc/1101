<template>
    <div>
        <draggable v-model="widgets" :options="{group:{name:'widgets',pull:'clone',put:false}}" @end="drag=false" :sort="false">
            <div class="cursor--move" v-for="(item,itemIndex) in widgets" :key="itemIndex" >
                <i :class="item.icon"></i>
                <p>{{item.name}}</p>
            </div>
        </draggable>
    </div>
</template>

<script>

import draggable from '../assets/vuedraggable'
    export default {
        data() {
            return {
                widgets: [
                    {
                        name:'输入框',
                        template:'<el-input v-model="attr.input"></el-input>',
                        data:{attr:{msg:'aaa',input:''},style:{}},
                        class:'hover-move',
                        icon:'el-icon-menu'
                    },
                    {
                        name:'按钮',
                        template:'<el-button :type="attr.btnType" :style="style" :size="attr.btnSize">{{attr.btnText}}</el-button>',
                        data:{attr:{btnText:'发送',btnType:'primary',btnSize:'small'},style:{color:'#fff'}},
                        class:'hover-move',
                        icon:'el-icon-switch-button'
                    },
                    {
                        name:'文本',
                        template:'<p>{{attr.text}}</p>',
                        data:{attr:{text:'文本内容'},style:{color:'#000'}},
                        class:'',
                        icon:'el-icon-switch-button'
                    },
                    {
                        name:'下拉框',
                        template:`
                        <el-select v-model="attr.value">
                            <el-option
                             v-for="item in attr.options"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                            </el-option>
                        </el-select>`,
                        data:{
                            attr:{
                                options:[
                                    {
                                        value:'选项1',
                                        label:'选项1'
                                    },
                                    {
                                        value:'选项2',
                                        label:'选项2'
                                    },
                                ],
                                value:'',
                            },
                            style:{},
                        },
                        
                    }
                ]
            }
        },
        components: {
            draggable,
        },
    }
</script>

<style lang="scss" scoped>

</style>