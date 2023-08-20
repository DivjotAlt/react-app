import { useState } from "react";

const ToggleContent = () => {
    const [IsVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!IsVisible);
    }

    return (
        <div>
            <button type="button" onClick={toggleVisibility}>Toggle content</button>
            {IsVisible && <p>This content's visibility can be toggled</p>}
        </div>
    )
}

export default ToggleContent;