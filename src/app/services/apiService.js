

async function fetchData() {
    try {
        const response = await fetch('http://188.120.246.243/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export { fetchData };
