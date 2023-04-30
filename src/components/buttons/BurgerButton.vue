<script>
export default {
    props: {
        openMenu: Boolean
    }
}
</script>

<template>
    <button class="burger" :class="{ 'hide__burger': openMenu }" @click="$emit('open')">
        <div class="burger__line"></div>
    </button>
</template>

<style scoped>
.burger {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 30px;
    height: 30px;
    background-color: inherit;
}

.burger:hover {
    background-color: var(--clr-btn-hover);
    border-radius: 6px;
}

.burger__line::after {
    content: "";
    top: 7px;
}

.burger__line::before {
    content: "";
    top: -7px;
}

.burger__line,
.burger__line::after,
.burger__line::before {
    display: block;
    position: absolute;
    width: 24px;
    height: 3px;
    border: none;
    background-color: var(--clr-soft);
}

.hide__burger {
    display: none;
}

@media (min-width: 768px) {
    .burger {
        display: none;
    }
}
</style>