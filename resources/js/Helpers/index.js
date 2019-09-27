export function login(credentials) {

    return new Promise((res, rej) =>{
        axios.post('api/auth/login', credentials)
            .then((response) => {
                // console.log(response.data);
                res(response.data);
            })
            .catch((error) => {
                rej("wrong email or password");
            })
    })
} // end login function

export function getLocalUser() {
    const userStr = localStorage.getItem('user');
    if (!userStr){
        return null;
    }
    return JSON.parse(userStr);
} // end getLocalUser function