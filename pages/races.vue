<template>
    <div class="row container-fluid mt-4">
        <div class="col-md-4">
            <list :name="'races'" :filters="filters" :items="items" @selection="setSelected">
                <div slot="list-item-addons">
                    <p class="mb-0">{{ item.ability }}</p>
                </div>
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
import endpoints from '~/store/endpoints'
import { mapActions } from 'vuex'


export default {
    data () {
        return {
            filters: [
                'size',
                'source'
            ],
            selected: undefined
        }
    },
    computed: {
        items () { 
            return this.$store.state.races.race
        }
    },
    components: {
        List,
        Detail
    },
    methods: {
        ...mapActions([
            'getData'
        ]),
        setSelected (item) {
            this.selected = item
        }
    },
    mounted () {
        this.getData({ stateName:'races', endpoint: endpoints.races })
    }

}
</script>

<style>

</style>
