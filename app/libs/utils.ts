export function formDataExtractor<T = Record<string, string>>(formData: FormData) {
  const data: Record<string, string> = {}
  formData.forEach((value, key) => {
    data[key] = value as string
  })
  return data as T
}