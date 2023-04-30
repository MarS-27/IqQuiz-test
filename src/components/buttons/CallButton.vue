<template>
    <button class="call-button" @click="$emit('getResult')">
        Позвонить и прослушать результат
    </button>
</template>
  
<style scoped>
.call-button {
    width: 100%;
    max-width: 500px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--clr-call-button-bg);
    background-image: url("../../assets/images/call.svg");
    background-repeat: no-repeat;
    background-position: 15px center;
    padding: 0 30px 0 60px;
    text-align: left;
    border-radius: 5px;
    font-family: "Merriweather-Black";
    font-size: 15px;
    line-height: 25px;
    letter-spacing: var(--letter-spacing-md);
    color: var(--clr-white);
}

.call-button:hover {
    background-color: var(--clr-btn-hover);
}

@media (min-width: 768px) {
    .call-button {
        font-size: 20px;
        line-height: 30px;
    }
}
</style>