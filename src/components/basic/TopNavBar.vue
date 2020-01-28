<template>
    <div class="top-nav">
        <v-app id="inspire">
            <v-card class="overflow-hidden">
                <v-app-bar fixed color="red darken-4" dark inverted-scroll>
                    <v-toolbar-title>MerryGo</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on">
                                <v-icon color="grey lighten-1">mdi-nature-people</v-icon>
                            </v-btn>
                        </template>
                        <span>Wedding Planner</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn to="/loginuser" icon v-on="on">
                                <v-icon color="grey lighten-1">mdi-login</v-icon>
                            </v-btn>
                        </template>
                        <span>Login/Signup</span>
                    </v-tooltip>
                </v-app-bar>
            </v-card>
        </v-app>
    </div>
</template>

<script>
    export default {
        
    }
</script>


<style lang="scss" scoped>
    .v-application--wrap{
        min-height: 0vh !important;;
    }
</style>