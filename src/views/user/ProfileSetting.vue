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
                            <v-card height="300px" width="800px" class="mb-0" tile >
                                <v-img max-height="150px" src="https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" >
                                </v-img>
                                <v-row  class="mt-10">
                                    <v-col align="center" >
                                <p class="mt-10 font-weight-black title">{{username}}</p>
                                </v-col>
                                </v-row>
                            </v-card>
                                <v-col align="center" class="mb-0 pb-0">
                                    <v-avatar class="profilepic" color="grey" size="120"  >
                                        <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                                    </v-avatar>
                                </v-col>
                            <v-card color="grey darken-4" dark width="800px" class="elevation-3 mb-5" :loading="isUpdating" >
                                <template v-slot:progress>
                                    <v-progress-linear
                                        absolute
                                        color="red darken-4"
                                        height="4"
                                        indeterminate
                                    ></v-progress-linear>
                                    </template>
                                <v-col align="center" >
                                    <p class="title font-weight-black"> Personal Contact Info </p>
                                    <v-form>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-text-field prepend-icon="mdi-rename-box" class="mb-0" v-model="username" label="Username" color="red darken-4" outlined ></v-text-field>
                                                    <v-divider class="mb-6 mt-0"></v-divider>
                                                    <v-text-field prepend-icon="mdi-at" class="mb-0" v-model="email" label="Email" outlined color="red darken-4"></v-text-field>
                                                    <v-switch class="mt-0" color="red darken-4" label="Hidden from Other User" ></v-switch>
                                                    <v-divider class="mb-6 mt-0"></v-divider>
                                                    <v-text-field prepend-icon="mdi-cellphone" class="mb-0" v-model="phone" label="Phone No" outlined color="red darken-4"></v-text-field>
                                                    <v-switch class="mt-0" color="red darken-4" label="Hidden from Other User" ></v-switch>
                                                    <v-divider class="mb-6 mt-0"></v-divider>
                                                    <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px" color="red darken-4" >
                                                        <template v-slot:activator="{ on }">
                                                            <v-text-field v-model="date" label="Wedding Date" prepend-icon="mdi-calendar-star" outlined v-on="on" color="red darken-4" ></v-text-field>
                                                        </template>
                                                        <v-date-picker v-model="date" scrollable color="red darken-4">
                                                        <v-spacer></v-spacer>
                                                        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                                        <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                                                        </v-date-picker>
                                                    </v-dialog>
                                                    <v-switch class="mt-0" color="red darken-4" label="Hidden from Other User" ></v-switch>
                                                    <v-divider class="mb-6 mt-0"></v-divider>
                                                    <v-btn :disabled="autoUpdate" :loading="isUpdating" color="red darken-4" dark depressed @click="isUpdating = true" >
                                                        <v-icon left>mdi-update</v-icon>
                                                        Update Now
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-form>
                                </v-col>
                                
                            </v-card>
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
        username: 'John',
        email:'john78@gmail.com.my',
        phone:'+60123456789',
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        autoUpdate: false,
        isUpdating: false,
        }),
    watch: {
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      },
    },
    }
    
    
</script>

<style lang="scss" scoped>
.profilepic{
    margin-top: -350px
}
</style>