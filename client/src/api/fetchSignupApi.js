export const getSignup=(user)=>{
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

export const getLogin=(user)=>{
    return fetch("/api/login",{
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