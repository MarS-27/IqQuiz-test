<script>
import MainButton from "../buttons/MainButton.vue";

export default {
    components: {
        MainButton,
    },
}
</script>

<template>
    <section class="grid-content-full grid-container about-section_second">
        <img class="lightning" src="../../assets/images/lightning.png" />
        <img class="lightning" src="../../assets/images/lightning.png" />
        <div class="grid-content">
            <p class="about__text">
                Прохождение теста займет у вас не более
                <span>12 минут,</span> а его
                <span>результаты</span> вы сможете
                <span>использовать всю жизнь. </span>
            </p>
            <p class="about__card">
                Профессиональная интерпретация и детально
                <span>проработанные рекомендации</span> позволят вам качественно
                <span>изменить все аспекты своей жизни:</span> от финансового
                до любовного.
            </p>
            <MainButton :btnName="'Пройти тест'" :outline="true" />
            <p class="year-info">2019</p>
        </div>
    </section>
</template>
  
<style scoped>
.about-section_second {
    padding: 50px 0 10px 0;
    background-image: url("../../assets/images/galaxy.png");
    background-position: center;
    background-size: cover;
    overflow-x: hidden;
}

.about__text {
    font-family: "Merriweather-Regular";
    font-size: 15px;
    line-height: 20px;
    color: var(--clr-white);
    margin-bottom: 20px;
    max-width: 900px;
}

.about__text span {
    font-family: "Merriweather-Black";
    color: var(--clr-important-element);
}

.about__card {
    max-width: 700px;
    margin: 0 auto 30px auto;
    background-color: var(--clr-light);
    opacity: 0.8;
    border-radius: 20px;
    padding: 30px 15px;
    font-family: "Merriweather-Regular";
    font-size: 16px;
    line-height: 23px;
}

.about__card span {
    font-family: "Merriweather-Bold";
    color: var(--clr-dark);
}

.year-info {
    width: max-content;
    margin: 50px auto 0 auto;
    font-family: "Roboto-Light";
    font-size: 10px;
    line-height: 23px;
    color: rgba(255, 255, 255, 0.5);
}

.year-info::before {
    content: "c";
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 12px;
    height: 12px;
    padding: 2px;
    border-radius: 50%;
    margin-right: 6px;
    border: 0.8px solid rgba(255, 255, 255, 0.5);
}

.lightning {
    position: absolute;
    width: 165px;
    height: 265px;
}

.lightning:first-of-type {
    transform: rotateY(180deg) rotate(20deg);
    top: 30%;
    left: -10px;
}

.lightning:last-of-type {
    transform: rotate(20deg);
    top: 0;
    right: -20px;
}

@media (min-width: 768px) {
    .about-section_second {
        padding: 60px 0 20px 0;
    }

    .about__text {
        font-size: 30px;
        line-height: 35px;
        text-align: center;
        margin: 0 auto 40px auto;
    }

    .about__card {
        border-radius: 20px;
        padding: 60px 30px;
        font-size: 30px;
        line-height: 35px;
        margin-bottom: 50px;
    }

    .year-info {
        margin-top: 60px;
        font-size: 14px;
        line-height: 27px;
    }

    .year-info::before {
        width: 16px;
        height: 16px;
        border: 1px solid rgba(255, 255, 255, 0.5);
    }

    .lightning {
        width: 25%;
        height: auto;
    }

    .lightning:first-of-type {
        top: 0;
        left: 0;
        transform: rotateY(180deg) rotate(0);
    }

    .lightning:last-of-type {
        right: 0;
        transform: rotate(0);
    }
}
</style>