<template>
    <a class="more" href="#test-info">
        <button class="more-button" />
        <p>Подробнее</p>
    </a>
</template>
  
<style scoped>
.more {
    display: block;
    width: max-content;
    margin: 0 auto;
}

.more-button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--clr-white);
    background-image: url("../../assets/images/arrow_icon.svg");
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
}

.more p {
    font-family: "PTSerif-Regular";
    font-size: 12px;
    line-height: 15px;
    color: var(--clr-white);
}

.more:hover .more-button {
    background-color: var(--clr-btn-hover);
    transform: rotate(180deg);
}

.more:hover p {
    color: var(--clr-btn-hover);
}

@media (min-width: 768px) {
    .more-button {
        width: 32px;
        height: 32px;
    }

    .more p {
        font-size: 14px;
        line-height: 18px;

    }
}
</style>