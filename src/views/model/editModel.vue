<template>
    <div>
        <p>模板管理>{{id?'修改':'创建'}}模板</p>
        <el-form @submit.native.prevent="save">
            <el-form-item label="模板名称" label-width="80px">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="模板图标" label-width="80px">
                <el-input v-model="model.icon"></el-input>
                <el-button @click="uploadIcon">上传图标</el-button>
            </el-form-item>
            <el-form-item label="模板资源包" label-width="80px">
                <el-input v-model="model.resource"></el-input>
                <el-button @click="uploadResource">上传资源包</el-button>
            </el-form-item>
            <el-form-item label="状态" label-width="80px">
                <el-input v-model="model.state"></el-input>
            </el-form-item>
            <el-form-item label="模板描述" label-width="80px">
                <el-input type="textarea" v-model="model.description"></el-input>
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