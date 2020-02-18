<template>
    <div>
        <el-form :inline="true">
            <el-form-item label="容器列数">
                <el-select v-model="rowOption">
                    <el-option
                    v-for="item in rowOptions"
                    :key="item.label"
                    :label="item.label"
                    :value="item.value"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="容器高度">
                <el-input v-model="cellHeight"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="addRow(rowOption,cellHeight)" type="primary">新增容器</el-button>
            </el-form-item>
        </el-form>
        <el-row :gutter="10" v-for="(row,rowIndex) in rows" :key="rowIndex">
            <el-col v-for="(zone,zoneIndex) in row.zones" :key="zoneIndex" :md="zone.size" class="contentBox" :style="'height:'+zone.height">
                <draggable v-model="zone.widgets" :options="{group:'widgets'}" @start="drag=true" @end="drag=false;$forceUpdate()">
                    <!-- 拖拽组件 -->
                    <div class="cursor--move" v-for="(item,itemIndex) in zone.widgets" :key="itemIndex"   style="display:inline-block">
                        <dynamic-components :cxt="item"></dynamic-components>
                        <!-- {{item.app}} -->
                    </div>
                    <!-- 空白容器 -->
                    <div class="cursor--forbid" v-if="!zone.widgets.length" @start="drag=false" @end="drag=flase" style="text-align:center;line-height:88px;color:#AAA">空白容器</div>
                </draggable>
                <!-- 行删除 -->
                <el-button type="danger" icon="el-icon-delete" circle title="删除该行" @click="deleteRow(rowIndex)" style="position:absolute;left:-20px;top:-20px;"></el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import draggable from '../assets/vuedraggable'
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
                rows:this.$store.state.rows,
                rowOption:[24],
                cellHeight:88,
                rowOptions:[
                    {
                        value:[24],
                        label:'一列'
                    },
                    {
                        value:[12,12],
                        label:'两列'
                    },
                    {
                        value:[8,8,8],
                        label:'三列'
                    },
                    {
                        value:[6,6,6,6],
                        label:'四列'
                    },
                    {
                        value:[5,5,4,5,5],
                        label:'五列'
                    },
                    {
                        value:[4,4,4,4,4,4],
                        label:'六列'
                    }
                ]
            }
        },
        components: {
            draggable,
        },
        methods: {
            addRow(cols=[6,6,6,6],height=88) {
                const newRow = {zones:[]};
                cols.forEach(colsize=>{
                    newRow.zones.push({
                        size:colsize,
                        height:height+'px',
                        widgets:[]
                    });
                });
                this.$store.state.rows.push(newRow);
            },
            deleteRow(index){
                this.$store.state.rows.splice(index,1);
            },
            save(){
                console.log(this.rows)
            }
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
        justify-content: center;
        align-items: center;
    }
    .hover-move{
        cursor: move
    }
    .hover-pointer{
        cursor: pointer;
    }
</style>