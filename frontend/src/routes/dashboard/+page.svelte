<script lang="ts">
    // TODO dynamic
    // key is a group
    export let minClassesPerGroup: { [key: string]: number } = {} // dont worry about this err its not used

    interface Course {
        name: string;
        id: string;
        group: string;
        published?: boolean;
        editable?: boolean;
    }

    function addCourse() {
        // TODO use DB
        courses = [...courses, {
            name: "Course Name",
            id: "...",
            group: "New Group"
        }]
    }

    let courses: Course[] = []
</script>

{#each courses as course}
    <div>
        {#if course.editable}
            <input on:blur={() => course.editable = false} bind:value={course.name} placeholder="Course Name"><br/>
        {:else}
            <p on:dblclick={() => course.editable = true}>Name: {course.name}</p>
        {/if}
    </div>
    Enabled: <input type="checkbox" bind:checked={course.published}>
{/each}
<br/>
<button on:click={addCourse}>Add Course</button>