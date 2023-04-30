<script>
export default {
    props: {
        resultData: Object,
        resultItems: Array,
    },
}
</script>

<template>
    <div class="result-info grid-content">
        <ul>
            <li class="result-info__item" v-for="item in resultItems" :key="item">
                <p class="result-info__title">{{ item.replace("_", " ").toUpperCase() }}:</p>
                <p v-if="!resultData[item].length">
                    n/a
                </p>
                <p v-else-if="typeof resultData[item] === 'object'">
                    {{ resultData[item].join(", ") }}
                </p>
                <p v-else-if="item === 'created' || item === 'edited'">{{ resultData[item].slice(0, 10) }}</p>
                <p v-else>{{ resultData[item] }}</p>
            </li>
        </ul>
    </div>
</template>
  
<style scoped>
.result-info {
    max-width: 900px;
    margin: 20px auto 0 auto;
    background-color: var(--clr-light);
    border-radius: 20px;
    padding: 20px 15px;
}

.result-info__item {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    font-family: "Merriweather-Regular";
    color: var(--clr-dark);
    font-size: 14px;
    line-height: 20px;
    padding: 10px 0;
    border-bottom: 2px solid var(--clr-important-element);
    text-align: left;
}

.result-info__item:last-of-type {
    border-bottom: none;
}

.result-info__title {
    font-family: "Merriweather-Black";
    color: var(--clr-progress);
}

@media (min-width: 768px) {
    .result-info__item {
        font-size: 20px;
        line-height: 25px;
    }
}
</style>