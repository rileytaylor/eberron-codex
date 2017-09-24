<!-- List view with search, filtering, and a list. -->

<template>
    <div class="container-fluid">
        <b-form-input v-model="searchTerm" type="text" size="lg"
                      :placeholder="'Search for ' + name + '...'"></b-form-input>
        <div class="my-2">
            <div v-for="(filter, key) of filters" :key="key">
                <multiselect class="my-1"
                             :placeholder="'Sort by ' + filter + '...'" 
                             :options="[]" v-model="filter.selected"></multiselect>
            </div>
        </div>
        <div class="my-2">
            <div class="list-group">
                <button v-for="item of items" :key="item.name" @click="selectItem"
                    class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <h6>{{ item.name }}</h6>
                        <small>{{ item.source }}</small>
                    </div>
                    <slot name="list-item-addons"></slot>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
    data () {
        return {
            searchTerm: ''
        }
    },
    props: {
        // Name of what the data is of
        name: {
            type: String,
            required: true
        },
        items: {
            type: [Array, undefined],
            required: true
        },
        filters: {
            type: Array,
            default: []
        }
    },
    components: {
        Multiselect
    },
    methods: {
        selectItem (item) {
            this.emit('selection', item)
        }
    }
}
</script>

<style>

</style>
