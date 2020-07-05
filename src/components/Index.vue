<template>
    <div id="wrap">
			<div id="top_content">
				<div id="header">
					<div id="rightheader">
						<p>
							2009/11/20
							<br />
                            <el-button type="success" @click="loginout" size="small">安全退出</el-button>
						</p>
					</div>
					<div id="topheader">
						<h1 id="title">
							<a href="#">main</a>
						</h1>
					</div>
					<div id="navigation">
					</div>
				</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
						欢迎{{user_msg}}访问超市员工管理系统
					</h1>
					<table class="table">
						<tr class="table_header">
							<td>ID</td>
							<td>Name</td>
							<td>Photo</td>
							<td>Salary</td>
							<td>Age</td>
							<td>Operation</td>
						</tr>
						<tr v-for="(emp,index) in emp_list" :key="emp.id" :class="index%2==0 ? 'row1':'row2' ">
							<td>{{emp.id}}</td>
							<td>{{emp.emp_name}}</td>
							<td>
								<img :src="emp.img" style="height: 60px;">
							</td>
							<td>{{emp.salary}}</td>
							<td>{{emp.age_name}}</td>
							<td>
								<a href="javascript:;" @click="delemp(emp.id)">删除员工</a>
<!--                                &nbsp;<a href="javascript:;" @click="editepm(emp.id)">修改员工</a>-->
                                <router-link :to=" '/update/'+ emp.id" >修改员工</router-link>
							</td>
						</tr>
					</table>
					<p>
<!--						<input type="button" class="button" value="Add Employee"/>-->
                        <el-button type="success"><router-link to="/addemp">添加员工</router-link></el-button>
					</p>
				</div>
			</div>
			<div id="footer">
				<div id="footer_bg">
				ABC@126.com
				</div>
			</div>
		</div>
</template>

<script>
    export default {
        name: "Index",
        data(){
            return{
                "user_msg":"",
                "emp_list":[],
            }
        },
        methods:{
            //获取员工所有信息
            findall(){
                this.$axios.get("http://127.0.0.1:8000/api/emp/").then(res=>{
                    this.emp_list=res.data.results;
                    console.log(this.emp_list)
                }).catch(error=>{
                    this.$message.error("查询出错了");
                })
            },
            //删除员工
            delemp(id){
                this.$axios({
                    url:"http://127.0.0.1:8000/api/emp/"+id,
                    method:"delete"
                }).then(res=>{
                    console.log(id);
                    console.log(res.data);
                    this.$message("删除成功");
                    this.$router.push("/index");
                }).catch(error=>{
                    console.log("error");
                    this.$message.error("删除失败");
                })
            },
            loginout(){
                localStorage.clear();
                this.$router.push("/login")
            }
        },
        created() {
            let username=localStorage.getItem("name");
            if(username){
                this.user_msg=username;
            }else {
                this.$message.error("你还没有进行登录，请进行登录");
                this.$router.push("/login")
            }
            this.findall();
        }
    }
</script>

<style scoped>

</style>
