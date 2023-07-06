import { showCatalog } from "./catalogPage.js";

export async function logout(main) {
    let url = 'http://localhost:3030/users/logout';
    let setting = {
        method: 'Get',
        headers: {
            'X-Authorization': sessionStorage.getItem('accessToken'),
        }
    }

    let response = await fetch(url, setting);
    if (response.status === 204) {
        sessionStorage.removeItem('accessToken');
        showCatalog(main);
    }
}
