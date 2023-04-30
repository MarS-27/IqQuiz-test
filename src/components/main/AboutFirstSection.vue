<script>
import MainButton from "../buttons/MainButton.vue";

export default {
    components: {
        MainButton,
    },
}
</script>

<template>
    <section id="test-info" class="grid-content-full grid-container about-section_first">
        <div class="grid-content">
            <p class="about__text">
                Также по результатам теста
                <span>вы получите</span> подробные
                <span>советы</span> по определению наиболее перспективной
                <span>для вашего типа интеллекта, сферы деятельности,</span>
                которая принесет вам скорейший финансовый результат.
            </p>
            <img class="about-img" src="../../assets/images/about-brain-img.png" alt="about-image" />
            <MainButton :btnName="'Пройти тест'" />
        </div>
    </section>
</template>
  
<style scoped>
.about-section_first {
    padding: 40px 0;
    background-color: var(--clr-white);
}

.about__text {
    font-family: "PTSerif-Regular";
    font-size: 16px;
    line-height: 24px;
    color: var(--clr-dark);
    margin-bottom: 30px;
}

.about__text span {
    font-family: "PTSerif-Bold";
    text-transform: uppercase;
}

.about-img {
    display: block;
    width: 80%;
    margin: 0 auto;
}

@media (min-width: 768px) {
    .about__text {
        font-size: 36px;
        line-height: 44px;
    }

    .about-img {
        width: 35%;
    }
}
</style>