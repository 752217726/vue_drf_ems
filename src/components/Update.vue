<template>
    <div id="wrap">
			<div id="top_content">
					<div id="header">
						<div id="rightheader">
							<p>
								2009/11/20
								<br />
							</p>
						</div>
						<div id="topheader">
							<h1 id="title">
								<a href="#">Main</a>
							</h1>
						</div>
						<div id="navigation">
						</div>
					</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
						update Emp info:{{$route.params.id}}
					</h1>
					<form action="emplist.html" method="post">
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									id:
								</td>
								<td valign="middle" align="left">
									{{$route.params.id}}
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									name:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="name" v-model="emp_name"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									photo:
								</td>
								<td valign="middle" align="left">
									<input type="file" name="photo" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									salary:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="salary" v-model="salary"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									age:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="age" v-model="age"/>
								</td>
							</tr>
						</table>
						<p>
<!--							<input type="submit" class="button" value="Confirm" />-->
                            <el-button type="success" @click="update">提交</el-button>
						</p>
					</form>
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
        name: "Update",
        data(){
            return{
                emp_id:"",
                // emp:{},
                emp_name:"",
                salary:"",
                age:"",
                img:"",
            }
        },
        methods:{
            get_emp() {
                let emp_id=this.$route.params.id;
                this.$axios.get("http://127.0.0.1:8000/api/emp/"+`${emp_id}`).then(res=>{
                    let emp=res.data.results;
                    console.log(this.emp);
                    this.emp_name=emp.emp_name;
                    this.salary=emp.salary;
                    this.age=emp.age;
                }).catch(error=>{
                    this.$message.error('查询失败')
                })
            },
            update(){
                let formData=new FormData();
                formData.append("emp_name",this.emp_name);
                formData.append("salary",this.salary);
                formData.append("age",this.age);
                formDate.append("img",this.$refs.photo.files[0]);
                console.log(this.emp_name);
                this.$axios({
                    url:"http://127.0.0.1:8000/api/emp/",
                    method:"patch",
                    data:formData,
                    headers:{
                        'content-type':'multipart/form-Date'
                    }
               }).then(res=>{
                    console.log(res.data);
                    if(res.data["message"]){
                        this.$message("修改成功");
                        this.$router.push('/index');
                    }
                }).catch(error=>{
                    this.$message.error("修改失败")
                })
            }
        },
        created() {
            this.get_emp();
        }
    }
</script>

<style scoped>

</style>
