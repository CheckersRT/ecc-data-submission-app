export async function getById(url, { arg }) {
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: arg
    })
}