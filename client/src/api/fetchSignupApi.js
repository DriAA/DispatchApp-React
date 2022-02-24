export const getData=(user)=>{
    return fetch("/api/register",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(
    (result) => { 
        return result
    },
    (error) => {
        return error
    })
}
