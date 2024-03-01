import { supabase } from "./supabase"

export async function addEmail(formData: FormData) {
    "use server"
    const email = formData.get('email')
    const { data, error } = await supabase.from('newsletter').insert([{ email: email }])

    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
}

export async function registerForm(formData: FormData) {
    "use server"
    const name = formData.get('name')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const country = formData.get('country')
    const age = formData.get('age')
    const weight = formData.get('weight')
    const gender = formData.get('gender')
    const date = formData.get('date')

    const { data, error } = await supabase.from('registro').insert([{ name: name, lastName: lastName, email: email, country: country, age: age, weight: weight, gender: gender, date: date }])

    if (data) {
        return data
    }
    if (error) {
        console.log(error)
    }
}