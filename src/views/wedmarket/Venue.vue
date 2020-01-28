<template>
    <v-app id="inspire">
        <div class="checklist">
            <v-card class="overflow-hidden" >
                <v-app-bar fixed color="black" dark hide-on-scroll>
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
                <h1 class="pt-12 mt-10">All Wedding Venue</h1>
                
                <v-container>
                  <v-row no-gutters>
                        <v-col cols="12" sm="2" >
                          <v-row no-gutters>
                           <p class="font-weight-bold mt-3 mb-0">Filters</p>
                           <v-spacer></v-spacer>
                           <v-btn class="mx-2 mt-0 mb-2 mr-3" fab dark small color="red darken-4">
                              <v-icon dark v-on:click="step = !step">mdi-format-list-bulleted-square</v-icon>
                            </v-btn>
                           
                          </v-row>
                          <v-divider class="mb-3"></v-divider>
                          <v-window v-model="step">
                            <v-window-item :value='true'>
                              <v-expansion-panels class="pr-2">
                                <v-expansion-panel>
                                  <v-expansion-panel-header >
                                    <template v-slot:default="{ open }">
                                      <v-row no-gutters>
                                        <v-col cols="4">Location</v-col>
                                        <v-col cols="8" class="text--secondary" >
                                          <v-fade-transition leave-absolute>
                                            <span v-if="open" key="0" >
                                              Prefer location wedding
                                            </span>
                                            <span v-else key="1" > {{ trip.name }} </span>
                                          </v-fade-transition>
                                        </v-col>
                                      </v-row>
                                    </template>
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    <v-text-field v-model="trip.name" placeholder="Shah Alam" ></v-text-field>
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel>
                                  <v-expansion-panel-header >
                                    <template v-slot:default="{ open }">
                                      <v-row no-gutters>
                                        <v-col cols="4">Rating</v-col>
                                        <v-col cols="8" class="text--secondary" >
                                          <v-fade-transition leave-absolute>
                                            <span v-if="open" key="0" >
                                              Star
                                            </span>
                                            <span v-else key="1" > {{ rating }} star</span>
                                          </v-fade-transition>
                                        </v-col>
                                      </v-row>
                                    </template>
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    <v-rating v-model="rating" background-color="orange lighten-3" color="orange" ></v-rating>
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel>
                                  <v-expansion-panel-header >
                                    <template v-slot:default="{ open }">
                                      <v-row no-gutters>
                                        <v-col cols="4">Price</v-col>
                                        <v-col cols="8" class="text--secondary" >
                                          <v-fade-transition leave-absolute>
                                            <span v-if="open" key="0" >
                                              Price Check
                                            </span>
                                            <span v-else key="1" > RM {{ value3[0] }} - RM{{ value3[1] }}</span>
                                          </v-fade-transition>
                                        </v-col>
                                      </v-row>
                                    </template>
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content class="mt-3 mb-0">
                                    <v-range-slider class="mt-6 mb-0" color="red darken-4" v-model="value3" thumb-label="always" :min='1000' :max='10000' ></v-range-slider>
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel>
                                  <v-expansion-panel-header >
                                    <template v-slot:default="{ open }">
                                      <v-row no-gutters>
                                        <v-col cols="4">Package</v-col>
                                        <v-col cols="8" class="text--secondary" >
                                          <v-fade-transition leave-absolute>
                                            <span v-if="open" key="0" >
                                              Package Availability
                                            </span>
                                            <span v-else key="1" > {{ pack_radios || 'All' }}</span>
                                          </v-fade-transition>
                                        </v-col>
                                      </v-row>
                                    </template>
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content class="mt-3 mb-0">
                                    <v-radio-group v-model="pack_radios" :mandatory="false">
                                      <v-radio label="All" value="All"></v-radio>
                                      <v-radio label="Included" value="Included"></v-radio>
                                      <v-radio label="Excluded" value="Excluded"></v-radio>
                                    </v-radio-group>
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                                 <v-expansion-panel>
                                  <v-expansion-panel-header >
                                    <template v-slot:default="{ open }">
                                      <v-row no-gutters>
                                        <v-col cols="4">Pax</v-col>
                                        <v-col cols="8" class="text--secondary" >
                                          <v-fade-transition leave-absolute>
                                            <span v-if="open" key="0" >
                                              Pax Availability
                                            </span>
                                            <span v-else key="1" > {{ pax_selection }}</span>
                                          </v-fade-transition>
                                        </v-col>
                                      </v-row>
                                    </template>
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content class="mt-3 mb-0">
                                    <v-select v-model="pax_selection" :items="pax_items" label="Pax" outlined ></v-select>
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel>
                                  <v-expansion-panel-header >
                                    <template v-slot:default="{ open }">
                                      <v-row no-gutters>
                                        <v-col cols="4">Car Park</v-col>
                                        <v-col cols="8" class="text--secondary" >
                                          <v-fade-transition leave-absolute>
                                            <span v-if="open" key="0" >
                                              Parking Availability
                                            </span>
                                            <span v-else key="1" > {{ park_radios || 'All' }}</span>
                                          </v-fade-transition>
                                        </v-col>
                                      </v-row>
                                    </template>
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content class="mt-3 mb-0">
                                    <v-radio-group v-model="park_radios" :mandatory="false">
                                      <v-radio label="All" value="All"></v-radio>
                                      <v-radio label="Available" value="Available"></v-radio>
                                      <v-radio label="Not Available" value="Not Available"></v-radio>
                                    </v-radio-group>
                                  </v-expansion-panel-content>
                                </v-expansion-panel>

                                
                              </v-expansion-panels>
      
                            </v-window-item>
                            <v-window-item :value='false'>
                            </v-window-item>
                          </v-window>
                        </v-col>
                        <v-divider vertical class="mb-3"></v-divider>
                        <v-col cols="12" sm="9">
                          <p class="font-weight-bold mt-3 mb-3">Venue(s)</p>
                          <v-divider class="mt-2 mb-4"></v-divider>
                          <v-row no-gutters>
                            <v-col cols="12" sm="4">
                          <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised >
                            <v-hover v-slot:default="{ hover }">
                                <v-img class="white--text align-end" height="200px" src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                                    <v-expand-transition>
                                        <div v-if="hover" class="d-flex transition-fast-in-fast-out red darken-4 v-card--reveal display-3 white--text" style="height: 100%;">
                                        RM 10,000
                                        </div>
                                    </v-expand-transition>
                                </v-img>
                            </v-hover>
                                <v-card-text class="pt-6" style="position: relative;">
                                <v-btn absolute color="orange" class="white--text" fab large right top >
                                    <v-icon>mdi-magnify</v-icon>
                                </v-btn>
                                <div class="font-weight-light grey--text title">NSR Dewan Wangsa Maju</div>
                                <v-card-actions>
                                        <v-rating v-model="venue_rating" background-color="orange lighten-3" dense color="orange" class="rating" small readonly></v-rating>
                                        <p class="font-weight-black pl-2 pt-1">({{ venue_review }} reviews)</p>
                                        
                                    </v-card-actions>
                                    <div class="subtitle-2 black--text">500 Pax • Welcome Board • Open Car Park </div>
                                        <div class="subtitle-3 black--text">Owned by NSR Sdn.Bhd</div>
                                </v-card-text>
                            </v-card>
                            </v-col>
                            <v-col cols="12" sm="4">
                          <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised >
                            <v-hover v-slot:default="{ hover }">
                                <v-img class="white--text align-end" height="200px" src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                                    <v-expand-transition>
                                        <div v-if="hover" class="d-flex transition-fast-in-fast-out red darken-4 v-card--reveal display-3 white--text" style="height: 100%;">
                                        RM 10,000
                                        </div>
                                    </v-expand-transition>
                                </v-img>
                            </v-hover>
                                <v-card-text class="pt-6" style="position: relative;">
                                <v-btn absolute color="orange" class="white--text" fab large right top >
                                    <v-icon>mdi-magnify</v-icon>
                                </v-btn>
                                <div class="font-weight-light grey--text title">NSR Dewan Wangsa Maju</div>
                                <v-card-actions>
                                        <v-rating v-model="venue_rating" background-color="orange lighten-3" dense color="orange" class="rating" small readonly></v-rating>
                                        <p class="font-weight-black pl-2 pt-1">({{ venue_review }} reviews)</p>
                                        
                                    </v-card-actions>
                                    <div class="subtitle-2 black--text">500 Pax • Welcome Board • Open Car Park </div>
                                        <div class="subtitle-3 black--text">Owned by NSR Sdn.Bhd</div>
                                </v-card-text>
                            </v-card>
                            </v-col>
                            <v-col cols="12" sm="4">
                          <v-card class="mx-auto" max-width="380" color="grey lighten-2" raised >
                            <v-hover v-slot:default="{ hover }">
                                <v-img class="white--text align-end" height="200px" src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                                    <v-expand-transition>
                                        <div v-if="hover" class="d-flex transition-fast-in-fast-out red darken-4 v-card--reveal display-3 white--text" style="height: 100%;">
                                        RM 10,000
                                        </div>
                                    </v-expand-transition>
                                </v-img>
                            </v-hover>
                                <v-card-text class="pt-6" style="position: relative;">
                                <v-btn absolute color="orange" class="white--text" fab large right top >
                                    <v-icon>mdi-magnify</v-icon>
                                </v-btn>
                                <div class="font-weight-light grey--text title">NSR Dewan Wangsa Maju</div>
                                <v-card-actions>
                                        <v-rating v-model="venue_rating" background-color="orange lighten-3" dense color="orange" class="rating" small readonly></v-rating>
                                        <p class="font-weight-black pl-2 pt-1">({{ venue_review }} reviews)</p>
                                        
                                    </v-card-actions>
                                    <div class="subtitle-2 black--text">500 Pax • Welcome Board • Open Car Park </div>
                                        <div class="subtitle-3 black--text">Owned by NSR Sdn.Bhd</div>
                                </v-card-text>
                            </v-card>
                            </v-col>
                            
                          </v-row>
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
        venue_review: 25,
        venue_rating: 4,
        rating: 4,
        step: true,
        value1:  1000 ,
        value2:  10000 ,
        value3:  [1000, 10000],
        date: null,
        trip: {
        name: '',
        location: null,
        start: null,
        end: null,
        },
        pack_radios: 'All',
        pax_items: ['500', '800', '1000', '5000'],
        pax_selection: '500',
        park_radios: 'All',

      }
    },
}
</script>

<style lang="scss" scoped>

a {  text-decoration: none;}

.font-weight-bold{
  padding-left:3vh;
}

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

.font-weight-bold{
  padding-left:0vh;
}

.abc{
  padding-bottom: 60px
}
  }
</style>
