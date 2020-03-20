<template>
  <v-app id="inspire">
    <div class="home">
     <img alt="Vue logo" src="../assets/home.png">
      <v-card class="overflow-hidden" >
        <v-app-bar fixed color="rgb(255, 0, 0, 0)" dark hide-on-scroll >
          <v-toolbar-title>MerryGo</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on" to="/loginuser">
                <v-icon color="grey lighten-1">mdi-nature-people</v-icon>
              </v-btn>
            </template>
            <span>Wedding Planner</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on" to="/loginuser">
                <v-icon color="grey lighten-1">mdi-login</v-icon>
              </v-btn>
            </template>
            <span>Login/Signup</span>
          </v-tooltip>
        </v-app-bar>
      </v-card>
      <div class="complete">
        <h1>All for one</h1>
        <h3>Explore our completed wedding plans which cover all packages for a variety of budgets</h3>
        <v-container class="grey lighten-5">
            <v-row no-gutters>
              <v-col v-for="n in 3" :key="n" cols="12" sm="4">
                <v-card class="mx-auto" max-width="380" >
                  <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" >
                    <v-card-title>Top 10 Australian beaches</v-card-title>
                  </v-img>
                  <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
                  <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>
                    <div>Whitsunday Island, Whitsunday Islands</div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="orange" text > Share </v-btn>
                    <v-btn color="orange" text > Explore </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <v-layout justify-center>
              <v-btn rounded color="red darken-4" dark class="justify-center"> See More Completed Plans </v-btn>
            </v-layout>
        </v-container>
      </div>
      <br>
      <v-divider></v-divider>
      <div class="complete">
        <h1>Community Picks</h1>
        <h3>People's Best Choice</h3>
        <v-container class="grey lighten-5">
            <v-row no-gutters>
              <v-col v-for="n in 3" :key="n" cols="12" sm="4" >
                <v-card class="mx-auto" max-width="400" >
                  <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" >
                    <v-card-title>Top 10 Australian beaches</v-card-title>
                  </v-img>
                  <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
                  <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>
                    <div>Whitsunday Island, Whitsunday Islands</div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="orange" text > Share </v-btn>
                    <v-btn color="orange" text > Explore </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <v-layout justify-center>
              <v-btn rounded color="red darken-4" dark class="abc">See More Completed Plans </v-btn>
            </v-layout>
        </v-container>
      </div>
    </div>
</v-app>
</template>

<script>
// @ is an alias to /src

export default {
  
}
</script>

<style lang="scss" scoped>

img{
  height: 1000px;
  width: 100%;
}

h1{
  margin-top: 2%;
  text-align: center;
}

h3{
  margin-top: 1%;
  text-align: center;
}

.mx-auto
{
  margin:5%;
  margin-top:2%;
}

@media screen and (max-width: 759px){


  img{
    display:block; /*remove inline-block spaces*/
    max-height: 300px;
  
}

.abc{
  padding-bottom: 60px
}
  }
</style>
