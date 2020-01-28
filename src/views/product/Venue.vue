<template>
    <v-container class="test">
		<div class="carousel">
			<div class="carousel__video" v-for="(video, i) in videos" :class="video.position" :key="(video, i)" >
				<div @click="changeVideo(0, video.position)" class="inactive" v-if="!video.active">
					asdasd
                </div>
				<img  v-if="!video.active" :src="video.thumbnail"  alt="" class="carousel__video-picture">
					<div class="carousel__placeholder-background" v-if="video.active">

                    </div>
			</div>
		</div>
    </v-container>
</template>

<script>
let videoIds = ["sG3BomZqem4", "V0TyHhXkjsE", "nUVRTWWb-8I", "6xz_dbmYc1g", "s3fdI6dw1Tk"];
    export default {
        data: function() {
		return {
			currentVideo: 0, //refers to tertiary video on leftmost; main video with be currentVideo+2
			totalVideos: 5,
			videos: [],
			videoPositions: {
				0 : "tertiary tertiary-left",
				1 : "secondary secondary-left",
				2 : "main",
				3 : "secondary secondary-right",
				4 : "tertiary tertiary-right"
			}
		}
	},
	computed: {
		
	},
	methods: {
		changeVideo: function(direction, position) {
			if(direction == "left") {
				this.currentVideo--;
				if(this.currentVideo < 0) {
					this.currentVideo = 4;
				}
				
			} else if (direction == "right") {
				this.currentVideo++;
				if(this.currentVideo > 4) {
					this.currentVideo = 0;
				}
			} else {
				switch(position) {
					case 'secondary secondary-right':
						this.changeVideo('left');
						break;
					case 'secondary secondary-left':
						this.changeVideo('right');
						break;
					case 'tertiary tertiary-right':
						this.changeVideo('left');
						this.changeVideo('left');
						break;
					case 'tertiary tertiary-left':
						this.changeVideo('right');
						this.changeVideo('right');
						break;
				}
			}
			
			this.videos.forEach((video, i)=>{
				video.active = false;
				let newIndex = i+this.currentVideo;
				if(newIndex > 4) {
					newIndex %= 5;
				}
				video.position = this.videoPositions[newIndex];
			});
			
		}
	},
	mounted: function() {
        var i=''
		//Generate array of fake carousel videos
		for (i=0; i<5; i++) {
			let videoId = videoIds[i];
			let videoImage = "https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg";
			let video = {
				thumbnail: videoImage,
				position: this.videoPositions[i],
				videoId: videoId,
				active: false,
			}
			
			this.videos.push(video);
		}
	}
    }
</script>

<style lang="scss" scoped>
.test{
    max-height: 500vh;
    max-width: 150vh;
    padding-top: 10vh;
}
.carousel {
	padding-top: 10vh;
	flex: 0 1 100%;
	display: flex;
	justify-content: center;
	height: 23rem;
	position: relative;
	align-items: center;
	justify-content: space-evenly;
    

	&__content {
		flex: 0 0 80%;
		height: 100%;
		position: relative;
        
	}

	&__overlay {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 90%;
		height: 90%;
		border-radius: 5px;
		color: white;
		z-index: 2;
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
        

        
		
	}

	&__video {
		width: 550px;
		height: 310px;
		position: absolute;
		transition: all 0.5s;

        
		
		& .inactive {
			position: absolute;
			z-index: 1;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.5);
			border-radius: 5px;
			transition: all .2s ease-out;
			
			
			&:hover {
				cursor: pointer;
				transform: scale(1.02);
				background-color: rgba(0, 0, 0, 0.4);
			}
			
			&:hover + img {
				transform: scale(1.02);
			}
		}

		&-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
			z-index: 3;
		}


		&.main {
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 3;
			
			& .inactive {
				
				& + img {
					transition: none;
				}

				&:hover {
					cursor: pointer;
					transform: scale(1);
				background-color: rgba(0, 0, 0, 0.1);
				}

				&:hover + img {
					transform: scale(1);
				}
			}
			
		}


		&.secondary {
			width: 467.5px;
			height: 263.5px;
			z-index: 2;
			&-left {
				top: 50%;
				left: 20%;
				transform: translate(-20%, -50%);
			}
			&-right {
				top: 50%;
				left: 80%;
				transform: translate(-80%, -50%);
			}
		}

		&.tertiary {
			width: 385px;
			height: 217px;
			z-index: 1;
			&-left {
				top: 50%;
				left: 0;
				transform: translate(0, -50%);
			}
			&-right {
				top: 50%;
				left: 100%;
				transform: translate(-100%, -50%);
			}
		}

		&-picture {
			width: 100%;
			height: 100%;
			border-radius: 5px;
            
		}
	}
}
@media screen and (max-width: 759px){
.test{
    max-height: 500vh;
    max-width: 300px;
}
.carousel {
	margin-top: -12vh;
	flex: 0 1 100%;
	display: flex;
	justify-content: center;
	height: 23rem;
	position: relative;
	align-items: center;
	justify-content: space-evenly;

	&__content {
		flex: 0 0 80%;
		height: 100%;
		position: relative;
	}

	&__overlay {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 90%;
		height: 90%;
		border-radius: 5px;
		color: white;
		z-index: 2;
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
		
	}

	&__video {
		width: 205px;
		height: 155px;
		position: absolute;
		transition: all 0.5s;
		
		& .inactive {
			position: absolute;
			z-index: 1;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.6);
			border-radius: 5px;
			transition: all .2s ease-out;
			
			
			&:hover {
				cursor: pointer;
				transform: scale(1.02);
				background-color: rgba(0, 0, 0, 0.4);
			}
			
			&:hover + img {
				transform: scale(1.02);
			}
		}

		&-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 1);
			z-index: 3;
		}


		&.main {
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 3;
			
			& .inactive {
				
				& + img {
					transition: none;
				}

				&:hover {
					cursor: initial;
					transform: scale(1);
				background-color: rgba(0, 0, 0, 0.6);
				}

				&:hover + img {
					transform: scale(1);
				}
			}
			
		}


		&.secondary {
			width: 230px;
			height: 130px;
			z-index: 2;
			&-left {
				top: 50%;
				left: 20%;
				transform: translate(-20%, -50%);
			}
			&-right {
				top: 50%;
				left: 80%;
				transform: translate(-80%, -50%);
			}
		}

		&.tertiary {
			width: 200px;
			height: 105px;
			z-index: 1;
			&-left {
				top: 50%;
				left: 0;
				transform: translate(0, -50%);
			}
			&-right {
				top: 50%;
				left: 100%;
				transform: translate(-100%, -50%);
			}
		}

		&-picture {
			width: 100%;
			height: 100%;
			border-radius: 5px;
		}
	}
}}
</style>