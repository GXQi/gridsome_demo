<template>
    <footer>Copyright {{getCurrentYear}} by <a :href="href">GXQi</a></footer>
</template>

<script>
export default {
    data: () => ({
        href: "#"
    }),
    computed: {
        getCurrentYear () {
            return new Date().getFullYear()
        }
    }
}
</script>

<style scoped lang="stylus">
footer {
    text-align center
    letter-spacing 0.01rem
    padding .4rem
}
</style>