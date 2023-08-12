import type { Writable} from "svelte/store";
import { writable } from "svelte/store";
import { aj } from "./AJ";

export type User = {
    id: string;
    name: string;
}

const users: Writable<User[]> = new writable([]);

const getAll = () => {
    aj().GET<User[]>("http://127.0.0.1:4000/api/v1/user")
        .then(res => {
           users.set(res);
        });
}

const create = (user: User) => {
    users.update(users => {
        users.push(user);
        return users;
    });
}

export { getAll, create,  users }