// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// Tests that clicking on the logo redirects to the home page
it('test_clicking_on_logo_should_redirect_to_home_page', () => {
    const logo = screen.getByRole('img');
    fireEvent.click(logo);
    expect(window.location.pathname).toBe('/');
});

// Tests that item_total updates when items are added to cart
it('test_item_total_updates', () => {
    const header = mount(<Header />);
    const cart = header.find('.shoppingCart');
    const itemTotal = header.find('.item_total');

    expect(itemTotal.text()).toEqual('0');

    cart.simulate('click');

    expect(itemTotal.text()).toEqual('1');
});
