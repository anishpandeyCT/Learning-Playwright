import { ENV } from "../src/config/env";

export const users = {

    standard: {

        username: ENV.USERNAME,

        password: ENV.PASSWORD

    },

    locked: {

        username: ENV.USERNAME_locked,
        password: ENV.PASSWORD_lockedgit ls

    }
};
