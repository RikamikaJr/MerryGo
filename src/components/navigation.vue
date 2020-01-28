<template>
<div class="nav">
  <v-app id="inspire">
    <v-card class="overflow-hidden">
      <v-app-bar
        fixed
        color="red darken-4"
        dark
        inverted-scroll
      >
  
        <v-toolbar-title>MerryGo</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-tooltip v-model="show" bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon color="grey lighten-1">mdi-nature-people</v-icon>
              </v-btn>
            </template>
            <span>Wedding Planner</span>
          </v-tooltip>
        

        <v-tooltip v-model="show" bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon color="grey lighten-1">mdi-login</v-icon>
              </v-btn>
            </template>
            <span>Login/Signup</span>
          </v-tooltip>
      </v-app-bar>
      
    </v-card>
    <v-bottom-navigation
      :value="activeBtn"
      grow
      fixed
      dark
      color="red"
      background-color="black"
    >
      <v-btn to="/home">
        <span>Planner</span>
        <v-icon>mdi-shopping-search</v-icon>
      </v-btn>

      <v-btn >
        <span>Promotions</span>
        <v-icon>mdi-sale</v-icon>
      </v-btn>

      <v-btn >
        <span>Partners</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      

      <v-btn to="/about">
        <span>About Us</span>
        <v-icon>mdi-information-variant</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</div>
</template>


<script>
  export default {
    data () {
      return {
        activeBtn: 1,
      }
    },
  }
</script>

<style lang="scss" scoped>
    
</style>
