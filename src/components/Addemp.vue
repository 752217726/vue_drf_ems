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
						add Emp info:
					</h1>
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									name:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="name" v-model="emp_name" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									photo:
								</td>
								<td valign="middle" align="left">
									<input type="file" name="photo" ref="photo" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									salary:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="salary" v-model="salary" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									age:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="age" v-model="age" />
								</td>
							</tr>
						</table>
						<p>
							<input type="submit" class="button" value="添加员工" @click="addemp" />
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
        name: "Addemp",
        data(){
            return{
                "emp_name":"",
                "img":"",
                "salary":"",
                "age":"",
            }
        },
        methods:{
            addemp(){
                //获取文件信息
                console.log(this.$refs.photo.files[0]);
                //ajax上传文件请求方式b必须是post multipart/formData
                //而ajax上传文件需要介于住formData
                let formDate=new FormData();
                formDate.append("emp_name",this.emp_name);
                formDate.append("img",this.$refs.photo.files[0]);
                formDate.append("salary",this.salary);
                formDate.append("age",this.age);
                this.$axios({
                    url:"http://127.0.0.1:8000/api/emp/",
                    method:"post",
                    data:formDate,
                    headers:{
                        'content-type':'multipart/form-Date'
                    }
                }).then(res=>{
                    console.log(res.data);
                    if(res.data["message"]){
                        this.$message("添加成功");
                        this.$router.push('/index');
                    }
                }).catch(error=>{
                    this.$message.error("添加失败")
                })
            }
        }
    }
</script>

<style scoped>

</style>
