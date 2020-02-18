import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        rows: [
            {
                name:'行',
                zones:[
                    {
                        name:'列',
                        size:24,
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
    },

})

export default store