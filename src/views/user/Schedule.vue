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
                    <v-layout align-center justify-center >
                        <v-flex shrink>
                            <v-parallax height="250" src="https://images.pexels.com/photos/1567069/pexels-photo-1567069.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260">
                            <v-row align="center" justify="center" >
                                <v-col class="text-center" cols="12">
                                <p class="display-1 font-weight-black mb-4">Journey Towards Wedding</p>
                                <h1 class="display-1 font-weight-black">06/06/2016</h1>
                                </v-col>
                            </v-row>
                            </v-parallax>
                            <v-timeline dense>
                                <v-timeline-item
                                v-for="(year, i) in years"
                                :key="i"
                                :color="year.color"
                                small
                                >
                                <v-card class="elevation-2" color="grey lighten-3">
                                    <v-card-title class="headline">Lorem ipsum</v-card-title>
                                    <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
                                </v-card>
                                </v-timeline-item>
                            </v-timeline>
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
        years: [
        {
          color: 'cyan',
          year: '1960',
        },
        {
          color: 'green',
          year: '1970',
        },
        {
          color: 'pink',
          year: '1980',
        },
        {
          color: 'amber',
          year: '1990',
        },
        {
          color: 'orange',
          year: '2000',
        },
      ],
        })
    }
    
</script>

<style lang="scss" scoped>

</style>