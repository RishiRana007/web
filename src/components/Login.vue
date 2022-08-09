<template>
  <img class="logo" src="../assets/metro.png">
  <h1>Login</h1>
  <div class="register">
<!--    <input type="text" v-model="Name" placeholder ="Entre Name" />-->
    <input type="text" v-model="Email" placeholder ="Entre Email" />
    <input type="Password" v-model="Password" placeholder ="Entre Password" />
    <button v-on:click="Login">Login</button>
  </div>
</template>

<script>
import axios from "axios"

export default {

  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data()
  {
    return{
      name:"",
      email:"",
      password:"",
    }
  },
  methods:{
    async Login()
    {
      let result =  await axios.post("http://localhost:3000/users",{
        Name:"",
        Email:this.Email,
        Password:this.Password
      });

      if(result.status==201){
        print("hello")
        localStorage.setItem("user-info",JSON.stringify(result.data))
        await this.$router.push({name: "Home"})
        // console.warn(result);result

      }
    }
  }
}
</script>

<style scoped>
.logo{
  width: 400px
}

.register input {
  width: 400px;
  height: 50px;
  padding-left: 30px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register button{
  width :320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}

</style>

