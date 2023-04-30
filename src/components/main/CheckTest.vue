<template>
    <div class="check__container">
        <p class="check__title">
            Обработка результатов
        </p>
        <img src="../../assets/images/loader.svg" alt="loading" />
        <p class="check__text">
            Определение стиля мышления............... ...........................................................
        </p>
    </div>
</template>
  
<style scoped>
.check__container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    font-family: "PTSerif-Regular";
    color: var(--clr-white);
}

.check__title {
    max-width: 60%;
    font-size: 23px;
    line-height: 30px;
}

.check__text {
    text-align: left;
    max-width: 80%;
    font-size: 14px;
    line-height: 19px;
}

@media (min-width: 768px) {
    .check__title {
        font-size: 33px;
        line-height: 40px;
    }

    .check__text {
        text-align: center;
        font-size: 20px;
        line-height: 25px;
    }
}
</style>