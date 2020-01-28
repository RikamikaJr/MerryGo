<template>
    <v-app id="inspire">
        <div class="checklist">
          
            <v-card class="overflow-hidden" >
                <v-app-bar fixed color="rgb(255, 0, 0, 0)" dark hide-on-scroll>
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
            <div class="wedding-planner">
                <v-parallax height="300" src="https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                  <v-row align="center" justify="center" >
                    <v-col class="text-center" cols="12">
                      <h1 class="display-1 font-weight-black mb-4">Our Partners</h1>
                    </v-col>
                  </v-row>
                </v-parallax>
                <v-container class="grey lighten-5">
                  <v-sheet class="mx-auto" elevation="12" max-width="1360" color="red lighten-4">
                    <v-slide-group v-model="model" class="pa-4" mandatory show-arrows center-active >
                      <v-slide-item v-slot:default="{ active, toggle }" >
                        <v-card :color="active ? 'red darken-4' : 'black'" class="ma-4" height="170" width="170" @click="toggle" >
                          <template v-if="active">
                            <v-img src="https://images.pexels.com/photos/265920/pexels-photo-265920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <v-icon >mdi-map-marker </v-icon>
                            </v-btn>
                            </v-card-actions>
                          </template>
                          <template v-else>
                            <v-img src="https://images.pexels.com/photos/265920/pexels-photo-265920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.9), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <p class="font-weight-black mt-3">Venue</p>
                            </v-btn>
                            </v-card-actions>
                          </template>
                        </v-card>
                      </v-slide-item>
                      <v-slide-item v-slot:default="{ active, toggle }" >
                        <v-card :color="active ? 'red darken-4' : 'black'" class="ma-4" height="170" width="170" @click="toggle" >
                          <template v-if="active">
                            <v-img src="https://images.pexels.com/photos/3014860/pexels-photo-3014860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <v-icon >mdi-sofa</v-icon>
                            </v-btn>
                            </v-card-actions>
                          </template>
                          <template v-else>
                            <v-img src="https://images.pexels.com/photos/3014860/pexels-photo-3014860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500" gradient="to bottom, rgba(0,0,0,.9), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <p class="font-weight-black mt-3">Pelamin Design</p>
                            </v-btn>
                            </v-card-actions>
                          </template>
                        </v-card>
                      </v-slide-item>
                      <v-slide-item v-slot:default="{ active, toggle }" >
                        <v-card :color="active ? 'red darken-4' : 'black'" class="ma-4" height="170" width="170" @click="toggle" >
                          <template v-if="active">
                            <v-img src="https://images.pexels.com/photos/3014764/pexels-photo-3014764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <v-icon >mdi-face-profile-woman</v-icon>
                            </v-btn>
                            </v-card-actions>
                          </template>
                          <template v-else>
                            <v-img src="https://images.pexels.com/photos/3014764/pexels-photo-3014764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.9), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <p class="font-weight-black mt-3">Bride's Attire</p>
                            </v-btn>
                            </v-card-actions>
                          </template>
                        </v-card>
                      </v-slide-item>
                      <v-slide-item v-slot:default="{ active, toggle }" >
                        <v-card :color="active ? 'red darken-4' : 'black'" class="ma-4" height="170" width="170" @click="toggle" >
                          <template v-if="active">
                            <v-img src="https://images.pexels.com/photos/804714/pexels-photo-804714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <v-icon >mdi-face-profile</v-icon>
                            </v-btn>
                            </v-card-actions>
                          </template>
                          <template v-else>
                            <v-img src="https://images.pexels.com/photos/804714/pexels-photo-804714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.9), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <p class="font-weight-black mt-3">Groom's Attire</p>
                            </v-btn>
                            </v-card-actions>
                          </template>
                        </v-card>
                      </v-slide-item>
                      <v-slide-item v-slot:default="{ active, toggle }" >
                        <v-card :color="active ? 'red darken-4' : 'black'" class="ma-4" height="170" width="170" @click="toggle" >
                          <template v-if="active">
                            <v-img src="https://images.pexels.com/photos/1884582/pexels-photo-1884582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <v-icon >mdi-hair-dryer</v-icon>
                            </v-btn>
                            </v-card-actions>
                          </template>
                          <template v-else>
                            <v-img src="https://images.pexels.com/photos/1884582/pexels-photo-1884582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.9), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <p class="font-weight-black mt-3">Make-up Artist</p>
                            </v-btn>
                            </v-card-actions>
                          </template>
                        </v-card>
                      </v-slide-item>
                      <v-slide-item v-slot:default="{ active, toggle }" >
                        <v-card :color="active ? 'red darken-4' : 'black'" class="ma-4" height="170" width="170" @click="toggle" >
                          <template v-if="active">
                            <v-img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <v-icon >mdi-camera</v-icon>
                            </v-btn>
                            </v-card-actions>
                          </template>
                          <template v-else>
                            <v-img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.9), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <p class="font-weight-black mt-3">Photographer</p>
                            </v-btn>
                            </v-card-actions>
                          </template>
                        </v-card>
                      </v-slide-item>
                      <v-slide-item v-slot:default="{ active, toggle }" >
                        <v-card :color="active ? 'red darken-4' : 'black'" class="ma-4" height="170" width="170" @click="toggle" >
                          <template v-if="active">
                            <v-img src="https://images.pexels.com/photos/1436141/pexels-photo-1436141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <v-icon >mdi-microphone-variant</v-icon>
                            </v-btn>
                            </v-card-actions>
                          </template>
                          <template v-else>
                            <v-img src="https://images.pexels.com/photos/1436141/pexels-photo-1436141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.9), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <p class="font-weight-black mt-3">Entertainment</p>
                            </v-btn>
                            </v-card-actions>
                          </template>
                        </v-card>
                      </v-slide-item>
                      <v-slide-item v-slot:default="{ active, toggle }" >
                        <v-card :color="active ? 'red darken-4' : 'black'" class="ma-4" height="170" width="170" @click="toggle" >
                          <template v-if="active">
                            <v-img src="https://images.pexels.com/photos/5929/food-salad-dinner-eating.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <v-icon >mdi-chef-hat</v-icon>
                            </v-btn>
                            </v-card-actions>
                          </template>
                          <template v-else>
                            <v-img src="https://images.pexels.com/photos/5929/food-salad-dinner-eating.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.9), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <p class="font-weight-black mt-3">Catering</p>
                            </v-btn>
                            </v-card-actions>
                          </template>
                        </v-card>
                      </v-slide-item>
                      <v-slide-item v-slot:default="{ active, toggle }" >
                        <v-card :color="active ? 'red darken-4' : 'black'" class="ma-4" height="170" width="170" @click="toggle" >
                          <template v-if="active">
                            <v-img src="https://images.pexels.com/photos/2966345/pexels-photo-2966345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <v-icon >mdi-cowboy</v-icon>
                            </v-btn>
                            </v-card-actions>
                          </template>
                          <template v-else>
                            <v-img src="https://images.pexels.com/photos/2966345/pexels-photo-2966345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.9), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <p class="font-weight-black mt-3">Photobooth</p>
                            </v-btn>
                            </v-card-actions>
                          </template>
                        </v-card>
                      </v-slide-item>
                      <v-slide-item v-slot:default="{ active, toggle }" >
                        <v-card :color="active ? 'red darken-4' : 'black'" class="ma-4" height="170" width="170" @click="toggle" >
                          <template v-if="active">
                            <v-img src="https://images.pexels.com/photos/1805599/pexels-photo-1805599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <v-icon >mdi-book-open-page-variant</v-icon>
                            </v-btn>
                            </v-card-actions>
                          </template>
                          <template v-else>
                            <v-img src="https://images.pexels.com/photos/1805599/pexels-photo-1805599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.9), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <p class="font-weight-black mt-3">Invitation Card</p>
                            </v-btn>
                            </v-card-actions>
                          </template>
                        </v-card>
                      </v-slide-item>
                      <v-slide-item v-slot:default="{ active, toggle }" >
                        <v-card :color="active ? 'red darken-4' : 'black'" class="ma-4" height="170" width="170" @click="toggle" >
                          <template v-if="active">
                            <v-img src="https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <v-icon >mdi-gift-outline</v-icon>
                            </v-btn>
                            </v-card-actions>
                          </template>
                          <template v-else>
                            <v-img src="https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.9), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <p class="font-weight-black mt-3">Door Gift</p>
                            </v-btn>
                            </v-card-actions>
                          </template>
                        </v-card>
                      </v-slide-item>
                      <v-slide-item v-slot:default="{ active, toggle }" >
                        <v-card :color="active ? 'red darken-4' : 'black'" class="ma-4" height="170" width="170" @click="toggle" >
                          <template v-if="active">
                            <v-img src="https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <v-icon >mdi-cake-layered</v-icon>
                            </v-btn>
                            </v-card-actions>
                          </template>
                          <template v-else>
                            <v-img src="https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" gradient="to bottom, rgba(0,0,0,.9), rgba(0,0,0,.5)" max-height="130" class="white--text align-end" > </v-img>
                            <v-card-actions class="justify-center pt-0 mt-0">
                            <v-btn dark icon>
                              <p class="font-weight-black mt-3">Wedding Cake</p>
                            </v-btn>
                            </v-card-actions>
                          </template>
                        </v-card>
                      </v-slide-item>
                    </v-slide-group>
                    <v-expand-transition>
                      <v-sheet elevation="12" v-if="model == 0" class="mb-5 pb-5 pt-5"  color="white" height="auto" tile >
                        <v-row class="fill-height" align="center" justify="center" >
                            <v-col v-for="(partner, i) in partners" :key="i" cols="12" md="2" align="center" justify="center" class="mx-2">
                              <v-hover>
                                <template v-slot:default="{ hover }">
                                  <v-card class="mx-2" max-width="350" max-height="190" elevation="12" color="red darken-4" dark>
                                    <v-img :src="`${partner.src}`" max-height="140" min-height="140"></v-img>
                                    <v-card-text class="pt-1 pb-3">
                                      <p class="font-weight-black">{{partner.name}}</p>
                                    </v-card-text>
                                   
                                    <v-fade-transition>
                                      <v-overlay v-if="hover" absolute color="black" >
                                        <v-btn color="red darken-4" to="/Partner/Profile">See more info</v-btn>
                                      </v-overlay>
                                    </v-fade-transition>
                                  </v-card>
                                </template>
                              </v-hover>
                            </v-col>
                          </v-row>
                      </v-sheet>
                    </v-expand-transition>
                  </v-sheet>
                </v-container>
            </div>
        </div>
    </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  
    data: () => ({
    model: null,
    partners: 
    [
      {
        type:"venue",
        name:"A.sdn.bhd",
        src: 'https://images.pexels.com/photos/2467277/pexels-photo-2467277.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        type:"venue",
        name:"B.sdn.bhd",
        src: 'https://images.pexels.com/photos/3332510/pexels-photo-3332510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },{
        type:"venue",
        name:"C.sdn.bhd",
        src: 'https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        type:"venue",
        name:"Dewan One Piece Roger dekat Kiuala Lumpuir",
        src: 'https://images.pexels.com/photos/1337382/pexels-photo-1337382.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        type:"venue",
        name:"abc.sdn.bhd",
        src: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        type:"venue",
        name:"abc.sdn.bhd",
        src: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        type:"venue",
        name:"abc.sdn.bhdasd",
        src: 'https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      }
    ],
      
    name: "app-tag"
  }),
}
</script>

<style lang="scss" scoped>
h1{
  margin-top: 1%;
  text-align: center;
}
h2{
  text-align: center;
  margin-bottom: -2%;
  padding-top: 2%
}
</style>
