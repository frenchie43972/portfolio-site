<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  varient: {
    type: String,
    default: 'primary', // primary | secondary | outline
  },
  size: {
    type: String,
    default: 'medium', // small | medium | large
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object],
    default: null,
  },
  type: {
    type: String,
    default: 'button',
  },
})
</script>

<template>
  <button v-if="!to" :type="type" class="base-button" :class="[varient, size]" :disabled="disabled">
    <slot />
  </button>

  <RouterLink v-else :to="to" class="base-button" :class="[varient, size]" role="button">
    <slot />
  </RouterLink>
</template>

<style scoped>
.base-button {
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  display: inline-block;
}

/* Variants */
.primary {
  background-color: #cadcae;
  color: #111;
}
.primary:hover {
  transform: translateY(-3px);
  filter: brightness(95%);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.secondary {
  background-color: #eee;
  color: #333;
}

.outline {
  border: 2px solid #cadcae;
  background: transparent;
  color: #111;
}

/* Sizes */
.small {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.medium {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.large {
  padding: 1rem 2rem;
  font-size: 1.2rem;
}

/* Disabled state */
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}
</style>
