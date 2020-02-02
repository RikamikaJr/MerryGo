<template>
    <v-app id="inspire">
        <div class="checklist">
            <v-card class="overflow-hidden" >
                <v-app-bar fixed color="black" dark hide-on-scroll>
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
        </div>
        <div class="detail">
            <v-container fluid fill-height>
                <v-col cols="12" sm="3">
                    <v-row no-gutters>
                    <figure class="zoom" v-on:mousemove="zoomProduct" style="background-image: url(https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)">
                        <img src="https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </figure>
                    </v-row>
                   
                </v-col>
                <v-col cols="12" sm="9">
                        <div class="product-summary">
                        <h2 class="product-title">Basic contrast sneakers</h2>
                        <div class="user-ratings">
                            <div class="star-rating">
                            <span style="width:100%"></span>
                            </div>
                        <a href="#reviews" class="total-review" rel="nofollow">(<span class="count"> 5 </span> customer review)</a>
                        </div>
                        <div class="price">
                            <h3>
                            <span>$</span>
                            160.00
                            </h3>
                            <del>$ 180</del>
                        </div>
                        <div class="prodect-details">
                            <h3>Product Details</h3>
                            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,</p>
                        </div>
                        <div class="buy-product">
                            <div class="stock">
                            <v-btn color="#4CAF50" dark>IN STOCKS
                            <v-icon dark right>check_circle</v-icon>
                            </v-btn>
                            </div>
                            <div class="product-qty">
                            
                            <div class="cart-btn">
                            <v-btn  class="px-5" color="error"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ADD TO CART</v-btn>
                                            <v-btn  class="cart-btn px-5" color="error">BUY NOW</v-btn>
                            </div>
                            <button><i class="fa fa-heart" aria-hidden="true"></i>    ADD TO WISHLIST</button>
                            
                            </div>
                        </div>
                        </div>
                </v-col>
            </v-container>
        </div>
    </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  
    data: () => ({
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
  }
  background-position: 50% 50%;
  position: relative;
  width: 500px;
  overflow: hidden;
  cursor: zoom-in;
}
</style>
