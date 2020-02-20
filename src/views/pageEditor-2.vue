<template>
    <div>
        <el-form :inline="true">
            <el-form-item>
                <el-button @click="addRow" type="primary">新增容器</el-button>
            </el-form-item>
        </el-form>
        <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizeable="false"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10,10]"
            :use-css-transform="true">
            <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i" style="background:yellow;overflow:auto;" dragIgnoreFrom=".test">
                <draggable v-model="item.widgets" :options="{group:'widgets'}"  @mousedown.stop="" @start.stop="drag=true" @end="drag=false;">
                    <!-- 拖拽组件 -->
                        <div v-for="(widItem,widIndex) in item.widgets" :key="widIndex" style="display:inline-block;margin:10px 10px;">
                            <dynamic-components :cxt="widItem" class="test"></dynamic-components>
                        <!-- {{item.app}} -->
                         </div>
                         <div  v-if="item.widgets.length===0" @start="drag=false" @end="drag=flase" style="text-align:center;margin-top:10px;color:#AAA">空白容器</div>
                </draggable>
               <!-- 行删除 -->
                <el-button type="danger" icon="el-icon-delete" circle title="删除该行" @click="deleteRow(item.i)" style="position:absolute;right:5px;top:5px;"></el-button>
            </grid-item>
        </grid-layout>
        
    </div>
</template>

<script>
import draggable from '../assets/vuedraggable'
import VueGridLayout from 'vue-grid-layout'
import Vue from 'vue'
Vue.component('dynamicComponents',{
    //functional:true,
    props:['cxt'],
    render(h,cxt){
        let that = this
        return h({
            template:this.cxt.template,
            data(){
                return that.cxt.data
            },
            style:this.cxt.style
        })
    }
})
    export default {
        data() {
            return {
                layout:this.$store.state.layout
            }
        },
        components: {
            draggable,
            GridLayout:VueGridLayout.GridLayout,
            GridItem:VueGridLayout.GridItem,
        },
        methods: {
            addRow() {
                let index = this.layout?this.layout.length:0
                let prev = index===0?{}:this.layout[index-1]
                let next =JSON.parse(JSON.stringify(prev))
                if(index!==0 && 12-(prev.x+prev.w)>0){
                    next.x= prev.x+prev.w
                    next.w = 12-(prev.x+prev.w)
                    next.i = parseInt(prev.i)+1
                }else{
                    next.x = 0
                    next.y = prev?prev.y+prev.h:0
                    next.w = prev?prev.w:2
                    next.h = prev?prev.h:2
                    next.i = prev?(parseInt(prev.i)+1):0
                }
                if(index === 0){
                    next = {"x":0,"y":0,"w":2,"h":2,"i":"0", widgets:[]}
                }
                next.widgets=[]
                this.layout.push(next);
            },
            deleteRow(index){
                let i = this.layout.findIndex(i=>{return i.i===index})
                this.layout.splice(i,1);
            },
            save(){
                console.log(this.rows)
            },
        },
    }
</script>

<style  scoped>
    .cursor--move{
        cursor:move;
    }
    .cursor--forbid{
        cursor: not-allowed;
    }
    /* 容器 */
    .contentBox{
        border:1px dotted red;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .center{
        justify-content: center;
    }
    .start{
        justify-content: flex-start;
    }
    .end{
        justify-content: flex-end;
    }
    .hover-move{
        cursor: move
    }
    .hover-pointer{
        cursor: pointer;
    }
</style>