<template>
    <el-container>
        <el-header>
            <div style="display:inline;vertical-align:middle">
                配置页面
                <el-form style="float:right" :inline="true">
                    <el-form-item>
                        <el-button>保存</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button>预览</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-header>
        <el-main>
            <el-row :gutter="10">
                <el-col :span="4">
                    <widgets-area></widgets-area>
                </el-col>
                <el-col :span="16">
                    <page-editor></page-editor>
                </el-col>
                <el-col :span="4">
                    <widgets-settings></widgets-settings>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import pageEditor from '../views/pageEditor'
import widgetsArea from '../views/widgetsArea'
import widgetsSettings from '../views/widgetsSettings'
import draggable from '../assets/vuedraggable'
    export default {
        components: {
            pageEditor,
            draggable,
            widgetsArea,
            widgetsSettings,
        },
        
    }
</script>

<style scoped>
    
</style>