<template>
    <div class="Login">
        <nav-bar :navMenuItems="loginMenu"></nav-bar>

        <login-diag ref="loginDiag"></login-diag>
        
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar"
import FooterBar from "@/components/layout/FooterBar"
import LoginDiag from "@/components/layout/LoginDiag"
import Global from "@/components/layout/Global"

export default {
  components: {
      NavBar,
      FooterBar,
      LoginDiag
  },
  data () {
      return {
        loginMenu: Global.getPageMenu("Login"),
        cLocation:"",    
      }
  },
  mounted:function(){
      this.GetLocation();
  },
  methods: {
      GetLocation:function(){
        var L = this.$route.params.Location;
        this.cLocation = L;
        console.log(this.cLocation)
        this.$refs.loginDiag.Getlocation(this.cLocation);
      }
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .Login{
        background-color: #fff;
    }
</style>
