<template>
    <v-app id="inspire">
        <div class="checklist">
            <v-card color="black" class="overflow-hidden" >
            </v-card>
        </div>
        <div class="detail">
            <v-container fill-height>
                <v-row no-gutters>
                    <v-col cols="12" sm="1">
                    </v-col>
                    <v-window v-model="step">
                        <v-window-item :value="1">
                            <v-col cols="12" lg="12" sm="12">
                                <v-row no-gutters>
                                <figure class="zoom" v-on:mousemove="zoomProduct" style="background-image: url(https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)">
                                    <img src="https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                </figure>
                                </v-row>
                            </v-col>
                        </v-window-item>
                        <v-window-item :value="2">
                            <v-col cols="12" sm="12">
                                <v-row no-gutters>
                                <figure class="zoom" v-on:mousemove="zoomProduct" style="background-image: url(https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)">
                                    <img src="https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                </figure>
                                </v-row>
                            </v-col>
                        </v-window-item>
                    </v-window>
                    <v-col cols="12" lg="1" md="4" sm="12" class="mt-1 ml-3 pl-3">
                        <v-row no-gutters>
                            <v-col cols="2" lg="8" md="4" sm="2" class="mx-0">
                                <div class="my-2 pl-3">
                                <v-hover v-slot:default="{ hover }" >
                                    <v-card :elevation="hover ? 16 : 2" >
                                        <v-img @click="step++" src="https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></v-img>
                                    </v-card>
                                </v-hover>
                            </div>
                            </v-col>
                            <v-col cols="2" lg="8" md="4" sm="2" class="mx-0">
                                <div class="my-2 pl-3">
                                <v-hover v-slot:default="{ hover }" >
                                    <v-card :elevation="hover ? 16 : 2" >
                                        <v-img @click="step++" src="https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></v-img>
                                    </v-card>
                                </v-hover>
                            </div>
                            </v-col>
                            <v-col cols="2" lg="8" md="4" sm="2" class="mx-0">
                                <div class="my-2 pl-3">
                                <v-hover v-slot:default="{ hover }" >
                                    <v-card :elevation="hover ? 16 : 2" >
                                        <v-img @click="step++" src="https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></v-img>
                                    </v-card>
                                </v-hover>
                            </div>
                            </v-col>
                            <v-col cols="2" lg="8" md="4" sm="2" class="mx-0">
                                <div class="my-2 pl-3">
                                <v-hover v-slot:default="{ hover }" >
                                    <v-card :elevation="hover ? 16 : 2" >
                                        <v-img @click="step++" src="https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></v-img>
                                    </v-card>
                                </v-hover>
                            </div>
                            </v-col>
                            <v-col cols="2" lg="8" md="4" sm="2" class="mx-0">
                                <div class="my-2 pl-3">
                                <v-hover v-slot:default="{ hover }" >
                                    <v-card :elevation="hover ? 16 : 2" >
                                        <v-img @click="step++" src="https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></v-img>
                                    </v-card>
                                </v-hover>
                            </div>
                            </v-col>
                        </v-row>
                    </v-col>
                    
                    <v-col cols="12" sm="5">
                        <div class="my-2 pr-3">
                            <p class="text-center display-2 font-weight-bold">
                                Baju Kau Putih
                            </p>
                            <p class="text-center display-1 font-italic font-weight-light">
                                Rent • RM 160.00
                            </p>
                            <v-divider></v-divider>
                            
                            <div class="mt-5">
                                <p class="headline font-weight-bold mb-2">Product Details</p>
                                <p class="text-justify font-weight-light">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,</p>
                            </div>
                            <div class="mt-1">
                                <p class="headline font-weight-bold mb-2">Material</p>
                                <p class="text-justify font-weight-light">Ball Gown</p>
                            </div>
                            <div class="mt-1">
                                <p class="headline font-weight-bold mb-2">Style</p>
                                <p class="text-justify font-weight-light">White</p>
                            </div>
                            <v-divider></v-divider>
                            <v-layout justify-center>
                            <v-btn large color="red darken-4" dark class="mt-3" min-width="250">
                                <v-icon left>mdi-ferry</v-icon>
                                Add to Planner
                            </v-btn>
                            </v-layout>
                            <v-layout justify-center>
                            <v-btn large color="green darken-4" dark class="mt-3" min-width="250">
                                <v-icon left>mdi-cart-arrow-right</v-icon>
                                Proceed to Book
                            </v-btn>
                            </v-layout>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-layout justify-center>
                    <v-col cols="12" sm="12">
                        <div class="text-xs-center ml-4">
                            <v-divider></v-divider>
                        <v-card class="mx-auto mt-5 mb-6" max-width="1600" min-width="250" :elevation="2">
                            <v-tabs background-color="red lighten-4" color="red darken-4" centered fixed-tabs >
                            
                            <v-tab>Reviews
                            </v-tab>
                            <v-tab>Q&A
                            </v-tab>

                            
                            
                            <v-tab-item >
                                <v-card max-width="1600" class="mx-auto" >
    
                                    <v-list three-line v-for="(item, index) in items" :key="index">
                                        <v-list-item
                                        :key="item.title"
                                        >
                                        <v-list-item-avatar>
                                            <v-img :src="item.avatar"></v-img>
                                        </v-list-item-avatar>

                                        <v-list-item-content>
                                            <v-list-item-title> <a :href="'/UserProfile/' + item.id">{{item.title}} </a></v-list-item-title>
                                            <v-list-item-subtitle>Reviewed on : {{item.subtitle}}</v-list-item-subtitle>
                                            <p class="subtitle-2">{{item.review}}</p>
                                        </v-list-item-content>
                                        </v-list-item>
                                        <v-divider></v-divider>
                                    
                                    </v-list>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item >
                                <v-container fluid>
                                
                                    <v-row class="fill-height" >
                                        a
                                    </v-row>
                                </v-container>
                            </v-tab-item>
                            </v-tabs>
                        </v-card>
                        </div>
                    </v-col>
                    </v-layout>
                </v-row>
            </v-container>
        </div>
    </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  
    data: () => ({
        step:1,
        partners: 
    [
      {
        type:"venue",
        name:"A.sdn.bhd",
        src: 'https://images.pexels.com/photos/2467277/pexels-photo-2467277.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
    items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          id:'1000',
          title: 'Ali Bin Abu',
          subtitle: '10/10/2019',
          review: "Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend."
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
          subtitle: '10/10/2019',
          review: "Wish I could come, but I'm out of town this weekend.",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '10/10/2019',
          review: "Do you have Paris recommendations? Have you ever been?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '10/10/2019',
          review: "Have any ideas about what we should get Heidi for her birthday?",
        },
      ],
    }),
    
    methods: {
        zoomProduct: function(e) {
            var x,offsetY,y,offsetX;
            var zoomer = e.currentTarget;
            e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
            e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
            x = (offsetX / zoomer.offsetWidth) * 100;
            y = (offsetY / zoomer.offsetHeight) * 100;
            zoomer.style.backgroundPosition = x + "% " + y + "%";
            }


    }
}
</script>

<style lang="scss" scoped>
.detail{
    margin-top: 8vh;
}

figure.zoom {
  & img:hover {
    opacity: 0;
  }
  img {
    transition: opacity .5s;
    display: block;
    width: 100%;
    max-height: 650px;
    min-height: 500px;
  }
  background-position: 50% 50%;
  position: relative;
  width: 500px;
  overflow: hidden;
  cursor: zoom-in;
}
</style>
