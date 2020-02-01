<template>
  <div id="app">
    <v-app id="inspire">
      <v-card class="overflow-hidden" >
        <v-app-bar fixed color="rgb(255, 0, 0, 0)" dark hide-on-scroll >
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
      <v-content>
        <v-parallax dark height="300" src="https://images.pexels.com/photos/7477/night-trees-stars.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" >
          <v-row align="center" justify="center" >
            <v-col class="text-center" cols="12">
              <v-avatar color="red" size="162" class="mt-12">
                <img
                    src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="John"
                  >
              </v-avatar>
            </v-col>
          </v-row>
        </v-parallax>
        <div class="profilebox">
              <v-card class="mx-auto text-center" max-width="344" outlined :elevation="15">
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">Company Name</v-list-item-title>
                    <div class="overline mb-4">OVERLINE</div>
                    <div class="overline mb-4">Greyhound divisely hello coldly fonwderfullyGreyhound divisely hello coldly fonwderfully</div>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
              <v-card class="mx-auto mt-5 mb-10" max-width="1600" :elevation="15">
                <v-tabs background-color="red lighten-4" color="red darken-4" centered icons-and-text fixed-tabs >
                  <v-tab>About Us
                    <v-icon>mdi-information-outline</v-icon>
                  </v-tab>
                  <v-tab>Product & Services
                    <v-icon>mdi-storefront</v-icon>
                  </v-tab>
                  <v-tab>Event
                    <v-icon>mdi-calendar-heart</v-icon>
                  </v-tab>

                  <v-tab-item >
                    <v-container fluid>
                      <v-card class="mx-auto center">
                        <v-container>
                          <v-row align="center" justify="center" >
                              <v-img max-height="300" max-width="300" src="https://cdn.vuetifyjs.com/images/cards/store.jpg" class="center" ></v-img>
                          </v-row>
                          <v-row align="center" justify="center" >
                             <v-col cols="auto" class="text-center pl-0" > {{aboutus}} </v-col>
                          </v-row>
                          <v-divider></v-divider>
                           <v-row align="center" justify="center">
                            <h2 class="mt-2">Social Media</h2>
                           </v-row>
                          <v-container fluid>
                            <v-row align="center" justify="center">
                              <v-col cols="10" md="2" >
                                <v-card class="mx-auto" dark color="brown darken-3" max-width="344" shaped :elevation="3" >
                                  <a href="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg">
                                    <v-list-item two-line>
                                      <v-list-item-avatar>
                                        <v-icon>mdi-instagram</v-icon>
                                      </v-list-item-avatar>
                                      <v-list-item-content>
                                        <v-list-item-title>Instagram</v-list-item-title>
                                      </v-list-item-content>
                                      </v-list-item>
                                  </a>
                                </v-card>
                              </v-col>
                              <v-col cols="10" md="2" >
                                <v-card class="mx-auto" dark color="blue" max-width="344" shaped :elevation="3" >
                                  <a href="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg">
                                    <v-list-item two-line>
                                      <v-list-item-avatar>
                                        <v-icon>mdi-twitter</v-icon>
                                      </v-list-item-avatar>
                                      <v-list-item-content>
                                        <v-list-item-title>Twitter</v-list-item-title>
                                      </v-list-item-content>
                                      </v-list-item>
                                  </a>
                                </v-card>
                              </v-col>
                              <v-col cols="10" md="2" >
                                <v-card class="mx-auto" dark color="blue darken-4" max-width="344" shaped :elevation="3" >
                                  <a href="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg">
                                    <v-list-item two-line>
                                      <v-list-item-avatar>
                                        <v-icon>mdi-facebook</v-icon>
                                      </v-list-item-avatar>
                                      <v-list-item-content>
                                        <v-list-item-title>Facebook</v-list-item-title>
                                      </v-list-item-content>
                                      </v-list-item>
                                  </a>
                                </v-card>
                              </v-col>
                              <v-col cols="10" md="2" >
                                <v-card class="mx-auto" dark color="red darken-2" max-width="344" shaped :elevation="3" >
                                  <a href="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg">
                                    <v-list-item two-line>
                                      <v-list-item-avatar>
                                        <v-icon>mdi-youtube</v-icon>
                                      </v-list-item-avatar>
                                      <v-list-item-content>
                                        <v-list-item-title>Youtube</v-list-item-title>
                                      </v-list-item-content>
                                      </v-list-item>
                                  </a>
                                </v-card>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-container>
                      </v-card>
                    </v-container>
                  </v-tab-item>
                  <v-tab-item >
                    <v-container fluid>
                      
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
                                        <v-btn color="red darken-4" to="/Partner/Profile">See more info</v-btn>
                                      </v-overlay>
                                    </v-fade-transition>
                                  </v-card>
                                </template>
                              </v-hover>
                            </v-col>
                          </v-row>
                    </v-container>
                  </v-tab-item>
                  <v-tab-item >
                    <v-container fluid>
                      <v-card
                        class="mx-auto"
                        outlined
                        elevation="12"
                      >
                      
                        <v-list-item three-line>
                          
                          <v-list-item-avatar
                            size="80">
                            <img
                    src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="John"
                  >
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-card-subtitle>
                              Posted on 02/02/2020
                            </v-card-subtitle>
                            <v-card-text>
                              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                            </v-card-text>
                          </v-list-item-content>

                          
                        </v-list-item>

                        <v-card-actions class="justify-center">
                          <v-tooltip left>
                            <template v-slot:activator="{ on }">
                              <v-btn color="red darken-4" class="ma-2 white--text" dark v-on="on" @click="snackbar = true">
                                Like
                                <v-icon right dark>mdi-hand-heart</v-icon>
                              </v-btn>
                            </template>
                            <span>530 Likes</span>
                          </v-tooltip>
                          <v-snackbar v-model="snackbar" :timeout="timeout" right color="red">
                            {{ text }}
                            
                            <v-btn color="white" text @click="snackbar = false" >
                              Close
                            </v-btn>
                          </v-snackbar>
                          
                          <v-dialog v-model="dialog" max-width="600px">
                            <template v-slot:activator="{ on }">
                              <v-btn color="red darken-4" class="ma-2 white--text" dark v-on="on">
                                Comment
                                <v-icon right dark>mdi-comment-multiple</v-icon>
                              </v-btn>
                            </template>
                            <v-card>
                              <v-img
                              class="white--text align-end"
                              height="150px"
                              src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            ><v-card-title class="justify-center">Comment Section</v-card-title>
                            </v-img>
                            
                            <div id="comment_app" class="container" >
                                
                                <div>
                                  <div class="row" >
                                    <v-col cols="12">
                                      <form v-on:submit.prevent='submit' >
                                      <v-textarea color="red darken-4" label="Add a Comment" v-model='input' class="form-control mb-0" placeholder="Your comment"></v-textarea>
                                      <v-card-actions class="justify-center">
                                      <v-btn color="red darken-4 mt-0" class="ma-2 white--text" dark @click="submit" >Create
                                        <v-icon right dark>mdi-hand-heart</v-icon>
                                      </v-btn>
                                      </v-card-actions>
                                    </form>
                                    </v-col>
                                    <!-- form -->
                                    <div>
                                      <div>
                                        <div v-if='total_comments == 0' >
                                          <div class="ml-5" >
                                            Be the first to comment
                                          </div>
                                        </div>
                                        <div class="list-group" >
                                          <div class="list-group-item" v-for="(comment,index) in comments" :key="index">
                                            <v-row no-gutters>
                                                <v-col cols="3">
                                                  <v-avatar color="red" size="50" class="ml-4">
                                                    <img
                                                        src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                                        alt="John"
                                                      >
                                                  </v-avatar>
                                                </v-col>
                                                <v-col cols="9">
                                                  <v-row no-gutters class="ml-1">
                                                  {{comment.comment}}
                                                  </v-row>
                                                  <v-row no-gutters class="mt-2">
                                                    <v-btn text icon color="red darken-4" v-on:click='like(index)'>
                                                      <v-icon>mdi-hand-heart</v-icon>
                                                    </v-btn>
                                                    <div class="mt-2"> {{comment.total_likes}} </div>
                                                  </v-row>
                                                  <v-row no-gutters>
                                                    <div class="list-group" >
                                                      <div class="list-group-item">
                                                        <form v-on:submit.prevent='addReply(index)' >
                                                          <v-text-field v-model='reply' color="red darken-4" label="Reply" prepend-icon="mdi-comment-multiple" class="form-control ml-1" ></v-text-field>
                                                        </form>
                                                      </div>
                                                      <div class="list-group-item" v-for="(reply,index) in comment.replies" :key="index">
                                                          <strong><v-icon>mdi-comment-multiple</v-icon></strong> {{reply.reply}}
                                                      </div>
                                                    </div>
                                                  </v-row>
                                                </v-col>
                                              
                                            </v-row>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </v-card>
                          </v-dialog>
                        </v-card-actions>
                      </v-card>
                    </v-container>
                  </v-tab-item>
                </v-tabs>
              </v-card>
        </div>
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
      {
        productName: "Baju Kami Putih",
        productRating: 4.2,
        productReview: 90,
        src: 'https://images.pexels.com/photos/836866/pexels-photo-836866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        productName: "Baju Kita Putih",
        productRating: 2,
        productReview: 32,
        src: 'https://images.pexels.com/photos/157860/wedding-dresses-fashion-character-bride-157860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        productName: "Baju Awak Putih",
        productRating: 3,
        productReview: 21,
        src: 'https://images.pexels.com/photos/1006329/pexels-photo-1006329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        productName: "Baju Kau Putih",
        productRating: 4,
        productReview: 90,
        src: 'https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        productName: "Baju Kau Putih",
        productRating: 4,
        productReview: 90,
        src: 'https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      }
    ],
      aboutus:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      
    model: null,
    snackbar: false,
      text: 'Thank you',
      timeout: 2000,
      dialog: false,
      input: "",
		reply: "",
		total_comments: 0,
		comments: [],
      
  }),
  methods: {
		getReplySingleton: function (reply) {
			return function () {
				return {
					reply
				};
			}
		},
		getSingleTon: function (comment) {
			return function () {
				return {
					comment,total_likes: 0,replies: []
				}
			}
		},
		submit() {
			var comment = this.getSingleTon(this.input);
			var old = this.comments;
			var newc = [...old,comment()];
			this.comments = newc;
			this.input = "";
			this.total_comments  = this.comments.length;
		},
		like(index) {
			this.comments[index].total_likes = this.comments[index].total_likes + 1;
		},
		addReply(index) {
			var s = this.getReplySingleton(this.reply);
			var replies = this.comments[index].replies;
			var n = [...replies,s()];
			this.comments[index].replies = n;
			this.reply = "";
		}
	}
  }
</script>

<style lang="scss" scoped>
.profilebox{
    margin-top: -20px;

}
a { text-decoration: none; }

</style>