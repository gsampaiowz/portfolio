import handler from '@/api/contact'

export const sendContactForm = async (data) => fetch(handler, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})