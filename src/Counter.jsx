import { useState } from "react";



function MyComponent() {

    const [count, updateCount] = useState(0);

    function increment() {
        updateCount(count + 1);
    }

    function decrement() {
        updateCount(count - 1);
    }

    function reset() {
        updateCount(0);
    }


    return (
        <div className="counter">
            <p className="count_value">{count}</p>
            <button className="button" onClick={() => increment()}>Increment</button>
            <button className="button" onClick={() => decrement()}>Decrement</button>
            <button className="button" onClick={() => reset()}>Reset</button>

        </div>

    );
}

export default MyComponent;