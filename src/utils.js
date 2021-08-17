export const urlEncode = (formData) => {

    return Object.keys(formData)
        .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(formData[key])}`
        )
        .join("&")

}