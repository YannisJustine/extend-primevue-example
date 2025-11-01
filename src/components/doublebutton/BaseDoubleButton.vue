<script lang="ts">
import BaseComponent from '@primevue/core/basecomponent';
import DoubleButtonStyle from './style/DoubleButtonStyle';
import type { ButtonProps } from 'primevue/button';
import type { PropType } from 'vue';

export default {
    name: 'BaseDoubleButton',
    extends: BaseComponent as typeof BaseComponent,
    props: {
        firstButton: Object as PropType<ButtonProps>,
        secondButton: Object as PropType<ButtonProps>,
        unstyled: { type: Boolean, default: false }
    },
    style: DoubleButtonStyle,
    provide() {
        return {
            $pcDoubleButton: this,
            $parentInstance: this
        };
    }
};
</script>