<template>
    <section class="grid-content-full grid-container quote-section">
        <div class="grid-content-full grid-container ">
            <p class="grid-content quote-text">
                Профессиональный IQ-тест позволяет не только определить
                коэффициент вашего интеллекта, но и выработать список
                рекомендаций для повышения этого показателя.
            </p>
        </div>
    </section>
</template>
  
<style scoped>
.quote-section {
    background-image: url("../../assets/images/gradient-img.png");
    background-position: center;
    background-size: cover;
}

.quote-section div {
    padding: 80px 0 50px 0;
    background: var(--gradient-with-rotation);
}

.quote-text {
    max-width: 245px;
    margin: 0 auto;
    font-family: "YesevaOne-Regular";
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: var(--clr-white);
}

.quote-text::before,
.quote-text::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    background-image: url("../../assets/images/quotes.svg");
    background-position: center;
    background-size: cover;
}

.quote-text::before {
    left: -24px;
    top: -40px;
}

.quote-text::after {
    transform: rotate(180deg);
    right: -10px;
    top: 100%
}

@media (min-width: 768px) {
    .quote-section div {
        padding: 100px 0 70px 0;
    }

    .quote-text {
        max-width: 80%;
        font-size: 38px;
        line-height: 43px;

    }

    .quote-text::before,
    .quote-text::after {
        width: 34px;
        height: 34px;
    }
}
</style>