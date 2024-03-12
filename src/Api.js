import { md5 } from 'js-md5';
let date = new Date();
let mounth = '' + (date.getMonth() + 1);
if (mounth.length === 1) {
    mounth = '0' + mounth;
}
let day = '' + date.getDate();
if (day.length === 1) {
    day = '0' + date.getDate();
}
let dateNow = '' + date.getFullYear() + mounth + day;
let hash = md5(`Valantis_${dateNow}`);

export async function getIdsOne() {
    let response = await fetch(`https://api.valantis.store:41000/`, {
        headers: {
            'X-Auth': hash,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            action: 'get_ids',
            params: { offset: 0, limit: 50 },
        }),
    });
    return await response.json();
}
export async function getIdsTwo() {
    let response = await fetch(`https://api.valantis.store:41000/`, {
        headers: {
            'X-Auth': hash,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            action: 'get_ids',
            params: { offset: 50, limit: 100 },
        }),
    });
    return await response.json();
}
export async function getIdsThree() {
    let response = await fetch(`https://api.valantis.store:41000/`, {
        headers: {
            'X-Auth': hash,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            action: 'get_ids',
            params: { offset: 100, limit: 150 },
        }),
    });
    return await response.json();
}
export async function getIdsFour() {
    let response = await fetch(`https://api.valantis.store:41000/`, {
        headers: {
            'X-Auth': hash,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            action: 'get_ids',
            params: { offset: 150, limit: 200 },
        }),
    });
    return await response.json();
}
export async function getItems(ids) {
    let response = await fetch(`https://api.valantis.store:41000/`, {
        headers: {
            'X-Auth': hash,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            action: 'get_items',
            params: { ids: ids },
        }),
    });
    return await response.json();
}
export async function getFields() {
    let response = await fetch(`https://api.valantis.store:41000/`, {
        headers: {
            'X-Auth': hash,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            action: 'get_fields',
            params: { field: 'brand', offset: 0, limit: 200 },
        }),
    });
    return await response.json();
}
export async function filterBrandItems(brandName) {
    let response = await fetch(`https://api.valantis.store:41000/`, {
        headers: {
            'X-Auth': hash,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            action: 'filter',
            params: { brand: brandName },
        }),
    });
    return await response.json();
}
export async function filterPriceItems(itemPrice) {
    let response = await fetch(`https://api.valantis.store:41000/`, {
        headers: {
            'X-Auth': hash,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            action: 'filter',
            params: { price: itemPrice },
        }),
    });
    return await response.json();
}
export async function filterProduct(itemName) {
    let response = await fetch(`https://api.valantis.store:41000/`, {
        headers: {
            'X-Auth': hash,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            action: 'filter',
            params: { product: itemName },
        }),
    });
    return await response.json();
}
