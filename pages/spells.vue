<template>
    <div class="container-fluid mt-4">
        
    </div>
</template>

<script>
import List from '~/components/List.vue'
import Detail from '~/components/Detail.vue'
import endpoints from '~/store/endpoints'
import { mapActions } from 'vuex'


export default {
    components: {
        List,
        Detail
    },
    methods: {
        ...mapActions([
            'getData'
        ])
    },
    mounted () {
        this.getData({ stateName:'spells', endpoint: endpoints.spells })
    }

}
</script>

<style>

</style>