<template>
    <div>
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
    export default {
        name: "DeptDialog",
        props:{

        },
        data(){
            return{
                form:{ },
                dynaTitle:''
            }
        },methods:{
            // submit(){
            //     editDepartments(
            //         /* qs.stringify 将对象 转为字符串 */
            //         {
            //             name: this.form.name,
            //             sn: this.form.sn,
            //             id: this.form.id,
            //             token:localStorage.getItem('token'),
            //         }
            //     )
            // },

        }
    }
</script>

<style scoped>

</style>