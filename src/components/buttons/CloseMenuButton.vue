<script>
export default {
    props: {
        openMenu: Boolean
    }
}
</script>

<template>
    <button class="close-menu" :class="{ 'show__close-btn': openMenu }" @click="$emit('open')" />
</template>
  
<style scoped>
.close-menu {
    display: none;
}

.show__close-btn {
    display: block;
    width: 30px;
    height: 30px;
    background-color: inherit;
    background-image: url("../../assets/images/close_icon.svg");
    background-position: center;
    background-size: 80%;
    background-repeat: no-repeat;
    margin-left: auto;
}

.show__close-btn:hover {
    background-color: var(--clr-btn-hover);
    border-radius: 6px;
}

@media (min-width: 768px) {
    .close-menu {
        display: none;
    }
}
</style>