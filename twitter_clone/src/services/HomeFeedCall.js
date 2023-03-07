export async function getTweet(id) {
    try {
        let resp = await fetch(`tweet/${id}`)
        let obj = await resp.json();
        console.log(obj)
        return obj;
    }
    catch(error){
        return [];
    }
}

export async function postTweet(data){
    const response = await fetch('api/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
    })
    return await response.json()
}