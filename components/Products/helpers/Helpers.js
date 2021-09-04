// REDUX STORE
import appStore from "redux/store/store";
const appState = appStore.getState();

// TO GENERATE CART ITEM TO SAVE
export const generateCartItem = (item) => {
    // if item exists
    if (item) {
        console.log("appStore state ", appState);
        console.log("copyCartItems ", copyCartItems);
        console.log("item ", item);
    }
};
