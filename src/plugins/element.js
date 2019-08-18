import Vue from 'vue'

import { Button, Dropdown, DropdownMenu, DropdownItem,Menu, Submenu,
    MenuItemGroup, MenuItem, Form, FormItem, Input, Message ,Table,TableColumn ,Dialog} from 'element-ui'

// install Vue.component() 注册全局组件
Vue.use(Button);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
// Vue.component() ==> template

// this.$message
Vue.prototype.$message = Message;
