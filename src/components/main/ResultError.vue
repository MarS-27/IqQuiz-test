<script>
export default {
    props: {
        resultError: String
    }
}
</script>

<template>
    <div class="result-error grid-content">
        {{ resultError }}
    </div>
</template>
  
<style scoped>
.result-error {
    max-width: 700px;
    margin: 20px auto 0 auto;
    background-color: var(--clr-warning-bg);
    border-radius: 10px;
    padding: 20px 15px;
    color: var(--clr-call-button-bg);
    font-family: "Merriweather-Black";
    font-size: 18px;
    line-height: 20px;
}

@media (min-width: 768px) {
    .result-error {
        font-size: 24px;
        line-height: 26px;
    }
}
</style>