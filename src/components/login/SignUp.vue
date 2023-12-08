<template>
    <div>
        <div class="ma-2 pa-2">
            <v-text-field v-model="userID" density="compact" variant="outlined" outlined rounded
                append-inner-icon="mdi-account">
                <template v-slot:label>
                    <span class="text-body-2">ID</span>
                </template>
            </v-text-field>
            <v-text-field v-model="email" density="compact" variant="outlined" outlined rounded
                placeholder="name@domain.com" type="email" append-inner-icon="mdi-email-outline">
                <template v-slot:label>
                    <span class="text-body-2">Email</span>
                </template>
            </v-text-field>
            <v-text-field v-model="mobile" density="compact" variant="outlined" outlined rounded
                append-inner-icon="mdi-cellphone">
                <template v-slot:label>
                    <span class="text-body-2">Mobile</span>
                </template>
            </v-text-field>
            <v-text-field v-model="projectCode" density="compact" variant="outlined" outlined rounded hint="CM단에 문의하세요"
                append-inner-icon="mdi-numeric">
                <template v-slot:label>
                    <span class="text-body-2">Project Code</span>
                </template>
            </v-text-field>
            <v-text-field v-model="password" density="compact" variant="outlined" outlined rounded
                hint="6~10자리, 대소문자, 숫자, 특수문자 포함" :type="showPassword ? 'text' : 'password'"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showPassword = !showPassword">
                <template v-slot:label>
                    <span class="text-body-2">Password</span>
                </template>
            </v-text-field>
            <br/>
            <div class="d-flex justify-space-between">
                <v-btn type="submit" color="success" width="100">Validate</v-btn> <!--성공 시 success color임 -->
                <v-btn type="submit" color="primary" width="100">submit</v-btn>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, Ref, reactive } from 'vue';
const userID: Ref<undefined | null | string> = ref();
const email: Ref<undefined | null | string> = ref();
const mobile: Ref<undefined | null | string> = ref();
const projectCode: Ref<undefined | null | string> = ref();
const password: Ref<undefined | null | string> = ref();
const showPassword = ref(false)


// 다음 코드 완성하서 위에 개별로 정의된 내용 대체하고, textfield v-for 구문으로 대체
interface UserFormData {
    type: string,
    title: string,
    icon?:string,
    validate: boolean,
    hint: string | null,
    value: string | null
}
const formData: UserFormData[] = reactive([
    {
        type: 'text',
        title: 'ID',
        validate: false,
        hint: '',
        value: ''
    },
    {
        type: 'email',
        title: 'Email',
        validate: false,
        hint: '',
        value: ''
    },
    {
        type: 'mobile',
        title: 'ID',
        validate: false,
        hint: '',
        value: ''
    },
    {
        type: 'text',
        title: 'ID',
        validate: false,
        hint: '',
        value: ''
    },
    {
        type: 'text',
        title: 'ID',
        validate: false,
        hint: '',
        value: ''
    }
])

</script>
  
<style lang="scss" scoped></style>