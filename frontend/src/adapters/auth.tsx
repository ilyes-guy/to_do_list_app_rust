import axios from 'axios';
import { success } from '../contexts/userData'
import { store } from '../store'



const create_axios = () => {
    return axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            //'X-Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJzb21lX2RlZmF1bHRfaWRrIiwiZXhwIjoxNjgxODM2NDk5LCJpYXQiOjE2ODEyMzE2OTksInVzZXJfaWQiOiI2NDM1OGUwYTlhNjEwYzYzNWRkNWQ5N2EiLCJzdWIiOiJkdWRlIn0.NY082UAFXeCWX5dxl6Pw30NHDIj9tzx85m5Lt5qEWZw',
            'Access-Control-Allow-Origin': "*",
        }
    });
}




function login (email: string, password: string) {

    //axios.get(process.env.API_URL)
    create_axios().post("/login",{
            email: email,
            password: password,
        })
        .then(function (response) {
            store.dispatch(success({
                user_data: response.data.user_data,
                token: response.data.token
            }))
        })
        .catch(function (error) {
            alert("bad credentials")
        })
        .finally(function () {

        }
    );
}


function register (username: string, email: string, password: string) {

    create_axios().post("/register",{
            username: username,
            email: email,
            password: password,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            alert("bad credentials")
        })
        .finally(function () {

        }
    );
}


function verify (token: string) {

    create_axios().post("/verify",{
            token: token
        })
        .then(function (response) {
            console.log(response);
            store.dispatch(success({
                data: response.data.user_data, // get thos from local storage
                token: response.data.token
            }))
        })
        .catch(function (error) {
            alert("bad credentials")
        })
        .finally(function () {

        }
    );
}


export { login, register, verify }

