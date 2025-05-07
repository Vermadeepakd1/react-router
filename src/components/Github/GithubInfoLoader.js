export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vermadeepakd1')
    return response.json()
}