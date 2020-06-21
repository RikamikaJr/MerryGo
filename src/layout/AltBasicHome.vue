<template>
    <div>
        <header-bar />
        <footer-bar />
    </div>
</template>

<script>
    import HeaderBar from "@/components/basic/AltTopNavBar";
    import FooterBar from "@/components/basic/BotNavBar";
    export default {
        components:{
            HeaderBar,
            FooterBar
        }
    }
</script>
