<template>
    <div>
        <el-form :inline="true" @submit.native.prevent="search" :model="form">
            <el-form-item label="应用名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="form.state">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button native-type="submit">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="$router.push('/createApp')">创建应用</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="listData" :height="tableHeight" ref="table">
            <el-table-column type="index" label="序号" width="100"></el-table-column>
            <el-table-column prop="name" label="应用名称"></el-table-column>
            <el-table-column prop="title" label="标题名称"></el-table-column>
            <el-table-column prop="site" label="访问域名"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column prop="state" label="状态"></el-table-column>
            <el-table-column label="操作" width="400" align="center">
                    <template slot-scope="scope"> 
                        <el-button size="small" type="primary" @click="$router.push(`/editApp/${scope.row.name}`)">修改</el-button>
                        <el-button size="small" type="danger" @click="preview(scope.row)">预览</el-button>
                        <el-button size="small" type="danger" @click="remove(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
        </el-table>
        <div class="page">
            <el-pagination
            :page-sizes="[5, 10, 15,20]"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNo"
            :page-size="pageSize"
            layout="prev, pager, next, sizes,jumper"
            background
            :total="totalCount">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pageNo:1,
                pageSize:5,
                totalCount:50,
                listData:[
                    {
                        name:'aa'
                    }
                ],
                tableHeight:500,
                form: {},
                options:[
                    {
                        value:'all',
                        label:'全部'
                    },
                    {
                        value:'off',
                        label:'禁用'
                    },
                    {
                        value:'on',
                        label:'启用'
                    }
                ]
            }
        },
        components:{
            
        },
        methods: {
            search() {
                console.log(this.form)
            },
            //表格自适应
            tableChange(){
            this.$nextTick(function () {
                this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 0.3*window.innerHeight;
                
                // 监听窗口大小变化
                let self = this;
                window.onresize = function() {
                    self.tableHeight = window.innerHeight - self.$refs.table.$el.offsetTop - 0.3*window.innerHeight
                }
            })
            //this.$refs.table.$el.offsetTop：表格距离浏览器的高度
    　　　　 //240表示你想要调整的表格距离底部的高度（你可以自己随意调整），因为我们一般都有放分页组件的，所以需要给它留一个高度　
            }, 
             //分页
            async changePage(){
                // const res = await this.$http.get(`/rest/user/page?pageNo=${this.pageNo}&pageSize=${this.pageSize}`)
                // this.listData = res.data
            },
            handleSizeChange(val) {
                this.pageSize = val
                this.changePage()
            },
            handleCurrentChange(val) {
                this.pageNo = val
                this.changePage()
            }, 
        },
    }
</script>

<style lang="scss" scoped>

</style>