<template>
    <div id="app">
        <v-app id="inspire">
            <v-navigation-drawer v-model="drawer" app clipped color="red darken-4" dark>
                <v-list dense>
                    <v-list-item to="/User/Dashboard">
                    <v-list-item-action >
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
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
                    <v-layout >
                        <v-flex>
                            <v-row>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card color="red lighten-4">
                                        <v-list-item>
                                            <v-list-item-avatar><v-icon color="black">mdi-ring</v-icon></v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="subtitle font-weight-bold black--text">Wedding Countdown</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-parallax height="140" src="https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260">
                                            <v-row align="center" justify="center" >
                                                <v-col class="text-center" cols="12">
                                                    <p class="display-1 font-weight-black mb-0">123</p>
                                                </v-col>
                                            </v-row>
                                        </v-parallax>
                                        <v-card-text>
                                        123 Days to go!
                                        </v-card-text>
                                        <v-divider></v-divider>
                                        <v-card-actions>
                                            <v-btn color="red darken-4" text>Update Wedding Date</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card color="red lighten-4">
                                        <v-list-item>
                                            <v-list-item-avatar><v-icon color="black">mdi-calendar-edit</v-icon></v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="subtitle font-weight-bold black--text">Booking Status</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-parallax height="140" src="https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260">
                                            <v-row align="center" justify="center" >
                                                <v-col class="text-center" cols="12">
                                                    <p class="display-1 font-weight-black mb-0">5</p>
                                                </v-col>
                                            </v-row>
                                        </v-parallax>
                                        <v-card-text>
                                        You currently have 5/12 Booking Completed
                                        </v-card-text>
                                        <v-divider></v-divider>
                                        <v-card-actions>
                                            <v-btn color="red darken-4" text>Check Booking Status</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card color="red lighten-4">
                                        <v-list-item>
                                            <v-list-item-avatar><v-icon color="black">mdi-ferry</v-icon></v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="subtitle font-weight-bold black--text">Planner List</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-parallax height="140" src="https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260">
                                            <v-row align="center" justify="center" >
                                                <v-col class="text-center" cols="12">
                                                    <p class="display-1 font-weight-black mb-0">1</p>
                                                </v-col>
                                            </v-row>
                                        </v-parallax>
                                        <v-card-text>
                                        You currently have 1 active planner list 
                                        </v-card-text>
                                        <v-divider></v-divider>
                                        <v-card-actions>
                                            <v-btn color="red darken-4" text>Check Planner List</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                
                            </v-row>
                            <v-divider></v-divider>
                            <p class="display-1 font-weight-bold mt-5">Booking Status</p>
                            <v-stepper dark class="mb-5" v-model="e1" v-for="(booking, b) in bookings" :key="b">
                                <v-stepper-header>
                                    <v-stepper-step :complete="booking.status > 1" step="1" color="red darken-4">Payment Confirmation</v-stepper-step>
                                    <v-divider></v-divider>
                                    <v-stepper-step :complete="booking.status > 2" step="2" color="red darken-4">Set Meet Up</v-stepper-step>
                                    <v-divider></v-divider>
                                    <v-stepper-step step="3" color="red darken-4">Wrap up</v-stepper-step>
                                </v-stepper-header>
                                <v-stepper-items>
                                    <div v-if="booking.status === 1">
                                        <v-stepper-content >
                                            <p class="subtitle font-weight-bold mb-0 white--text">Payment Confirmation</p>
                                            <v-row>
                                                <v-col cols="12" sm="4" md="12">
                                                    <v-card class="mb-6" color="red lighten-4" height="200px">
                                                        <div class="d-flex flex-no-wrap justify-space-between">
                                                            <div>
                                                                <v-card-title class="headline black--text">{{booking.name}}</v-card-title>
                                                            </div>
                                                            <v-avatar class="ma-3" size="180" tile >
                                                                    <v-img :src="booking.src"></v-img>
                                                                </v-avatar>
                                                        </div>
                                                    </v-card>
                                                </v-col>
                                                <v-col cols="12" sm="8" md="12">
                                                    <v-card class="mb-6" color="grey lighten-1" height="200px" ></v-card>
                                                </v-col>
                                            </v-row>
                                        </v-stepper-content>
                                    </div>
                                    <div v-else-if="booking.status === 2">
                                        <v-stepper-content step="1" class="mb-0">
                                           <p class="subtitle font-weight-bold mb-0 white--text">Set Meet Up</p>
                                            <v-row>
                                                <v-col cols="12" sm="4" md="12" lg="6">
                                                    <v-card class="mb-6" color="red lighten-4" height="170px" light>
                                                        <p class="pt-1 pl-2 mb-1 pb-0 font-weight-bold title justify-center">Booking Details</p>
                                                        <div class="d-flex flex-no-wrap">
                                                            
                                                            <v-avatar class="ml-3 mt-3" size="100" tile >
                                                                <v-img :src="booking.src"></v-img>
                                                            </v-avatar>
                                                            <div>
                                                            <p class="pl-2 mb-0 pb-0 font-weight-bold body-2">Booking # 12064986</p>
                                                            <p class="pl-2 mb-0 pb-0 font-weight-bold body-2">(02 Feb 2019)</p>
                                                            <p class="pl-2 mb-0 pb-0 font-weight-bold body-2">Dewan Semarak al  ihsan kuala lumpur</p>
                                                            <div v-if="booking.meetUpStatus === 'Pending Approval'">
                                                                <p class="pl-2 mb-0 pb-0 font-weight-bold body-2">Status: To approve or propose new date</p>
                                                            </div>
                                                            <div v-else-if="booking.meetUpStatus === 'Pending Meet Up'">
                                                                <p class="pl-2 mb-0 pb-0 font-weight-bold body-2">Status: Pending {{booking.name}} to set meet up</p>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </v-card>
                                                </v-col>
                                                <v-col cols="12" sm="8" md="12" lg="6">
                                                    <v-card class="mb-6" color="white" height="150px" light >
                                                        <p class="pt-1 pl-2 mb-1 pb-0 font-weight-bold title justify-center">Booking Message</p>
                                                        <p class="pl-2 mb-0 pb-0 overline">19 Feb 2020 - 09:27	Your package has been delivered. Thank you for shopping at MerryGo!</p>
                                                    </v-card>
                                                </v-col>
                                            </v-row>

                                        </v-stepper-content>
                                    </div>
                                    <div v-else-if="booking.status === 3">
                                    <v-stepper-content step="1">
                                        <p class="subtitle font-weight-bold mb-0 white--text">Wrap-Up</p>
                                            <v-row>
                                                <v-col cols="12" sm="4" md="12" lg="6">
                                                    <v-card class="mb-6" color="red lighten-4" height="200px" >
                                                        <v-avatar class="ma-3" size="180" tile >
                                                            <v-img :src="booking.src"></v-img>
                                                        </v-avatar>
                                                    </v-card>
                                                </v-col>
                                                <v-col cols="12" sm="8" md="12" lg="6">
                                                    <v-card class="mb-6" color="grey lighten-1" height="200px" ></v-card>
                                                </v-col>
                                            </v-row>
                                    </v-stepper-content>
                                    </div>
                                </v-stepper-items>
                            </v-stepper>
                                <v-divider></v-divider>
                                <p class="display-1 font-weight-bold mt-5">Planner List</p>
                                <v-list subheader dark>
                                    <v-list-item v-for="planner in planners" :key="planner.title" @mouseover="hover = true">
                                        <v-list-item-content>
                                        <v-list-item-title v-text="planner.title"></v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item-icon>
                                        <v-btn class="mr-4" fab dark small color="red">
                                            <v-icon color="white">mdi-delete-empty</v-icon>
                                        </v-btn>
                                        <v-btn fab small color="blue darken-2">
                                            <v-icon color="white">mdi-transfer-right</v-icon>
                                        </v-btn>
                                        </v-list-item-icon>
                                    </v-list-item>
                                    </v-list>
                                    <br>
                                <v-divider></v-divider>
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
        drawer: null,
        messages: 2,
        show: false,
        hover: false,
        e1: 1,
        bookings: [
            {
                name: 'asdasd',
                src: 'https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                status: 2,
                meetUpStatus: 'Pending Approval'
            },
            {
                name: 'asdas2d',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                status: 2,
                meetUpStatus: 'Pending Meet Up'
            }
        ],
        headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Actions', value: 'action', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
     planners: [
        { title: 'Jason Oner'},
        { title: 'Ranee Carlson'},
        { title: 'Cindy Baker',},
        { title: 'Ali Connors',},
      ],
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
      ]
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
  },
    }
    
</script>

<style lang="scss" scoped>

</style>