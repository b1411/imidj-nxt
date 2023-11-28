export const useCartStore = defineStore("cart", () => {
    const cart = ref([]);
    const addToCart = (item) => {
        cart.value.push(item);
        localStorage.setItem("cart", JSON.stringify(cart.value));
    };
    const deleteFromCart = (item) => {
        const index = cart.value.indexOf(item);
        cart.value.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart.value));
    };
    const clearCart = () => (cart.value = []);
    const getCartCount = computed(() => cart.value.length);
    const getCardTotal = computed(() => {
        return cart.value.reduce((total, item) => total + item.price, 0);
    });
    return {
        cart,
        addToCart,
        deleteFromCart,
        clearCart,
        getCartCount,
        getCardTotal,
    };
});

export const useFavoriteStore = defineStore("favorite", () => {
    const favorite = ref([]);
    const addToFavorite = (item) => {
        favorite.value.push(item);
        localStorage.setItem("favorite", JSON.stringify(favorite.value));
    };
    const deleteFromFavorite = (item) => {
        const index = favorite.value.indexOf(item);
        favorite.value.splice(index, 1);
        localStorage.setItem("favorite", JSON.stringify(favorite.value));
    };
    const clearFavorite = () => (favorite.value = []);
    const getFavoriteCount = computed(() => favorite.value.length);
    return {
        favorite,
        addToFavorite,
        deleteFromFavorite,
        clearFavorite,
        getFavoriteCount,
    };
});

export const useCategories = defineStore("categories", () => {
    const categories = reactive([
        { name: "Ручки", paramName: "pens" },
        { name: "Термосы, термостаканы", paramName: "thermoses" },
        { name: "Бутылки для питья", paramName: "bottles" },
        { name: "Кружки", paramName: "mugs" },
        { name: "Блокноты", paramName: "notebooks" },
        { name: "Ежедневники", paramName: "diaries" },
        { name: "Зонты", paramName: "umbrellas" },
        { name: "PowerBank", paramName: "powerbanks" },
        { name: "Кардхолдеры, визитницы", paramName: "cardholders" },
        { name: "Рюкзаки, сумки для ноутбука", paramName: "backpacks" },
        { name: "Брелоки", paramName: "keychains" },
        { name: "Футболки, Поло", paramName: "tshirts" },
    ]);
    return {
        categories,
    };
});
