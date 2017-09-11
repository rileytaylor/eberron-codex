<!-- List view with search, filtering, and a list. -->

<template>
    <div class="container-fluid">
        <b-form-input v-model="searchTerm" type="text" size="lg"
                      :placeholder="'Search for ' + name + '...'"></b-form-input>
        <div class="my-2">
            <div v-for="(key, filter) of filters" :key="filter">
                <multiselect placeholder="'Sort by ' + filter + '...'"></multiselect>
            </div>
        </div>
        <div class="my-2">
            <div v-for="(key, item) of items" :key="key">
                <p class="text-bold">{{ item.name }}</p>
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
            type: Array,
            required: true
        },
        filters: {
            type: Array,
            default: []
        }
    },
    components: {
        Multiselect
    }
}
</script>

<style>

</style>
