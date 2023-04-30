<script>
export default {
    props: {
        openMenu: Boolean
    },
    data() {
        return {
            navItems: ["Главная", "Информация о тесте", "Пройти тест"]
        }
    },
    inject: ["btnClick"],
}
</script>

<template>
    <nav class="nav" :class="{ 'close-menu': !openMenu }">
        <ul class="nav__list">
            <li class="nav__item" v-for="item in navItems" :key="item" @click='btnClick(item)'>
                <a v-if="item === 'Информация о тесте'" href="#test-info">{{ item }}</a>
                <p v-else>{{ item }}</p>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.nav {
    position: absolute;
    z-index: 999;
    top: 100%;
    left: -15px;
    right: -15px;
    height: calc(100vh - var(--header-mobile-height));
    background-color: var(--clr-main-bg);
}

.close-menu {
    display: none;
}

.nav__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    padding-top: 50px;
    padding-left: 15px;
}

.nav__item {
    position: relative;
    color: var(--clr-white);
    font-family: "Roboto-Light";
    text-transform: uppercase;
    cursor: pointer;
    font-size: 16px;
    line-height: 22px;
}

.nav__item:hover {
    color: var(--clr-active-navlink);
}

@media (min-width: 768px) {
    .nav {
        display: block;
        position: static;
        height: max-content;
        height: inherit;
    }

    .nav__list {
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding-top: 0;
    }
}
</style>