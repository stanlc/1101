<template>
    <div>
        <el-menu router
        :default-active="$route.path">
            <el-menu-item index="/appManager">应用管理</el-menu-item>
            <el-menu-item index="/pageManager">页面管理</el-menu-item>
            <el-menu-item index="/modelManager">模板管理</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>