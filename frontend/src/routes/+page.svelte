<script lang="ts">
    export let loggedIn = false;
</script>

{#if loggedIn}
    <h1>Welcome!</h1>
{:else}
    <input placeholder="Username">
    <input placeholder="Password">
{/if}