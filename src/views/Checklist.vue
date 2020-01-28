<template>
    <v-app id="inspire">
        <div class="checklist">
            <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
                <a href="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg">
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                    <v-sheet :color="colors[i]" height="100%">
                        <v-row class="fill-height" align="center" justify="center">
                        <div class="display-3">{{ slide }} Slide</div>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
                </a>
            </v-carousel>
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
                <h1>My Wedding Plan</h1>
                <v-container class="grey lighten-5">
                    <div class="text-center">
                    <v-btn class="mt-5 mb-5" color="red darken-4" dark @click.stop="dialog = true">  Check price <v-icon dark right>mdi-calculator</v-icon></v-btn>
                    </div>
                    <v-dialog v-model="dialog" max-width="320">
                    <v-card>
                        <v-card-title class="headline">Calculation</v-card-title>
                        <v-divider></v-divider>
                        <v-card-actions class="pb-0">
                            <v-card-text class="pb-0">Venue</v-card-text>
                            <v-spacer></v-spacer>
                            <v-card-text class="ml-12 pb-0">RM 10,000</v-card-text>
                        </v-card-actions>
                        <v-card-actions class="pb-0 pt-0">
                            <v-card-text>Bride's Attire</v-card-text>
                            <v-spacer></v-spacer>
                            <v-card-text class="ml-12">RM 2,000</v-card-text>
                        </v-card-actions>
                        <v-card-actions class="pb-1 pt-0">
                            <v-card-text class="pb-1 pt-0 font-weight-black">Total</v-card-text>
                            <v-spacer></v-spacer>
                            <v-card-text class=" pb-1 pt-0 ml-12 font-weight-black">RM 12,000</v-card-text>
                        </v-card-actions>

                        <v-card-actions class="justify-center">
                            <v-btn color="red darken-1" dark @click="dialog = false" > Close </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-container>
                <v-container class="grey lighten-5">
                    <v-row no-gutters>
                        <v-col cols="12" sm="3">
                            <div v-if="a">
                                <v-hover v-slot:default="{ hover }">
                            <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised >
                                <v-card-title>
                                    <v-icon large left>mdi-map-marker </v-icon>
                                    <span><b>Venue</b></span>
                                </v-card-title>
                                <v-img class="white--text align-end" height="200px" src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                                    <v-expand-transition>
                                        <div v-if="hover" class="d-flex transition-fast-in-fast-out red darken-4 v-card--reveal display-3 white--text" style="height: 100%;">
                                        RM 10,000
                                        </div>
                                    </v-expand-transition>
                                </v-img>
                                <v-card-text class="pt-6" style="position: relative;">
                                <v-btn absolute color="orange" class="white--text" fab large right top >
                                    <v-icon>mdi-cart</v-icon>
                                </v-btn>
                                <div class="font-weight-light grey--text title">NSR Dewan Wangsa Maju</div>
                                <v-card-actions>
                                        <v-rating v-model="venue_rating" background-color="orange lighten-3" dense color="orange" class="rating" small readonly></v-rating>
                                        <p class="font-weight-black pl-2 pt-1">({{ venue_review }} reviews)</p>
                                        
                                    </v-card-actions>
                                    <div class="subtitle-2 black--text">500 Pax • Welcome Board • Open Car Park </div>
                                        <div class="subtitle-3 black--text">Owned by NSR Sdn.Bhd</div>
                                </v-card-text>
                                <v-card-actions class="justify-center">
                                    <v-btn color="blue darken-2" dark>Details</v-btn>
                                    <v-btn color="red" dark v-on:click="a = !a">Remove</v-btn>
                                </v-card-actions>
                            </v-card>
                            </v-hover>
                            </div>
                            <div v-else>
                                    <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised>
                                        <v-card-title>
                                            <v-icon large left>mdi-map-marker </v-icon>
                                            <span class="pl-2"><b>Venue</b></span>
                                        </v-card-title>
                                        <v-card-subtitle class="pt-5">Choose your favorite Venue</v-card-subtitle>
                                        <v-card-actions class="justify-center">
                                            <v-btn color="blue darken-4" dark class="mb-4" to="/Market/WedVenue">Choose Venue<v-icon right dark>mdi-chevron-right</v-icon></v-btn>
                                        </v-card-actions>
                                    </v-card>
                                
                            </div>
                            
                        </v-col>
                        <v-col cols="12" sm="3">
                            <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised>
                                <v-card-title>
                                    <v-icon large left>mdi-sofa </v-icon>
                                    <span class="pl-2"><b>Pelamin Design</b></span>
                                </v-card-title>
                                <v-card-subtitle class="pt-5">Choose your favorite Pelamin Design</v-card-subtitle>
                                <v-card-actions class="justify-center">
                                    <v-btn color="blue darken-4" dark class="mb-4">Choose Pelamin Design<v-icon right dark>mdi-chevron-right</v-icon></v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                            <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised>
                                <v-card-title>
                                    <v-icon large left>mdi-face-profile-woman</v-icon>
                                    <span><b>Bride's Attire</b></span>
                                </v-card-title>
                                <v-img class="white--text align-end" height="200px" src="https://images.pexels.com/photos/1500881/pexels-photo-1500881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></v-img>
                                <v-card-text class="pt-6" style="position: relative;">
                                <div class="font-weight-light grey--text title">Wed Dress - Beauty White Dress</div>
                                <v-card-actions>
                                        <v-rating v-model="venue_rating" background-color="orange lighten-3" dense color="orange" class="rating" small readonly></v-rating>
                                        <p class="font-weight-black pl-2 pt-1">({{ venue_review }} reviews)</p>
                                        
                                    </v-card-actions>
                                    <div class="subtitle-2 black--text">Rent • Blend • Ball Gown • White </div>
                                        <div class="subtitle-3 black--text">Owned by Wed Dress</div>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="black" text>RM 2,000</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn color="black" dark>Booked</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                            <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised>
                                <v-card-title>
                                    <v-icon large left>mdi-face-profile</v-icon>
                                    <span class="pl-2"><b>Groom's Attire</b></span>
                                </v-card-title>
                                <v-card-subtitle class="pt-5">Choose your favorite Groom's Attire</v-card-subtitle>
                                <v-card-actions class="justify-center">
                                    <v-btn color="blue darken-4" dark class="mb-4">Choose Groom's Attire<v-icon right dark>mdi-chevron-right</v-icon></v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                            <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised>
                                <v-card-title>
                                    <v-icon large left>mdi-hair-dryer</v-icon>
                                    <span class="pl-2"><b>Make-up Artist</b></span>
                                </v-card-title>
                                <v-card-subtitle class="pt-5">Choose your favorite Make-up Artist</v-card-subtitle>
                                <v-card-actions class="justify-center">
                                    <v-btn color="blue darken-4" dark class="mb-4">Choose Make-up Artist<v-icon right dark>mdi-chevron-right</v-icon></v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                            <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised>
                                <v-card-title>
                                    <v-icon large left>mdi-camera</v-icon>
                                    <span class="pl-2"><b>Photographer</b></span>
                                </v-card-title>
                                <v-card-subtitle class="pt-5">Choose your favorite Photographer/Videographer</v-card-subtitle>
                                <v-card-actions class="justify-center">
                                    <v-btn color="blue darken-4" dark class="mb-4">Choose Photographer<v-icon right dark>mdi-chevron-right</v-icon></v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                            <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised>
                                <v-card-title>
                                    <v-icon large left>mdi-microphone-variant</v-icon>
                                    <span class="pl-2"><b>Entertainment</b></span>
                                </v-card-title>
                                <v-card-subtitle class="pt-5">Choose your favorite Entertainment</v-card-subtitle>
                                <v-card-actions class="justify-center">
                                    <v-btn color="blue darken-4" dark class="mb-4">Choose Entertainment<v-icon right dark>mdi-chevron-right</v-icon></v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                            <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised>
                                <v-card-title>
                                    <v-icon large left>mdi-chef-hat</v-icon>
                                    <span class="pl-2"><b>Catering</b></span>
                                </v-card-title>
                                <v-card-subtitle class="pt-5">Choose your favorite Catering</v-card-subtitle>
                                <v-card-actions class="justify-center">
                                    <v-btn color="blue darken-4" dark class="mb-4">Choose Catering<v-icon right dark>mdi-chevron-right</v-icon></v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                            <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised>
                                <v-card-title>
                                    <v-icon large left>mdi-cowboy</v-icon>
                                    <span class="pl-2"><b>Photobooth</b></span>
                                </v-card-title>
                                <v-card-subtitle class="pt-5">Choose your favorite Photobooth</v-card-subtitle>
                                <v-card-actions class="justify-center">
                                    <v-btn color="blue darken-4" dark class="mb-4">Choose Photobooth<v-icon right dark>mdi-chevron-right</v-icon></v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                            <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised>
                                <v-card-title>
                                    <v-icon large left>mdi-book-open-page-variant</v-icon>
                                    <span class="pl-2"><b>Invitation Card</b></span>
                                </v-card-title>
                                <v-card-subtitle class="pt-5">Choose your favorite Invitation Card</v-card-subtitle>
                                <v-card-actions class="justify-center">
                                    <v-btn color="blue darken-4" dark class="mb-4">Choose Invitation Card<v-icon right dark>mdi-chevron-right</v-icon></v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                            <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised>
                                <v-card-title>
                                    <v-icon large left>mdi-gift-outline</v-icon>
                                    <span class="pl-2"><b>Door Gift</b></span>
                                </v-card-title>
                                <v-card-subtitle class="pt-5">Choose your favorite Door Gift</v-card-subtitle>
                                <v-card-actions class="justify-center">
                                    <v-btn color="blue darken-4" dark class="mb-4">Choose Door Gift<v-icon right dark>mdi-chevron-right</v-icon></v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                            <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised>
                                <v-card-title>
                                    <v-icon large left>mdi-cake-layered</v-icon>
                                    <span class="pl-2"><b>Wedding Cake</b></span>
                                </v-card-title>
                                <v-card-subtitle class="pt-5">Choose your favorite Wedding Cake</v-card-subtitle>
                                <v-card-actions class="justify-center">
                                    <v-btn color="blue darken-4" dark class="mb-4">Choose Wedding Cake<v-icon right dark>mdi-chevron-right</v-icon></v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        </v-row>
                </v-container>
            </div>
        </div>
    </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  data () {
      return {
          a: true,
          b: false,
        dialog: false,
        venue_review: 25,
        venue_rating: 4,
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
}
</script>

<style lang="scss" scoped>

a {  text-decoration: none;}

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}


.rating{
    margin-left: -1vh;
    margin-top: -2vh;
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
    height: 280px;
    margin:0 -5.885%;
    width:105.777%;
  
}

.abc{
  padding-bottom: 60px
}
  }
</style>
