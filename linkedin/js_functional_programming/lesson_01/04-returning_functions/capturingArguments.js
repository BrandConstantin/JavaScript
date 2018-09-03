function createCounter(count) {

    return {
        increment: function() {
            count = count + 1
        },

        currentValue: function() {
            return count
        }
    }
}

var counterStartingAt5 = createCounter(5)

var counterStartingAtMinus2 = createCounter(-2)