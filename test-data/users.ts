import { ENV } from "../src/config/env";
import { getEnvVar } from "../src/utils/env_util";

// export const users = {

//     standard: {
//         username: ENV.USERNAME,
//         password: ENV.PASSWORD
//     }

// };

export const users = {

    standard: {
        username: getEnvVar('USERNAME'),
        password: getEnvVar('PASSWORD')
    },
    locked: {
        username: getEnvVar('LOCKED_USERNAME'),
        password: getEnvVar('LOCKED_PASSWORD'),
        errorMessage: 'Epic sadface: Sorry, this user has been locked out.',
        
    }
    

};