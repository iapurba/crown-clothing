
import { createSelector } from 'reselect';


// Input selector: takes whole state and return just a slice of it.
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
);

export const selectTotalPrice = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedPrice, cartItem) =>
                accumulatedPrice + cartItem.quantity * cartItem.price,
            0
        )
);