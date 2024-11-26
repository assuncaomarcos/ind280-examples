import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function App() {
    const [selectedValue, setSelectedValue] = useState("option1");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <FormControl>
            <FormLabel>Choisissez une option</FormLabel>
            <RadioGroup value={selectedValue} onChange={handleChange}>
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
            </RadioGroup>
        </FormControl>
    );
}

export default App;