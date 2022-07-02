import { createApp } from 'vue'
import App from './App.vue'
import router from "../router/router";
import { Tabbar, TabbarItem,Tab, Tabs,Image as VanImage,Icon,Col, Row,Divider,Popup ,Button,Overlay  } from 'vant';


const app = createApp(App)
app.use(router)
.use(Tabbar)
.use(TabbarItem)
.use(Tab)
.use(Tabs)
.use(VanImage)
.use(Icon)
.use(Col)
.use(Row)
.use(Divider)
.use(Popup)
.use(Button )
.use(Overlay ).mount('#app')
