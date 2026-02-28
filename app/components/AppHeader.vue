<script setup lang="ts">
const route = useRoute();

const items = computed(() => [
  {
    label: "Projects",
    to: "/projects",
    active: route.path.startsWith("/docs"),
  },
  {
    label: "Blog",
    to: "/blog",
  },
  {
    label: "About",
    to: "/about",
  },
]);
</script>

<template>
  <div class="navbar glass bg-base-100 shadow-sm">
    <div class="navbar-start">
      <a class="btn btn-ghost text-xl">Aclevo</a>
    </div>
    <div class="navbar-end hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="item in items" :key="item.label">
          <a :href="item.to">{{ item.label }}</a>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="dropdown">
        <div tabIndex="{0}" role="button" class="btn btn-ghost lg:hidden">
          <a class="btn">Explore</a>
        </div>
        <ul
          tabIndex="-1"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul class="p-5 bg-base-100 rounded-box z-1">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
