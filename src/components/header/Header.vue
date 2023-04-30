<script>
import BurgerButton from '../buttons/BurgerButton.vue';
import CloseMenuButton from '../buttons/CloseMenuButton.vue';
import NavMenu from './NavMenu.vue';

export default {
    props: {
        testStatus: String,
    },
    components: {
        BurgerButton,
        CloseMenuButton,
        NavMenu,
    },
    data() {
        return {
            openMenu: false,
        }
    }
}
</script>

<template>
    <header class="grid-container header">
        <div class="grid-content header__content">
            <BurgerButton :openMenu="openMenu" @open="openMenu = true" />
            <img class="logo" :class="[testStatus !== 'ready' ? 'logo__show' : 'logo__hide']"
                src="../../assets/images/brain.png" alt="iq-test" />
            <p class="header__title" v-if='testStatus === "start" || testStatus === "check"'>Tест на определение IQ</p>
            <p class="header__title_finish" v-else-if='testStatus === "finish"'>Готово!</p>
            <CloseMenuButton :openMenu="openMenu" @open="openMenu = false" />
            <NavMenu :openMenu="openMenu" />
        </div>
    </header>
</template>
  
<style scoped>
.header {
    height: var(--header-mobile-height);
}

.header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.logo {
    width: 45px;
    height: 45px;
}

.logo__show {
    display: block;
}

.logo__hide {
    display: none;
}

.header__title,
.header__title_finish {
    flex-grow: 1;
    font-family: "YesevaOne-Regular";
    text-transform: uppercase;
    color: var(--clr-important-element);
}

.header__title {
    font-size: 12px;
    line-height: 14px;
}

.header__title_finish {
    font-size: 20px;
    line-height: 25px;
}

@media (min-width: 768px) {
    .header {
        height: var(--header-height);
    }

    .logo {
        display: block;
        width: 60px;
        height: 60px;
    }
}
</style>