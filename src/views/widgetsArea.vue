<template>
    <div>
        <draggable v-model="widgets" :options="{group:{name:'widgets',pull:'clone',put:false}}" @end="drag=false">
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
                        template:`<input></input>`,
                        icon:'el-icon-menu'
                    },
                    {
                        name:'按钮',
                        template:`<button>bb</button>`,
                        icon:'el-icon-switch-button'
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