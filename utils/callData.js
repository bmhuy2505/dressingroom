const fetchProductData = async () => {
    try {
        const response = await fetch(
            "https://66ee0a8e380821644cde9c44.mockapi.io/DressingRoom"
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export { fetchProductData };
