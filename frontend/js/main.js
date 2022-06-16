new Vue({
    el: '#app',
    data: function () {
        return {
            message: "",
        }
    },
    mounted: async function () {
        const secretResponse = await fetch('./secret/secret.json')
        const secret = secretResponse.json()
        liff.init({
            liffId: secret.liffId,
        }).then(() => {
            this.message = "Hello, LIFF App."
        })
        .catch(() => {
            this.message = "Error, LIFF App."
        })
    }
})
