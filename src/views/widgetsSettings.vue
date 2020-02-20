<template>
    <div>
        settings
        <el-tabs>
            <el-tab-pane label="交互设置">
               
            </el-tab-pane>
            <el-tab-pane label="属性设置">
                <el-collapse>
                    <el-collapse-item v-for="(item,index) in $store.state.rows" :key="index" :title="'第'+(index+1)+'行'">
                        <el-collapse-item v-for="(zoneItem,zoneIndex) in item.zones" :key="zoneIndex" :title="'第'+(zoneIndex+1)+'列'" style="margin-left:10px">
                            <el-collapse-item v-for="(widgetItem,widgetIndex) in zoneItem.widgets" :key="widgetIndex" :title="(widgetIndex+1)+'.'+widgetItem.name" style="margin-left:15px">
                                <el-form v-for="(keys,keyIndex) in Object.keys(widgetItem.data.attr).filter((v)=>{return settingList.indexOf(v)>-1})" :key="keyIndex" >
                                    <component :is="keys+'Setter'" :value="{data:widgetItem.data.attr[keys],label:keyTranslate(keys)}" @myEvent="(v)=>{widgetItem.data.attr[keys]=v}"></component>
                                </el-form>
                            </el-collapse-item>
                        </el-collapse-item>
                    </el-collapse-item>

                    <!-- <div v-for="(item,index) in $store.state.rows" :key="index" :title="'第'+(index+1)+'行'">
                        <div v-for="(zoneItem,zoneIndex) in item.zones" :key="zoneIndex" :title="'第'+(zoneIndex+1)+'列'" style="margin-left:10px">
                            <el-collapse-item v-for="(widgetItem,widgetIndex) in zoneItem.widgets" :key="widgetIndex" :title="widgetItem.name" style="margin-left:15px">
                                <el-form v-for="(keys,keyIndex) in Object.keys(widgetItem.data.attr).filter((v)=>{return settingList.indexOf(v)>-1})" :key="keyIndex" >
                                    <component :is="keys+'Setter'" :value="{data:widgetItem.data.attr[keys],label:keyTranslate(keys)}" @myEvent="(v)=>{widgetItem.data.attr[keys]=v}"></component>
                                </el-form>
                            </el-collapse-item>
                        </div>
                    </div> -->
                </el-collapse>
            </el-tab-pane>
            <el-tab-pane label="样式设置">
                <el-collapse>
                    <el-collapse-item v-for="(item,index) in $store.state.rows" :key="index" :title="'第'+(index+1)+'行'">
                        <el-collapse-item v-for="(zoneItem,zoneIndex) in item.zones" :key="zoneIndex" :title="'第'+(zoneIndex+1)+'列'" style="margin-left:10px">
                            <col-setter :value="{data:zoneItem.justify,label:'对齐方式'}" @myEvent="(v)=>{zoneItem.justify=v}"></col-setter>
                            <el-collapse-item v-for="(widgetItem,widgetIndex) in zoneItem.widgets" :key="widgetIndex" :title="(widgetIndex+1)+'.'+widgetItem.name" style="margin-left:15px">
                                <el-form v-for="(keys,keyIndex) in Object.keys(widgetItem.data.style)" :key="keyIndex" >
                                    <!-- <el-form-item :label="keys">
                                        <el-input v-model="widgetItem.data.style[keys]"></el-input> -->
                                        <component :is="keys+'Setter'" :value="{data:widgetItem.data.style[keys],label:keyTranslate(keys)}" @myEvent="(v)=>{widgetItem.data.style[keys]=v}"></component>
                                        <!-- <component :is="keys+'Setter'" :value="widgetItem.data.attr[keys]"></component> -->
                                    <!-- </el-form-item> -->
                                </el-form>
                            </el-collapse-item>
                        </el-collapse-item>
                    </el-collapse-item>
                </el-collapse>
            </el-tab-pane>
        </el-tabs>
        <!-- <el-collapse>
            <el-collapse-item v-for="(item,index) in $store.state.rows" :key="index" :title="'第'+(index+1)+'行'">
                <el-collapse-item v-for="(zoneItem,zoneIndex) in item.zones" :key="zoneIndex" :title="'第'+(zoneIndex+1)+'列'" style="margin-left:10px">
                    <el-collapse-item v-for="(widgetItem,widgetIndex) in zoneItem.widgets" :key="widgetIndex" :title="(widgetIndex+1)+'.'+widgetItem.name" style="margin-left:15px">
                        <el-form v-for="(keys,keyIndex) in Object.keys(widgetItem.data).filter((v)=>{return settingList.indexOf(v)>-1})" :key="keyIndex" >
                            <el-form-item :label="keys|keyTranslate">
                                <el-input v-model="widgetItem.data[keys]"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-collapse-item>
                </el-collapse-item>
            </el-collapse-item>
        </el-collapse> -->
    </div>
</template>

<script>
import textSetter from '../components/setters/attrs/textSetter'
import btnTextSetter from '../components/setters/attrs/btnTextSetter'
import colorSetter from '../components/setters/style/colorSetter'
import colSetter from '../components/setters/style/colSetter'
import btnSizeSetter from '../components/setters/attrs/btnSizeSetter'
import optionsSetter from '../components/setters/attrs/optionsSetter'
    export default {
        data() {
            return {
                // 可设置属性字段值
                settingList:[
                    'text',
                    'btnText',
                    'btnSize',
                    'options',
                ]
            }
        },
        components: {
            textSetter,
            btnTextSetter,
            colorSetter,
            btnSizeSetter,
            colSetter,
            optionsSetter,
        },
        methods: {
            keyTranslate(value) {
                switch (value){
                    case 'text':
                        return '文本内容'
                        break;
                    case 'btnText':
                        return '按钮文本'
                        break;
                    case 'color':
                        return '文字颜色'
                        break;
                    case 'btnSize':
                        return '按钮尺寸'
                        break;
                    default:
                        return value
                        break;
                }
            }
        },
        // filters: {
        //     //可设置属性字段对应中文
        //     keyTranslate: function(value) {
        //         switch (value){
        //             case 'text':
        //                 return '文本内容'
        //                 break;
        //             case 'btnText':
        //                 return '按钮文本'
        //                 break;
        //             default:
        //                 return value
        //                 break;
        //         }
        //     },
        // }
    }
</script>

<style lang="scss" scoped>

</style>