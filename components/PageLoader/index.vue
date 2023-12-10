<template>
    <div class="h-screen w-screen absolute z-[230] top-0 left-0 bg-white">
        <span class="loader absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></span>
    </div>
</template>

<style scoped>
.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #197149;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>