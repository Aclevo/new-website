<template>
  <div>
    <AppHeader />
    <div className="bg-base-200 min-h-screen">
      <div className="text-center">
        <div className="max-w-md">
          <div className="py-6">
            <slot />
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
