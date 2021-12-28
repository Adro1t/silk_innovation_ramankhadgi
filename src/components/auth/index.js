
//for signin
export const signin = (user) => {
    //hitting the route from backend
    return fetch(`https://stagingapi.icash.com.np/api/login`, {
        method: "POST",
        headers: {
            "App-Authorizer": 647061697361,
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
        //converting data into string   
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })

}

//to authenticate
export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data))
        next()
    }
}

//redirect if authenticated by user role
export const isAuthenticated = () => {
    if (typeof window === undefined) {
        return false
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    } else {
        return false
    }
}

export const signout = (next) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt', JSON.stringify('jwt'));
        next();
        return fetch(`https://stagingapi.icash.com.np/api/signout`, {
            method: "POST",
        })
            .then(response => {
                console.log('signout', response)
            })
            .catch(err => console.log(err))
    }
}