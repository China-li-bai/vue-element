<template>
    <div>
    <el-table
            :data="deptLists"
            :border="true"
            :stripe="true"
            style="width: 100%">
        <el-table-column
                prop="id"
                label="编号">
        </el-table-column>
        <el-table-column
                prop="name"
                label="	部门名称">
        </el-table-column>
        <el-table-column
                prop="sn"
                label="部门编号	">
        </el-table-column>
        <el-table-column
                label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        type="primary"
                        @click="edit(scope.row)">编辑</el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="odelete">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
        <!--对话框-->
        <el-dialog :title=dynaTitle :visible.sync="depVisible">
            <el-form :model="form">
                <el-form-item label="部门名称" label-width="80px">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="部门编号" label-width="80px">
                    <el-input v-model="form.sn" autocomplete="off"></el-input>

                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="depVisible = false">取 消</el-button>
                <el-button type="primary" @click="submit()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    //引入
    import {getDepartments,editDepartments} from '@/request/api';
    import qs from 'qs';
    export default {
        name: "Department",
        data(){
            return{
                deptLists:[],
                depVisible:false,
                form:{ },
                dynaTitle:''
            }
        },
        methods:{
            /**编辑按钮触发事件*/
          edit(row){
                this.depVisible = true;
                this.dynaTitle = '部门编辑';
                /******************************************
                 * 把当前表单的 行数据赋值给 对话框 form model
                 *   this.form = {
                 *   name: row.name,
                 *   sn:row.sn
                 * }
                 * ****************************************/
                // this.form = row; 这样会 两个对象 指向同一个 地址
                // this.form = JSON.parse(JSON.stringify(row))
                this.form  = {...row }
            },
            submit(){
                editDepartments(
                     /* qs.stringify 将对象 转为字符串 */
                    {
                        name: this.form.name,
                        sn: this.form.sn,
                        id: this.form.id,
                        token:localStorage.getItem('token'),
                    }
                )
            },

            /**删除按钮触发事件*/
            odelete(){

            },

        },
        created() {
            getDepartments({
                token: localStorage.getItem('token'),
                currentPage: 1,
                pageSize: 5,
            }).then(res => {
                if (res.success === true){
                    this.deptLists = res.data.list
                }
            })
        }
    }
</script>

<style scoped>

</style>