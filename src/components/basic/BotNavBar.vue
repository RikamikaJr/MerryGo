<template>
    <div class="bot-nav">
        <v-app id="inspire">
            <v-bottom-navigation class="check" :value="activeBtn" grow fixed dark color="red" background-color="black">
                <v-btn to="/home">
                    <span>Home</span>
                    <v-icon>mdi-home-heart</v-icon>
                </v-btn>
                <v-btn to="/Checklist">
                    <span>Planner</span>
                    <v-icon>mdi-shopping-search</v-icon>
                </v-btn>
                <v-btn to="/Partner">
                    <span>Partners</span>
                    <v-icon>mdi-handshake</v-icon>
                </v-btn>
                <v-btn to="/about">
                    <span>About Us</span>
                    <v-icon>mdi-information-variant</v-icon>
                </v-btn>
            </v-bottom-navigation>
        </v-app>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                activeBtn: '',
            }
        },
    }
</script>

<style lang="scss" scoped>
    .bot-nav{
        padding-top: 5vh;
    }
</style>