<template>
  <div class="loginuser">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped color="red darken-4">
        <v-list color="white" class="user">
          <v-list-item  to="/LoginUser">
            <v-list-item-action>
              <v-icon color="red darken-4">mdi-account-supervisor-circle</v-icon>
            </v-list-item-action>
            <v-list-item-title class="font-weight-black">User</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list color="transparent" class="partner">
          <v-list-item  to="/LoginPartner">
            <v-list-item-action>
              <v-icon color="white">mdi-account-tie</v-icon>
            </v-list-item-action>
            <v-list-item-title ><span class="white--text"> Partner </span></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app dark clipped-left color="black">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="mr-5 align-center">
          <span class="title">MerryGo</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-content>
        <v-img
      src="https://images.pexels.com/photos/2959190/pexels-photo-2959190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      :aspect-ratio="16/9"
      class="grey lighten-2"
      max-width="2000"
      max-height="870"
    >
        <v-container fluid fill-height>
          
          <v-layout align-center justify-center >
            <v-flex>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
              <div class="gap" />
              <v-card class="mx-auto" max-width="1000" color="rgba(255,255,255,0.7)">
                
                <v-window v-model="step">
                  
                  <v-window-item :value="1">
                    <v-row>
                      <v-col cols="12" md="8">
                        <v-card-text class="mt-8">
                          <h1 class="text-center display-2 black--text text--accent-3">Welcome to MerryGO</h1>
                          <div class="text-center mt-4">
                            <v-btn color="red darken-4" dark class="mx-2" fab outlined>
                              <v-icon >mdi-ferry</v-icon>
                            </v-btn>
                          </div>
                          <h3 class="text-center mt-8 mb-8">Be prepare to embrace the JOURNEY</h3>
                          <v-form>
                            <v-text-field label="Username" color="red darken-4" name="login" prepend-icon="mdi-account-circle" type="text"></v-text-field>
                            <v-text-field id="password" color="red darken-4" label="Password" name="password" prepend-icon="mdi-shield-lock" type="password"></v-text-field>
                            
                          </v-form>
                          <h3 class="text-center mt-3"> Forget your password?</h3>
                        </v-card-text>
                        <div class="text-center mt-3">
                          <v-btn rounded color="red darken-4" dark to="/User/Dashboard">Sign In</v-btn>
                        </div>
                      </v-col>
                      <v-col cols="12" md="4" class="red darken-4">
                        <v-card-text class="white--text mt-2">
                          <h1 class="text-center display-1">Hello, Mate!</h1>
                          <h4 class="text-center display-5 mt-2">Hop on to MerryGo and enjoy your journey</h4>
                        </v-card-text>
                        <div class="text-center" >
                          <v-btn color="white" rounded outlined="" dark @click="step++">Sign Up</v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                  <v-window-item :value="2">
                    <v-row class="fill-height">
                      <v-col cols="12" md="4" class="red darken-4">
                        <v-card-text class="white--text mt-2">
                          <h1 class="text-center display-1">Welcome back!</h1>
                          <h5 class="text-center display-5 mt-2">We're so excited to see you again!</h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn rounded outlined dark @click="step--">Sign In</v-btn>
                        </div>
                      </v-col>
                      <v-col cols="12" md="8">
                        <v-card-text class="mt-12">
                          <h1 class="text-center display-2 black--text text--accent-3">Registration</h1>
                          <div class="text-center mt-4">
                            <v-btn color="red darken-4" dark class="mx-2" fab outlined>
                              <v-icon >mdi-ferry</v-icon>
                            </v-btn>
                          </div>
                          <h4 class="text-center mt-4">Endless Journey, One Destination - MerryGO</h4>
                          <v-form>
                            <v-text-field label="Username" color="red darken-4" name="login" prepend-icon="mdi-account-circle" type="text"></v-text-field>
                            <v-text-field label="Email" color="red darken-4" name="email" prepend-icon="mdi-at" type="text"></v-text-field>
                            <v-text-field id="password" color="red darken-4" label="Password" name="password" prepend-icon="mdi-shield-lock" type="password"></v-text-field>
                            <v-text-field id="password" color="red darken-4" label="Confirmation Password" name="password" prepend-icon="mdi-shield-link-variant" type="password"></v-text-field>
                            <v-checkbox color="red darken-4" label="I have agreed to terms and conditions" required></v-checkbox>
                            <v-card-actions class="justify-center">
                              <v-btn dark color="red darken-4">Register</v-btn>
                            </v-card-actions>
                          </v-form>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-window-item>
                </v-window>
              </v-card>
            </v-col>
          </v-row>
            </v-flex>
          </v-layout>
          
        </v-container>
        </v-img>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  export default {
  data: () => ({
    drawer: null,
    step: 1
  }),
  props: {
    source: String
  }
}
</script>

<style lang="scss" scoped>
    .gap{
      padding-top: 3vh;
    }

    .user{
      margin-top: 30px; 
      margin-right: -120px;
      margin-left: 80px;
      border-radius: 25px;
    }
    .partner{
      margin-top: 20px; 
      margin-right: -120px;
      margin-left: 80px;
      border-radius: 25px;
      border: 5px solid white;
    }

    @media screen and (max-width: 759px){

    .gap{
      padding-top: 0vh;
    }
    .gap2{
      padding-top: 0vh;
    }
}
</style>