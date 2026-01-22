import { ref, computed, watch } from "vue"

export const firstName = ref("David")
export const lastName = ref("Sabau")
export const fullName = computed(() => `${firstName.value} ${lastName.value}`)

const savedUser = localStorage.getItem("user")

if (savedUser) {
  const parsed = JSON.parse(savedUser)
  firstName.value = parsed.firstName ?? firstName.value
  lastName.value = parsed.lastName ?? lastName.value
}

export const draftFirstName = ref(firstName.value)
export const draftLastName = ref(lastName.value)

export const updateUserInfo = () => {
  firstName.value = draftFirstName.value
  lastName.value = draftLastName.value
}

watch(lastName, (newName, oldName) => {
  alert(`Congratulations! \n We wish you a wonderful marriage! \n ${newName} sounds nice :)`)
})

watch([firstName, lastName], () => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      firstName: firstName.value,
      lastName: lastName.value
    })
  )
})
