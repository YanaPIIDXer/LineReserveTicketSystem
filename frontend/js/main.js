new Vue({
    el: '#app',
    data: function () {
        return {
            message: "",
        }
    },
    mounted: function () {
        liff.init({
            liffId: '',
        }).then(() => {
            this.message = "Hello, LIFF App."
        })
        .catch(() => {
            this.message = "Error, LIFF App."
        })
    }
})
