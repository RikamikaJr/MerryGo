<template>
    <div id="app">
        <v-app id="inspire">
            <v-navigation-drawer v-model="drawer" app clipped color="red darken-4" dark>
                <v-list dense>
                    <v-list-item to="/LoginUser">
                    <v-list-item-action >
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                    <v-list-item-action>
                        <v-icon>mdi-bulletin-board</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Schedule</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                    <v-list-item-action>
                        <v-icon>mdi-account-circle</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Edit Profile</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                    <v-list-item-action>
                        <v-icon>mdi-settings</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Settings</v-list-item-title>
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
                            <v-tooltip right>
                                <template v-slot:activator="{ on }">
                                    <v-btn icon large target="_blank" v-on="on" >
                                        <v-icon large>mdi-code-tags</v-icon>
                                    </v-btn>
                                </template>
                                <span>Source</span>
                            </v-tooltip>
                            <v-tooltip right>
                                <template v-slot:activator="{ on }">
                                    <v-btn icon large href="https://codepen.io/johnjleider/pen/bXNzZL" target="_blank" v-on="on" >
                                        <v-icon large>mdi-codepen</v-icon>
                                    </v-btn>
                                </template>
                                <span>Codepen</span>
                            </v-tooltip>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
            <v-footer app>
                <span>&copy; 2019</span>
            </v-footer>
        </v-app>
    </div>
</template>

<script>

    export default {
        data: () => ({
        drawer: null,
        messages: 2,
        show: false,
        })
    }
    
</script>

<style lang="scss" scoped>

</style>