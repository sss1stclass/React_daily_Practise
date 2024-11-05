import { useState } from 'react';
const TemperatureInput = ({ temperature, onTemperatureChange }:any)=> {
    return (
        <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input
                value={temperature}
                onChange={(e) => onTemperatureChange(e.target.value)}
            />
        </fieldset>
    );
}

function BoilingVerdict({ temperature }:any) {
    return temperature >= 100
        ? <p>The water is boiling.</p>
        : <p>The water is not boiling.</p>;
}

function TestComponent() {
    const [temperature, setTemperature] = useState('');

    return (
        <div>
            <TemperatureInput
                temperature={temperature}
                onTemperatureChange={setTemperature}
            />
            <BoilingVerdict temperature={temperature} />
        </div>
    );
};

export default TestComponent;