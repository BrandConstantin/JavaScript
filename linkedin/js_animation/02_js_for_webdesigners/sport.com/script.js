(function() {
    "use strict";

    // for the select
    //var selectedIdx = document.getElementById('s-state').selectedIndex;
    //var selectedValue = document.getElementById('s-state').option[selectedIdx].value;

    // for the checkbox 
    //document.getElementById('c-special-gift').checked;

    // for the radio botton
    /*document.querySelector('input[name=r_method]:checked');
    document.querySelector('input[name=r_method]:checked').value;
    document.querySelectorAll('input[name=r_method]');*/


    var state = document.getElementById('s-state');

    // disabled a field
    document.addEventListener('DOMContentLoaded', function() {
        // add event listener to the submit botton
        document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);

        // disable a field
        var btnEstimate = document.getElementById('btn-estimate');

        // disable de botton when load the page
        btnEstimate.disabled = true;

        state.addEventListener('change', function() {
            if (state.value === '') {
                btnEstimate.disabled = true;
            } else {
                btnEstimate = disabled = false;
            }
        });

    });



    function estimateTotal(event) {
        event.preventDefault();

        console.log('You submitted the form.');

        if (state.value === '') {
            alert('Please choose your shipping state.');

            state.focus();
        }

        // retrive all the data from the cart (ver todo lo que se envia por formulario)
        var itemBball = parseInt(document.getElementById('txt-q-bball').value, 10) || 0,
            itemJersey = parseInt(document.getElementById('txt-q-jersey').value, 10) || 0,
            itemPower = parseInt(document.getElementById('txt-q-power').value, 10) || 0,
            itemWater = parseInt(document.getElementById('txt-q-water').value, 10) || 0,
            shippingState = state.value,
            shippingMethod = document.querySelector('[name=r_method]:checked').value || "";

        console.log(itemBball, itemJersey, itemPower, shippingState, shippingMethod);

        // calculate the total of the shopping cart
        var totalQty = itemBball + itemJersey + itemPower + itemWater,
            shippingCostPer,
            shippingCost,
            taxFactor = 1,
            estimate,
            totalItemPrice = (90 * itemBball) + (25 * itemJersey) + (30 * itemPower) + (4 * itemWater);

        if (shippingState === 'CA') {
            taxFactor = 1.075;
        } else if (shippingState === 'WA') {
            taxFactor = 1.065;
        }

        switch (shippingMethod) {
            case 'usps':
                shippingCostPer = 2;
                break;
            case 'ups':
                shippingCostPer = 3;
                break;
            default:
                shippingCostPer = 0;
                break;
        }

        shippingCost = shippingCostPer * totalQty;

        estimate = '$' + ((totalItemPrice * taxFactor) + shippingCost).toFixed(2);

        document.getElementById('txt-estimate').value = estimate;

        // get and set with innerHTML
        var results = document.getElementById('results');

        // total items, total shipping cost, tax
        results.innerHTML = 'Total items: ' + totalQty + '<br>';
        results.innerHTML += 'Total shipping: $' + shippingCost.toFixed(2) + '<br>';
        results.innerHTML += 'Tax: ' + ((taxFactor - 1) * 100).toFixed(2) + '% (' + shippingState + ')';
    }
})();