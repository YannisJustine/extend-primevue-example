<template>
    <div :class="cx('root')">
        <div :class="cx('buttonContainer')">
            <Button v-bind="firstButton" @click="onFirstClick" :class="cx('pcFirstButton')"
                :pt="ptm('pcFirstButton')" :unstyled />
            <Button v-bind="secondButton" @click="onSecondClick" :class="cx('pcSecondButton')"
                :pt="ptm('pcSecondButton')" :unstyled />
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
import BaseDoubleButton from './BaseDoubleButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DoubleButton',
    extends: BaseDoubleButton,
    emits: ['first-click', 'second-click'],
    components: {
        Button
    },
    provide() {
        return {
            $pcDoubleButton: this,
            $parentInstance: this
        };
    },
    methods: {
        onFirstClick(event) {
            this.$emit('first-click', event);
        },
        onSecondClick(event) {
            this.$emit('second-click', event);
        }
    }
});
</script>