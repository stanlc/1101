import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        layout:[
            {"x":0,"y":0,"w":2,"h":2,"i":"0", widgets:[]
            },
            {"x":2,"y":0,"w":2,"h":2,"i":"1",widgets:[]
            },
        ],
        rows: [
            {
                name:'行',
                zones:[
                    {
                        name:'列',
                        size:24,
                        justify:'center',
                        height:'100px',
                        widgets:[
                            {
                                name:'文本',
                                template:'<p :style="style">{{attr.text}}</p>',
                                data:{attr:{text:'aaa'},style:{color:'#000'}}
                            }
                        ]
                    }
                ]
            }
        ],
        container:[
            {
                name:'容器',
                widgets:[
                    {
                        name:'文本',
                        template:'<p :style="style">{{attr.text}}</p>',
                        data:{attr:{text:'aaa'},style:{color:'#000'}}
                    }
                ]
            }
        ],
    },

})

export default store