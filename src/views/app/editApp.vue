<template>
    <div>
        <p>应用管理>{{id?'修改':'创建'}}应用</p>
        <el-form @submit.native.prevent="save">
            <el-form-item label="应用名称" label-width="80px">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="应用英文名" label-width="80px">
                <el-input v-model="model.enName"></el-input>
            </el-form-item>
            <el-form-item label="标题名称" label-width="80px">
                <el-input v-model="model.title"></el-input>
            </el-form-item>
            <el-form-item label="标题图标" label-width="80px">
                <el-input v-model="model.icon"></el-input>
            </el-form-item>
            <el-form-item label="访问域名" label-width="80px">
                <el-input v-model="model.site"></el-input>
            </el-form-item>
            <el-form-item label="状态" label-width="80px">
                <el-input v-model="model.state"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button >取消</el-button>
                <el-button native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        props:{
            id:{}
        },
        data() {
            return {
                model: {}
            }
        },
        methods: {
            save() {
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>