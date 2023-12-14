<template>
    <v-card flat width="300" height="400" style="overflow-y: scroll;">
        <div class="mx-6 my-2" ref="formContainer">
            <v-form @submit.prevent validate-on="lazy" ref="formRef">
                <v-carousel v-model="currentSlide" hide-delimiter-background :show-arrows="false" hide-delimiters
                    height="100%">
                    <v-carousel-item :value="1">
                        <v-text-field v-model="signUpFormData.userName" :rules="nameRules" @focus="handleFocus"
                            @blur="handleBlur" @keyup.enter="handleKeyUp" density="compact" variant="outlined" rounded
                            append-inner-icon="mdi-account" label="Name" class="my-2" id="1">
                        </v-text-field>
                        <v-text-field v-model="signUpFormData.userMobile" :rules="mobileRules" @focus="handleFocus"
                            @blur="handleBlur" @keyup.enter="handleKeyUp" @input="formatMobileNumber" density="compact"
                            variant="outlined" rounded hint="숫자만 입력하세요" append-inner-icon="mdi-cellphone" label="Mobile"
                            class="my-2" id="2">
                        </v-text-field>
                        <v-text-field v-model="signUpFormData.userEmail" :rules="emailRules" @focus="handleFocus"
                            @blur="handleBlur" @keyup.enter="handleKeyUp" density="compact" variant="outlined" rounded
                            append-inner-icon="mdi-email-outline" label="Email" class="my-2" id="3">
                        </v-text-field>
                    </v-carousel-item>
                    <v-carousel-item :value=2>
                        <v-text-field v-model="signUpFormData.userId" :rules="idRules" @focus="handleFocus"
                            @blur="handleBlur" @keyup.enter="handleKeyUp" density="compact" variant="outlined" rounded
                            append-inner-icon="mdi-account" label="ID" class="my-2" id="4">
                        </v-text-field>
                        <v-text-field v-model="signUpFormData.password" :rules="passwordRules" @focus="handleFocus"
                            @blur="handleBlur" @keyup.enter="handleKeyUp" density="compact" variant="outlined" rounded
                            hint="대문자, 숫자, 특수문자 포함 6~12자리" :type="showPassword ? 'text' : 'password'"
                            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append-inner="showPassword = !showPassword" label="Password" class="my-2" id="5">
                        </v-text-field>
                        <v-autocomplete v-model="signUpFormData.companyName" :items="companyList" :rules="companyRules"
                            @focus="handleFocus" @blur="handleBlur" @keyup.enter="handleKeyUp" density="compact"
                            variant="outlined" rounded placeholder="검색어를 넣으세요" label="소속회사" class="my-2" id="6">
                            <template v-slot:prepend-item>
                                <span class="ml-3 text-caption">소속 회사가 없으면 CM단에 등록 요청</span>
                                <v-divider />
                            </template>
                        </v-autocomplete>
                        <v-text-field v-model="signUpFormData.projectCode" @focus="handleFocus" @blur="handleBlur"
                            @keyup.enter="handleKeyUp" density="compact" variant="outlined" rounded hint="현장코드는 CM단에 문의하세요"
                            append-inner-icon="mdi-numeric" label="현장코드" class="my-2" id="7">
                        </v-text-field>
                    </v-carousel-item>
                </v-carousel>
                <!-- <span ref="testMsg">test</span> -->
                <div class="form-action-group">
                    <div class="d-flex justify-space-around align-center">
                        <v-btn variant="text" icon="mdi-chevron-left" @click="navigateSlide(-1)"></v-btn>
                        {{ currentSlide }} / 2
                        <v-btn variant="text" icon="mdi-chevron-right" @click="navigateSlide(1)"></v-btn>
                    </div>
                    <div class="d-flex justify-space-between">
                        <v-btn color="success" width="100" :disabled="currentSlide < 2" @click="validate">Validate</v-btn>
                        <!--성공 시 success color임 -->
                        <v-btn type="submit" color="primary" width="100" :disabled="currentSlide < 2"
                            @click="submit">submit</v-btn>
                    </div>
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
    userName: null | string,
    userMobile: null | string,
    userEmail: null | string,
    userId: null | string,
    password: null | string,
    companyName: null | string,
    projectCode: null | string
}
const signUpFormData: signUpFormType = reactive({
    userName: null,
    userMobile: null,
    userEmail: null,
    userId: null,
    password: null,
    companyName: null,
    projectCode: null
})

// Mobile화면에서 가상 키보드가 Form 가리는 문제 해결을 위한 Code
// InputField가 Focus되면 FormStatus True, Form Container 하단에 Padding 삽입 (Scroll 가능한 상태로 만들고) -> 
const formContainer = ref<HTMLInputElement | null>(null)
const formRef = ref<any | null>(null)
const showPassword = ref(false)
const focusStatus = ref(false)
const currentSlide = ref(1)
const companyList = [
    'GS 건설',
    'XI C&A',
    'LT 삼보',
    'GS 네오텍',
    '철골 A사',
    '철골 B사',
    'RC A사',
    'RC B사'
]

const nameRules = [
    (v: string) => !!v || 'Name is required',
    (v: string) => {
        const invalidCharacter = v.match(/[^a-zA-Z가-힣]/);
        return !invalidCharacter || `Invalid character '${invalidCharacter[0]}' in the ID`;
    },
    (v: string) => (v && v.length <= 20) || 'ID must be less than 20 characters'
]
const mobileRules = [
    (v: string) => !!v || 'Mobile is required',
    (v: string) => {
        const mobileNumber = v.replace(/-/g, "")
        return !isNaN(Number(mobileNumber)) || '잘못된 입력입니다';
    }
]
const idRules = [
    (v: string) => !!v || 'ID is required',
    (v: string) => {
        const invalidCharacter = v.match(/[^a-zA-Z0-9_.-]/);
        console.log(invalidCharacter)
        return !invalidCharacter || `Invalid character '${invalidCharacter[0]}' in the ID`;
    },
    (v: string) => (v && v.length <= 20) || 'ID must be less than 20 characters'
]

