<template>
    <b-navbar toggleable="md" type="dark" variant="dark" sticky>
        <b-nav-toggle target="nav_collapse"></b-nav-toggle>

        <b-navbar-brand href="#">
            <img src="~static/favicon.png" alt="">
            Eberron Codex
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-nav is-nav-bar>
                <b-nav-item href="#">Home</b-nav-item>
                <b-nav-item href="#">Rules</b-nav-item>
                <b-nav-item href="#">LIbrary</b-nav-item>
                <b-nav-item-dropdown text="Player Options">
                    <b-dropdown-item href="#">Races</b-dropdown-item>
                    <b-dropdown-item href="#">Classes</b-dropdown-item>
                    <b-dropdown-item href="#">Backgrounds</b-dropdown-item>
                    <b-dropdown-item href="#">Feats</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="References">
                    <b-dropdown-item href="#">Monsters</b-dropdown-item>
                    <b-dropdown-item href="#">Items</b-dropdown-item>
                    <b-dropdown-item href="#">Spells</b-dropdown-item>
                    <b-dropdown-item href="#">Conditions</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-nav>

            <b-nav is-nav-bar class="ml-auto">
                <b-nav-item-dropdown text="DM Tools" right>
                    <b-dropdown-item href="#">CR Calculator</b-dropdown-item>
                    <b-dropdown-item href="#">Encounter Builder</b-dropdown-item>
                    <b-dropdown-item href="#">Loot Generator</b-dropdown-item>
                    <b-dropdown-item href="#">Statgen</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Utilities" right>
                    <b-dropdown-item href="#">Stat Block to JSON</b-dropdown-item>
                    <b-dropdown-item href="#">WYSIWTG Editor</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-nav>
        </b-collapse>

    </b-navbar>
</template>

<script>
export default {

}
</script>

<style>

</style>

