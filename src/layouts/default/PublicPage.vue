<template>
  <v-app>
    <v-main style="background-color: #EEEEEE;">
      <router-view />
      <v-footer app color="transparent">
        <v-tooltip left>
          <template v-slot:activator="{ props }">
            <v-card-subtitle v-bind="props">Memo</v-card-subtitle>
          </template>
          <template v-slot:default>
            <ol>
              <li>Login 계정에 따라 본사/현장 Redirect</li>
              <li>My LGID 또는 DNO SSO를 통한 login은 바로처리 후 프로젝트 권한 요청 Page로 Redirect</li>
              <li>My LGID 외 외부 사용자는 Sign-Up 시 프로젝트 코드 입력 필수 / 프로젝트 담당자 승인 후 Sign-Up 완료</li>
              <li>Label, Btn Contents, Canendar 등 i18n 적용</li>
            </ol>
          </template>
        </v-tooltip>
        <v-spacer></v-spacer>
        <span>임시</span>
        <v-list-item variant="outlined" :to="{ name: 'HeadOfficeHome' }" class="mx-2">HeadOffice</v-list-item>
        <v-list-item variant="outlined" :to="{ name: 'ProjectHome' }">Project</v-list-item>
      </v-footer>
    </v-main>
  </v-app>
</template> 
<script lang="ts" setup>
</script>