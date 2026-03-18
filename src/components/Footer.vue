<script setup lang="ts">
import { RouterLink } from 'vue-router'
import logoRund from '@/assets/images/Logo_rund_30_40_125dpi.png'
import facebookLogo from '@/assets/images/Facebook_Logo.png'
import instagramLogo from '@/assets/images/Instagram_Glyph_Gradient.png'
</script>

<template>
  <footer class="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <!-- Brand Section -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <img :src="logoRund" alt="Ernteschwung Logo" class="w-14 h-10 rounded-full" />
            <span class="text-lg font-bold text-primary dark:text-white">Ernteschwung</span>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed">
            Faszination – Gemüse – Vielfalt – Natur
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm font-semibold text-white mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/" class="text-sm text-gray-400 hover:text-primary transition-colors duration-200">
                Startseite
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/#kontakt" class="text-sm text-gray-400 hover:text-primary transition-colors duration-200">
                Kontakt
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/impressum" class="text-sm text-gray-400 hover:text-primary transition-colors duration-200">
                Impressum
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-sm font-semibold text-white mb-4">Kontakt</h3>
          <div class="space-y-2 text-sm text-gray-400">
            <p>E-Mail: gemuese@ernteschwung.at</p>
            <p>Telefon:  +43 664 1013547</p>
            <p>Adresse: Entschendorf 35, 8321 St. Margarethen, Austria</p>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 mt-10 pt-8">
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <p class="text-sm text-gray-500">
            &copy; 2026 Ernteschwung. Alle Rechte vorbehalten.
          </p>
          <div class="flex space-x-6 mt-4 sm:mt-0">
            <a href="https://www.facebook.com/Ernteschwung" target="_blank" rel="external noopener noreferrer" class="text-gray-500 hover:text-primary transition-colors duration-200">
              <span class="sr-only">Facebook</span>
              <img :src="facebookLogo" alt="" class="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/solawi_ernteschwung/" target="_blank" rel="external noopener noreferrer" class="text-gray-500 hover:text-primary transition-colors duration-200">
              <span class="sr-only">Instagram</span>
              <img :src="instagramLogo" alt="" class="w-6 h-6" />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
