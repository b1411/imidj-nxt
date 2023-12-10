<template>
    <VApp>
        <AppHeader />
        <Drawer />
        <div class="fix-fixed-margin">
            <slot name="page" />
        </div>
    </VApp>
</template>