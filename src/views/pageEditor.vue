<template>
    <div>
        <el-button @click="addRow()">新增四列</el-button>
        <el-button @click="addRow([24])">新增一列</el-button>
        <el-button @click="addRow([8,8,8])">新增三列</el-button>
        <el-row :gutter="10" v-for="(row,rowIndex) in rows" :key="rowIndex">
            <el-col v-for="(zone,zoneIndex) in row.zones" :key="zoneIndex" :md="zone.size" class="contentBox">
                <draggable v-model="zone.widgets" :options="{group:'widgets'}" @start="drag=true" @end="drag=false">
                    <!-- 拖拽组件 -->
                    <div class="cursor--move" v-for="(item,itemIndex) in zone.widgets" :key="itemIndex"  v-html="item.template" style="display:inline-block">
                    </div>
                    <!-- 空白容器 -->
                    <div class="cursor--forbid" v-if="!zone.widgets.length" @start="drag=false" @end="drag=flase" style="text-align:center;line-height:88px;">空白容器</div>
                </draggable>
                <!-- 行删除 -->
                <el-button type="danger" icon="el-icon-delete" circle title="删除该行" @click="deleteRow(rowIndex)" style="position:absolute;left:-10px;top:-10px;"></el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import draggable from '../assets/vuedraggable'
    export default {
        data() {
            return {
                rows: [
                    {
                        zones:[
                            {
                                size:24,
                                widgets:[
                                    {
                                        name:'11',
                                        template:`<input></input>`
                                    },
                                    {
                                        name:'22',
                                        template:`<button type="danger">test</button>`
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            draggable,
        },
        methods: {
            addRow(cols=[6,6,6,6]) {
                const newRow = {zones:[]};
                cols.forEach(colsize=>{
                    newRow.zones.push({
                        size:colsize,
                        widgets:[]
                    });
                });
                this.rows.push(newRow);
            },
            deleteRow(index){
                this.rows.splice(index,1);
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
        min-height:88px;
        resize:vertical;
        overflow:auto;
    }
</style>