<template>
    <div class="addcard-container">
        <div class="video-container" v-if="!scannedCard">
            <header>
            <router-link to="/" class="navigation__back">
                <img src="../assets/stone-back-button.png" alt="" />
            </router-link>
                <h1 class="heading1">Scan a code</h1>
            </header>
            <video id="qrReader"></video>
        </div>
        <div class="card-preview" v-if="scannedCard">
            <card :card-id="JSON.stringify(scannedCard.id)"></card>
        </div>
        <h2 class="added-text" v-if="scannedCard">
            Successfully added {{ scannedCard.title }}
        </h2>
    </div>
</template>
<style lang="scss" scoped>
#qrReader {
    width: 100%;
}
.added-text {
    color: #fff;
    font-size: 1.75em;
    text-align: center;
}
</style>
<script>
import QrScanner from 'qr-scanner'
import QrScannerWorkerPath from '!!file-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js'
QrScanner.WORKER_PATH = QrScannerWorkerPath
import Card from '../components/Card.vue'

export default {
    components: { Card },
    data: function() {
        return {
            scanner: null,
            scannedText: '',
            scannedCard: '',
            element: null,
        }
    },
    methods: {
        getQrCode(code) {
            if (code) {
                let parsedCode = JSON.parse(code)
                this.$store.dispatch('scanCard', parsedCode)
                this.scannedCard = parsedCode
                this.destroyScanner()
            }
        },
        destroyScanner() {
            this.scanner.destroy()
            this.scanner = null
        },
        setupScanner() {
            this.scanner = new QrScanner(this.element, result =>
                this.getQrCode(result)
            )
            this.scanner.start()
        },
    },
    mounted() {
        this.element = document.getElementById('qrReader')
        this.setupScanner()
    },
}
</script>
