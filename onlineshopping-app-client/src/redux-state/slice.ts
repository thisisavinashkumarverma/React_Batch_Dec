import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: "userCart",
    initialState: {
        cartDetails: {
            totalNoOfItemsInCart: 0,
            totalPriceOfItemsInCart: 0
        }
    },
    reducers: {
        incrementCart: (state, action:any) => {
            console.log("frm incrementCart ")
            console.log(state)
            var tempData:any = state.cartDetails[action.payload.productId];
            if (tempData) { //if the product already added, then just increment count 
                tempData.count++;
            } else { // if the product is newly added , add the id entry 
                tempData =  {count: 1};
            }
            var obj:any = {};
            obj[action.payload.productId] = tempData;
            state.cartDetails = {...state.cartDetails, ...obj};    
            state.cartDetails.totalNoOfItemsInCart = state.cartDetails.totalNoOfItemsInCart + 1; // this is for total count of items in cart, which will be shown in header near cart icon
        },
        decrementCart: (state, action:any) => {
            if (action.payload.isProductCountDecrement) { // this condition is for decrementing the count when user click on decrement button from view cart page, in that case we will not remove the product entry from cartDetails object until count becomes 0, but when user click on remove button from view cart page, then we will remove the product entry from cartDetails object directly without checking for count and in that case we will pass isProductCountDecrement as false
                state.cartDetails[action.payload.productId].count--;
                state.cartDetails.totalNoOfItemsInCart--;
            } else {
                var tempData:any = state.cartDetails[action.payload.productId];
                delete state.cartDetails[action.payload.productId];
                state.cartDetails.totalNoOfItemsInCart = state.cartDetails.totalNoOfItemsInCart - tempData.count;
            }
             // this is for total count of items in cart, which will be shown in header near cart icon
            
        }
        // updateName(state, action) {
        //     console.log(state);
        //     console.log(action);
        //     state.name = action.payload.name;
        // }
    }
});

export const { incrementCart, decrementCart} = cartSlice.actions;

export default cartSlice.reducer;