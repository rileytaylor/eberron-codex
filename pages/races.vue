<template>
    <div class="row container-fluid mt-4">
        <div class="col-md-4">
            <list :name="'races'" :filters="filters" :items="items">
            </list>
        </div>
        <div class="col-md-8">
            <detail></detail>
        </div>
    </div>
</template>

<script>
import List from '~/components/List.vue'
import Detail from '~/components/Detail.vue'

export default {
    data () {
        return {
            filters: [
                'size',
                'source'
            ],
            items: ['one', 'two']
        }
    },
    components: {
        List,
        Detail
    }

}
</script>

<style>

</style>
