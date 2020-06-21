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
                    <v-layout >
                        <v-flex>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                        <apexchart type="line" height="400" :options="chartOptions2" :series="series2"></apexchart>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card color="red lighten-4">
                                        <v-list-item>
                                            <v-list-item-avatar><v-icon color="black">mdi-cash-multiple</v-icon></v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="subtitle font-weight-bold black--text">Total Revenue</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-parallax height="140" src="https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260">
                                            <v-row align="center" justify="center" >
                                                <v-col class="text-center" cols="12">
                                                    <p class="display-1 font-weight-black mb-0">RM 5000</p>
                                                </v-col>
                                            </v-row>
                                        </v-parallax>
                                        <v-card-text>
                                        You currently have RM 5000 of total revenue since 02/02/2020
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card color="red lighten-4">
                                        <v-list-item>
                                            <v-list-item-avatar><v-icon color="black">mdi-calendar-heart</v-icon></v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="subtitle font-weight-bold black--text">Total Booking</v-list-item-title>
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
                                        You currently have 5 booking for Year 2020
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card color="red lighten-4">
                                        <v-list-item>
                                            <v-list-item-avatar><v-icon color="black">mdi-cursor-default-click</v-icon></v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="subtitle font-weight-bold black--text">Visits</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-parallax height="140" src="https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260">
                                            <v-row align="center" justify="center" >
                                                <v-col class="text-center" cols="12">
                                                    <p class="display-1 font-weight-black mb-0">200000</p>
                                                </v-col>
                                            </v-row>
                                        </v-parallax>
                                        <v-card-text>
                                        You currently have 200000 visits
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card color="red lighten-4">
                                        <v-list-item>
                                            <v-list-item-avatar><v-icon color="black">mdi-cursor-default-click</v-icon></v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="subtitle font-weight-bold black--text">Recent Reviews</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                         <v-list three-line>
                                            <template v-for="(item, index) in items">

                                                <v-divider
                                                v-if="item.divider"
                                                :key="index"
                                                :inset="item.inset"
                                                ></v-divider>

                                                <v-list-item
                                                v-else
                                                :key="item.title"
                                                >
                                                <v-list-item-avatar>
                                                    <v-img :src="item.avatar"></v-img>
                                                </v-list-item-avatar>

                                                <v-list-item-content>
                                                    <v-list-item-title v-html="item.title"></v-list-item-title>
                                                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                                                </v-list-item-content>
                                                </v-list-item>
                                            </template>
                                            </v-list>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <div id="chart">
                                        <apexchart type="radialBar" height="350" :options="chartOptions3" :series="series3"></apexchart>
                                    </div>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-card color="red lighten-4">
                                        <v-list-item>
                                            <v-list-item-avatar><v-icon color="black">mdi-cursor-default-click</v-icon></v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="subtitle font-weight-bold black--text">Recent Reviews</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                         <v-list three-line>
                                            <template v-for="(item, index) in items">

                                                <v-divider
                                                v-if="item.divider"
                                                :key="index"
                                                :inset="item.inset"
                                                ></v-divider>

                                                <v-list-item
                                                v-else
                                                :key="item.title"
                                                >
                                                <v-list-item-avatar>
                                                    <v-img :src="item.avatar"></v-img>
                                                </v-list-item-avatar>

                                                <v-list-item-content>
                                                    <v-list-item-title v-html="item.title"></v-list-item-title>
                                                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                                                </v-list-item-content>
                                                </v-list-item>
                                            </template>
                                            </v-list>
                                    </v-card>
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
        items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
      series3: [44, 55, 67, 83],
          chartOptions3: {
            chart: {
              height: 350,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                dataLabels: {
                  name: {
                    fontSize: '22px',
                  },
                  value: {
                    fontSize: '16px',
                  },
                  total: {
                    show: true,
                    label: 'Total',
                    formatter: function (w) {
                      w = 249;
                      return w
                    }
                  }
                }
              }
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
          },
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
      series: [{
            data: [44, 55, 41, 64, 22]
          }, {
            data: [53, 32, 33, 52, 13]
          }],
          chartOptions: {
            chart: {
                toolbar: {
                show: false
                },
              type: 'bar',
              height: 500
            },
            plotOptions: {
              bar: {
                horizontal: true,
                dataLabels: {
                  position: 'top',
                },
              }
            },
            dataLabels: {
              enabled: true,
              offsetX: -6,
              style: {
                fontSize: '12px',
                colors: ['#fff']
              }
            },
            stroke: {
              show: true,
              width: 1,
              colors: ['#fff']
            },
            xaxis: {
              categories: [2001, 2002, 2003, 2004, 2005],
            },
          },
          series2: [{
            name: 'Likes',
            data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5]
          }],
          chartOptions2: {
            chart: {
                toolbar: {
                show: false
                },
              height: 500,
              type: 'line',
            },
            stroke: {
              width: 7,
              curve: 'smooth'
            },
            xaxis: {
              type: 'yeartime',
              categories: ['01/01/2020', '01/02/2020', '01/03/2020', '01/04/2020', '01/05/2020', '01/06/2020', '01/07/2020', '01/08/2020', '01/09/2020', '01/10/2020', '01/11/2020', '01/12/2020'],
            },
            title: {
              text: 'Total Sales',
              align: 'left',
              style: {
                fontSize: "16px",
                color: '#000'
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'dark',
                gradientToColors: [ '#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
              },
            },
            markers: {
              size: 4,
              colors: ["#FFA41B"],
              strokeColors: "#fff",
              strokeWidth: 2,
              hover: {
                size: 7,
              }
            },
            yaxis: {
              min: 0,
              max: 40,
            }
          },
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