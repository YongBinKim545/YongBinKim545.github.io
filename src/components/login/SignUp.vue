<template>
    <v-card flat width="300" height="400" style="overflow-y: scroll;">
        <div class="mx-6 my-4">
            <v-form @submit.prevent ref="formContainer">
                <v-text-field v-model="signUpFormData.userId" @focus="actionFocus" @blur="actionBlur"
                    @keyup.enter="handlingKeyUp" density="compact" variant="outlined" rounded
                    append-inner-icon="mdi-account" label="ID" class="my-2" id="1">
                </v-text-field>
                <v-text-field v-model="signUpFormData.password" @focus="actionFocus" @blur="actionBlur"
                    @keyup.enter="handlingKeyUp" density="compact" variant="outlined" rounded hint="대문자, 숫자, 특수문자 포함 6~12자리"
                    :type="showPassword ? 'text' : 'password'" :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append-inner="showPassword = !showPassword" label="Password" class="my-2" id="2">
                </v-text-field>
                <!-- <v-select v-model="signUpFormData.companyName" :items="data" @focus="actionFocus" @blur="actionBlur"
                    @update:model-value="handlingSelection" density="compact" variant="outlined" rounded label="소속회사" color="black"
                    class="my-2" id="3">
                    <template v-slot:prepend-item>
                        <v-text-field v-model="companySearch" density="compact" clearable single-line variant="solo"
                            prepend-inner-icon="mdi-magnify" persistent-hint hint="소속 회사가 없으면 CM단에 등록 요청" class="mx-2"></v-text-field>
                    </template>

                </v-select> -->
                <v-autocomplete v-model="signUpFormData.companyName" :items="companyList" @focus="actionFocus"
                    @blur="actionBlur" @keyup.enter="handlingKeyUp" density="compact" variant="outlined" rounded placeholder="검색어를 넣으세요"
                    label="소속회사" class="my-2" id="3">
                    <template v-slot:prepend-item>
                        <span class="ml-3 text-caption">소속 회사가 없으면 CM단에 등록 요청</span>
                        <v-divider />
                    </template>
                </v-autocomplete>
                <!-- <v-text-field v-model="signUpFormData.companyName" @focus="actionFocus" @blur="actionBlur"
                    @keyup.enter="handlingKeyUp" density="compact" variant="outlined" rounded hint="소속 회사가 없으면 CM단에 등록 요청"
                    append-inner-icon="mdi-office-building-outline" label="소속회사" class="my-2" id="3">
                </v-text-field> -->
                <v-text-field v-model="signUpFormData.projectCode" @focus="actionFocus" @blur="actionBlur"
                    @keyup.enter="handlingKeyUp" density="compact" variant="outlined" rounded hint="현장코드는 CM단에 문의하세요"
                    append-inner-icon="mdi-numeric" label="현장코드" class="my-2" id="4">
                </v-text-field>
                <!-- <span ref="testMsg">test</span> -->
                <br />
                <div class="d-flex justify-space-between">
                    <v-btn type="submit" color="success" width="100">Validate</v-btn> <!--성공 시 success color임 -->
                    <v-btn type="submit" color="primary" width="100" @click="submit">submit</v-btn>
                </div>
            </v-form>
        </div>
    </v-card>
</template>
  
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()

interface signUpFormType {
    userId: null | string,
    password: null | string,
    companyName: null | string,
    projectCode: null | string
}
const signUpFormData: signUpFormType = reactive({
    userId: null,
    password: null,
    companyName: null,
    projectCode: null
})

// Mobile화면에서 가상 키보드가 Form 가리는 문제 해결을 위한 Code
// InputField가 Focus되면 FormStatus True, Form Container 하단에 Padding 삽입 (Scroll 가능한 상태로 만들고) -> 
const formContainer = ref<HTMLInputElement | null>(null)
const showPassword = ref(false)
const focusStatus = ref(false)
// const testMsg = ref<HTMLInputElement | null>(null)

// to be received from DB and pinia state
// const companySearch = ref<string | null>('')
const companyList = [
    'GS 건설',
    'XI C&A',
    'LT 삼보',
    'GS 네오텍',
    '철골 A사',
    '철골 B사'
]

// const data: Ref<string[]> = computed(() => {
//     return filterData(companyList, companySearch.value)
// })

function actionFocus(event: Event) {
    if (!mobile.value) return
    const targetElement = event.target as HTMLElement
    const targetElementID = Number(targetElement.id)
    if (targetElementID === 1) return
    if (formContainer.value === null) return
    formContainer.value.style.paddingBottom = 500 + 'px'
    //DOM 직접 제어 부분 좀 재검토 필요... 내용을 바꾼 건 아니고 스크롤만 하는 거니 괜찮을 수도...
    const upperElement = document.getElementById((targetElementID - 1).toString()) as HTMLElement
    //Safari에서 Enter로 다음 Item Focus시켰을 때 스크롤 동작을 위해 timeout 설정
    setTimeout(() => {
        upperElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
    // upperElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // if (testMsg.value === null) return
    // testMsg.value.innerHTML = 'scroll to' + upperElement.id
    focusStatus.value = true
}

function actionBlur() {
    if (!mobile.value) return
    //Focus된 Item이 바뀌면 기존 Item Blur되고, 새로운 Item Focus될 때 불필요한 Padding 삽입과 제거가 반복 / Timer를 넣어서 Focus Item이 바뀐 것이면 패딩 0으로 바꾸지 않음 
    focusStatus.value = false
    setTimeout(() => {
        if (formContainer.value === null) return
        if (focusStatus.value) return
        formContainer.value.style.paddingBottom = 0 + 'px'
    }, 200)
}

function handlingKeyUp(event: Event) {
    const targetElement = event.target as HTMLElement
    const targetElementID = Number(targetElement.id)
    if (targetElementID === 4) {
        targetElement.blur()
        return
    }
    // DOM 직접 제어 부분 좀 재검토 필요... 이건 focus 속성을 바꾸고 있음
    // 아이폰에서 enter key로 다음 아이템 focus 시 직접 Click해서 Focus 시킨것과 Action 다름
    const nextElement = document.getElementById((targetElementID + 1).toString()) as HTMLElement
    nextElement.focus()
}

// function filterData(list: string[], query: string | null) {
//     if (!query) return list
//     return list.filter((el) => el.toLowerCase().includes(query.toLowerCase()))
// }

function submit() {
    console.log(signUpFormData)
}

// onMounted(() => {
//     filterData(companyList, '')
// })
</script>
  
<style lang="scss" scoped>
// .form-container {
//     transition: all 0.3s ease;
// }
</style>