const emailRules = [
    (v: string) => !!v || 'Email is required',
    (v: string) => (/.+@.+\..+/.test(v)) || 'E-mail must be valid.'
]
const passwordRules = [
    (v: string) => !!v || 'Password is required',
    (v: string) => (v && /\d/.test(v)) || 'must include at least one number',
    (v: string) => (v && /[a-z]/.test(v)) || 'must include at least one lowercase letter',
    (v: string) => (v && /[A-Z]/.test(v)) || 'must include at least one uppercase letter',
    (v: string) => (v && /[!@#$%^&*()><?/[\]{}]/.test(v)) || 'Password must include at least one special character',
    (v: string) => (v && v.length >= 6 && v.length <= 10) || 'Password must be 6-10 characters',
]
const companyRules = [
    (v: string) => !!v || 'Company Name is required',
    // list는 name fileld input이 변경되면 event에 맞춰 load
    // (v: string) => (companyList.includes(v)) || 'Select a company name in the list',
]
const projectCodeRules = [
    (v: string) => !!v || 'Company Name is required',
    //validation button click 시 입력된 code가 db에 있는 지 check
]
function handleFocus(event: Event) {
    if (!mobile.value) return
    const targetElement = event.target as HTMLElement
    const targetElementID = Number(targetElement.id)
    if (targetElementID === 1 || targetElementID === 4) return
    if (formContainer.value === null) return
    formContainer.value.style.paddingBottom = 500 + 'px'
    //DOM 직접 제어 부분 좀 재검토 필요... 내용을 바꾼 건 아니고 스크롤만 하는 거니 괜찮을 수도...
    const upperElement = document.getElementById((targetElementID - 1).toString()) as HTMLElement
    //Safari에서 Enter로 다음 Item Focus시켰을 때 스크롤 동작을 위해 timeout 설정
    setTimeout(() => {
        upperElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
    focusStatus.value = true
}

function handleBlur() {
    if (!mobile.value) return
    //Focus된 Item이 바뀌면 기존 Item Blur되고, 새로운 Item Focus될 때 불필요한 Padding 삽입과 제거가 반복 / Timer를 넣어서 Focus Item이 바뀐 것이면 패딩 0으로 바꾸지 않음 
    focusStatus.value = false
    setTimeout(() => {
        if (formContainer.value === null) return
        if (focusStatus.value) return
        formContainer.value.style.paddingBottom = 0 + 'px'
    }, 200)
}

function handleKeyUp(event: Event) {
    const targetElement = event.target as HTMLElement
    const targetElementID = Number(targetElement.id)
    if (targetElementID === 3) {
        currentSlide.value = 2
        return
    }
    if (targetElementID === 7) {
        targetElement.blur()
        return
    }
    // DOM 직접 제어 부분 좀 재검토 필요... 이건 focus 속성을 바꾸고 있음
    // 아이폰에서 enter key로 다음 아이템 focus 시 직접 Click해서 Focus 시킨것과 Action 다름
    const nextElement = document.getElementById((targetElementID + 1).toString()) as HTMLElement
    nextElement.focus()
}
function navigateSlide(offset: number) {
    //시작 페이지 1, 마지막 페이지 2
    currentSlide.value = Math.max(1, Math.min(currentSlide.value + offset, 2));
}
function formatMobileNumber(event: Event) {
    if (signUpFormData.userMobile === null) return
    let inputStr = signUpFormData.userMobile.replace(/[^0-9]/g, "")
    if (inputStr.length < 4) return
    if (inputStr.length > 11) {
        inputStr = inputStr.substring(0, 11)
    }

    let regex = '';
    switch (true) {
        case (inputStr.length < 7):
            regex = "(\\d{3})" + "(\\d{" + (inputStr.length - 3) + "})"
            signUpFormData.userMobile = inputStr.replace(new RegExp(regex, "g"), "$1-$2")
            break;
        case (inputStr.length < 11):
            regex = "(\\d{3})(\\d{3})" + "(\\d{" + (inputStr.length - 6) + "})";
            signUpFormData.userMobile = inputStr.replace(new RegExp(regex, "g"), "$1-$2-$3")
            break;
        default:
            regex = "(\\d{3})(\\d{4})" + "(\\d{" + (inputStr.length - 7) + "})";
            signUpFormData.userMobile = inputStr.replace(new RegExp(regex, "g"), "$1-$2-$3")
    }
}

const validate = async () => {
    //입력 값 형식 validation
    const { valid } = await formRef.value?.validate()
    if (valid) {
        // Form 입력값 유효성 검사 Pass -> axios로 서버에 중복 (ID, Email) 확인, 데이터가 있는 지 확인 (현장 코드) 후 최종 Validation 완료
        alert('submit 가능 상태로 바꿈') // 성공 시
        //실패 시 실패한 위치로 focus 이동
    } else {
        // Form 입력값 유효성 검사 fail 시 (Server에 Validation 요청하지 않음)
        alert('validation 실패, 실패한 위치로 이동')
    }
}
function submit() {
    console.log(signUpFormData)
}

</script>
  
<style lang="scss" scoped>
.form-action-group {
    position: absolute;
    width: 245px;
    top: 280px;
}
</style>