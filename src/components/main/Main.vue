<script>
import IntroSection from './IntroSection.vue';
import QuoteSection from './QuoteSection.vue';
import AboutFirstSection from './AboutFirstSection.vue';
import AboutSecondSection from './AboutSecondSection.vue';
import TestSection from './TestSection.vue';
import TestResultSection from './TestResultSection.vue';

export default {
    components: {
        IntroSection,
        QuoteSection,
        AboutFirstSection,
        AboutSecondSection,
        TestSection,
        TestResultSection,
    },
    props: {
        testStatus: String
    },
}
</script>

<template>
    <main class="grid-container">
        <template v-if='testStatus === "ready"'>
            <IntroSection />
            <QuoteSection />
            <AboutFirstSection />
            <AboutSecondSection />
        </template>
        <TestSection v-else-if='testStatus === "start" || testStatus === "check"' />
        <TestResultSection v-else-if='testStatus === "finish"' />
    </main>
</template>
  
<style scoped></style>