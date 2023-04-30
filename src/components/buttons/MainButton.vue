<script>
export default {
    props: {
        btnName: String,
        outline: Boolean,
        progressBtnDisabled: Boolean,
    },
    inject: ["btnClick"],
    methods: {
        onClick() {
            this.btnClick(this.btnName)
            this.$emit('btnEnabled')
        }
    }
}
</script>

<template>
    <button class="main-button" :class="{ outline__button: outline }" @click="this.onClick" :disabled="progressBtnDisabled">
        {{ btnName }}
    </button>
</template>
  
<style scoped>
.main-button {
    display: block;
    margin: 0 auto;
    width: 190px;
    height: 40px;
    min-height: 40px;
    border-radius: 20px;
    background-color: var(--clr-important-element);
    font-family: "Merriweather-Bold";
    font-size: 14px;
    line-height: 18px;
    letter-spacing: var(--letter-spacing-md);
    text-transform: uppercase;
    color: var(--clr-enabled-button-text);
}

.main-button:disabled {
    background-color: var(--clr-soft);
    box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
    color: var(--clr-disabled-button-text);
}

.main-button:enabled:hover {
    background-color: var(--clr-btn-hover);
}

.outline__button {
    background-color: transparent;
    color: var(--clr-white);
    border: 1px solid var(--clr-white);
}

@media (min-width: 768px) {
    .main-button {
        width: 250px;
        height: 60px;
        min-height: 60px;
        font-size: 24px;
        line-height: 28px;
        border-radius: 50px;
    }
}
</style>