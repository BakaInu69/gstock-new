export async function loadBlob(url) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'image/png');
    // myHeaders.append('Cache-Control', 'public no-cache maxAge=1000000');
    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'no-cache'
    };
    const response = await fetch(url, <RequestInit>myInit)
    const blob = response.status !== 404 ? await response.blob() : null;
    return blob
}
