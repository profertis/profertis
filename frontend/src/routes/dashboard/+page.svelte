<script lang="ts">
    // TODO dynamic
    // key is a group
    // TODO - do whatever you want with the design tristan, ill create one based off it
    // there is something there you can work with though
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

<div class="d-flex align-items-center justify-content-center h-100 bg-primary">
    <div class="sliding-background" />
    <div class="card col-9 mb-3 mt-3">
        <div class="card-body p-3">
        <form>
            <h2 class="pb-2 border-bottom m-3">Student Dashboard</h2>
            <div class="category">
                <h3>Math</h3>
                <input class="form-control mb-3" required placeholder="Select Math Course"/>
            </div>
            <div class="category">
                <h3>English</h3>
                <input class="form-control mb-3" required placeholder="Select English Course"/>
            </div>
            <div class="category">
                <h3>Science</h3>
                <input class="form-control mb-3" required placeholder="Select Science Course"/>
            </div>
            <div class="category">
                <h3>Social Studies</h3>
                <input class="form-control mb-3" required placeholder="Select Social Studies Course"/>
            </div>
            <div class="category">
            <h3>Electives</h3>
                <input class="form-control mb-3" required placeholder="Select Elective Course 1"/>
                <input class="form-control mb-3" required placeholder="Select Elective Course 2"/>
                <input class="form-control mb-3" required placeholder="Select Elective Course 3"/>
                <input class="form-control mb-3" required placeholder="Select Elective Course 4"/>
            </div>
            <button type="submit" class="btn btn-primary w-100">Request Schedule Update</button>
        </form>
    </div>
    </div>
</div>

<style>
    .sliding-background {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1600' height='930' preserveAspectRatio='none' viewBox='0 0 1600 930'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1519%26quot%3b)' fill='none'%3e%3crect width='1600' height='930' x='0' y='0' fill='rgba(47%2c 108%2c 156%2c 1)'%3e%3c/rect%3e%3cuse xlink:href='%23SvgjsG1521' transform='translate(0%2c 0)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1521' transform='translate(0%2c 620)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1521' transform='translate(620%2c 0)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1521' transform='translate(620%2c 620)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1521' transform='translate(1240%2c 0)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1521' transform='translate(1240%2c 620)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1519'%3e%3crect width='1600' height='930' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cg id='SvgjsG1520'%3e%3cpath d='M7.713 15.485C3.459 15.485 0 12.025 0 7.768 0 3.513 3.459 0.051 7.713 0.051S15.432 3.513 15.432 7.768c0 4.257-3.465 7.716-7.719 7.717z m0-1.91c3.201 0 5.81-2.604 5.81-5.809 0-3.199-2.61-5.807-5.81-5.807-3.202 0-5.804 2.609-5.804 5.807-0.001 3.206 2.602 5.809 5.804 5.809z'%3e%3c/path%3e%3cpath d='M7.753 8.787a0.574 0.574 0 0 1-0.554-0.042 0.578 0.578 0 0 1-0.259-0.399L6.931 3.862a0.58 0.58 0 0 1 1.162 0v3.478l2.975-1.4a0.578 0.578 0 0 1 0.773 0.275c0.138 0.292 0.011 0.637-0.276 0.774l-3.81 1.798z'%3e%3c/path%3e%3c/g%3e%3cg id='SvgjsG1521'%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(0%2c 0) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(0%2c 62) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(0%2c 124) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(0%2c 186) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(0%2c 248) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(0%2c 310) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(0%2c 372) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(0%2c 434) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(0%2c 496) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(0%2c 558) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(62%2c 0) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(62%2c 62) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(62%2c 124) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(62%2c 186) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(62%2c 248) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(62%2c 310) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(62%2c 372) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(62%2c 434) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(62%2c 496) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(62%2c 558) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(124%2c 0) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(124%2c 62) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(124%2c 124) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(124%2c 186) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(124%2c 248) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(124%2c 310) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(124%2c 372) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(124%2c 434) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(124%2c 496) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(124%2c 558) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(186%2c 0) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(186%2c 62) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(186%2c 124) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(186%2c 186) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(186%2c 248) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(186%2c 310) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(186%2c 372) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(186%2c 434) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(186%2c 496) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(186%2c 558) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(248%2c 0) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(248%2c 62) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(248%2c 124) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(248%2c 186) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(248%2c 248) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(248%2c 310) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(248%2c 372) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(248%2c 434) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(248%2c 496) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(248%2c 558) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(310%2c 0) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(310%2c 62) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(310%2c 124) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(310%2c 186) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(310%2c 248) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(310%2c 310) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(310%2c 372) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(310%2c 434) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(310%2c 496) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(310%2c 558) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(372%2c 0) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(372%2c 62) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(372%2c 124) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(372%2c 186) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(372%2c 248) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(372%2c 310) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(372%2c 372) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(372%2c 434) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(372%2c 496) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(372%2c 558) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(434%2c 0) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(434%2c 62) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(434%2c 124) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(434%2c 186) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(434%2c 248) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(434%2c 310) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(434%2c 372) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(434%2c 434) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(434%2c 496) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(434%2c 558) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(496%2c 0) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(496%2c 62) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(496%2c 124) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(496%2c 186) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(496%2c 248) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(496%2c 310) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(496%2c 372) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(496%2c 434) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(496%2c 496) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(496%2c 558) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(558%2c 0) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(558%2c 62) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(558%2c 124) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(558%2c 186) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(558%2c 248) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(558%2c 310) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(558%2c 372) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(558%2c 434) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(558%2c 496) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsG1520' transform='translate(558%2c 558) scale(2)' fill='rgba(240%2c 241%2c 245%2c 1)'%3e%3c/use%3e%3c/g%3e%3c/defs%3e%3c/svg%3e");
        background-repeat: repeat;
        background-position: 0 0;
		background-size: auto 100%;
		animation: slide 60s linear infinite;
        position: fixed;
		top: 0;
		left: 7.5px;
		width: 100vw;
		height: 100vh;
    }

    @keyframes slide {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 0px 1600px;
		}
	}

    .category {
        background-color: #296089;
        padding: 1rem;
        margin: 1rem;
        border-radius: 10px;
        color: #f0f1f5
    }
</style>