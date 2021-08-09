import Promise from 'bluebird';

export function ListOfAllCharacters() {
    const result = fetch("https://www.breakingbadapi.com/api/characters")
    .then(response => {
        console.log(response);
        return response.json();
    }).catch((error) => {
        console.log(error);
    })

    return new Promise.resolve(result);
}

export function NameBasedSearch(characterName) {
    const result = fetch("https://www.breakingbadapi.com/api/characters?name="+characterName)
    .then(response => {
        //console.log(response);
        return response.json();
    }).catch((error) => {
        console.log(error);
    });

    return new Promise.resolve(result);
}

export function QuoteBasedSearch(characterName) {
    const result = fetch("https://www.breakingbadapi.com/api/quote?author="+characterName)
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        return data;
    })
    .catch((error) => {
        console.log(error);
    });

    return new Promise.resolve(result);
}