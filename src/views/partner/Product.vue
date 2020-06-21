<template>
    <div id="app">
        <v-app id="inspire">
            <v-navigation-drawer v-model="drawer" app clipped color="red darken-4" dark>
                <v-list dense>
                    <v-list-item to="/Partner/Dashboard">
                    <v-list-item-action >
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dadshboard</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                    <v-list-item to="/Partner/Product">
                    <v-list-item-action >
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Product</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                    <v-list-item to="/User/Schedule">
                    <v-list-item-action>
                        <v-icon>mdi-bulletin-board</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Schedule</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item >
                    <v-list-item to="/User/ProfileSetting">
                    <v-list-item-action>
                        <v-icon>mdi-account-circle</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Profile Settings</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                    <v-list-item to="/User/Policies">
                    <v-list-item-action>
                        <v-icon>mdi-sign-text</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Privacy & Terms</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-app-bar app clipped-left color="black" dark>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title>MerryGo</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-badge :content="messages" :value="messages" color="red darken-4"  overlap >
                    <v-icon>mdi-email</v-icon>
                </v-badge>
            </v-app-bar>
            <v-content>
                <v-container fluid fill-height >
                    <v-layout align-center justify-center >
                        <v-flex>
                          <h2><center>Product Management</center></h2><br>
                          <center><v-btn class="mx-2" color="green darken-3" dark to="/Product/WedVenue">Add New Product</v-btn></center><br>
                          <v-row class="fill-height" align="center" justify="center" >
                            <v-col v-for="(partner, i) in partners" :key="i" cols="8" md="2" align="center" justify="center" class="mx-2">
                              <v-hover>
                                <template v-slot:default="{ hover }">
                                  <v-card class="mx-auto" min-width="235" max-height="400" elevation="12" color="black" dark>
                                    <v-img class="white--text align-end" height="220px" :src="`${partner.src}`"></v-img>
                                    <v-card-text style="position: relative;">
                                      <div class="font-weight-bold white--text subtitle">{{ partner.productName }}</div>
                                      <v-card-actions>
                                        <v-rating v-model="partner.productRating" background-color="orange lighten-3" dense color="orange" class="rating" small readonly></v-rating>
                                        <p class="font-weight-black pl-2 mt-0 mb-0">({{ partner.productReview }} reviews)</p>
                                      </v-card-actions>
                                    </v-card-text>
                                    <v-fade-transition>
                                      <v-overlay v-if="hover" absolute color="black" >
                                        <v-btn class="mb-2" color="yellow darken-4" to="/Product/WedVenue">Update</v-btn><br>
                                        <v-btn color="red darken-4" to="/Product/WedVenue">Remove</v-btn>
                                      </v-overlay>
                                    </v-fade-transition>
                                  </v-card>
                                </template>
                              </v-hover>
                            </v-col>
                          </v-row>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>

    export default {
        data: () => ({
           partners: 
    [
      {
        productName: "Baju Aku Putih",
        productRating: 5,
        productReview: 90,
        src: 'https://images.pexels.com/photos/1721944/pexels-photo-1721944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        productName: "Baju Kau Putih",
        productRating: 4.5,
        productReview: 123,
        src: 'https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
    ],
        drawer: null,
        messages: 2,
        show: false,
        })
    }
    
</script>

<style lang="scss" scoped>

</style>