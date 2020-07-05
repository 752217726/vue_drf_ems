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
						注册
					</h1>
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									用户名:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="username" v-model="username" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									真实姓名:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="name" v-model="real_name" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									密码:
								</td>
								<td valign="middle" align="left">
									<input type="password" class="inputgri" name="pwd" v-model="password" />
								</td>
							</tr>
                            <tr>
								<td valign="middle" align="right">
									确认密码:
								</td>
								<td valign="middle" align="left">
									<input type="password" class="inputgri" name="pwd" v-model="re_pwd" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									性别:
								</td>
								<td valign="middle" align="left">
									男
									<input type="radio" class="inputgri" name="sex" value="m" checked="checked" @click="gender=0"/>
									女
									<input type="radio" class="inputgri" name="sex" value="f" @click="gender=1"/>
								</td>
							</tr>

						</table>
						<p>
                            <el-button type="success" size="medium" @click="user_register">注册</el-button>
<!--							<input type="submit" class="button" value="注册" />-->
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
        name: "Register",
        data() {
            return{
                username:"",
                password:"",
                real_name:"",
                gender:0,
                re_pwd:"",
            }
        },
        methods:{
            //向后端提交注册请求
            user_register(){
                this.$axios({
                    url:"http://127.0.0.1:8000/api/user/",
                    method:"post",
                    data:{
                        username:this.username,
                        password:this.password,
                        real_name:this.real_name,
                        gender:this.gender,
                    }
                }).then(res=>{
                    console.log(res.data['message']);
                    //如果创建成功，跳转到登录界面
                    if(res.data['message']){
                        this.$message('恭喜你，注册成功了');
                        this.$router.push('/login');
                    }
                }).catch(error=>{
                    console.log(error);
                    this.$message.error('用户注册信息有误')
                })
            }
        }
    }
</script>

<style scoped>

</style>
