import React, {useState} from "react"

function CommandInput({executeCommand}) {
    const [command, setCommand] = useState("");

    const handleExecute = () => {
        executeCommand(command);
        serCommand("");
    };

    return (
        <div>
            <imput
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                />
            <button onClick={handleExecute}>Ejecutar</button>
        </div>
    );
}

export default CommandInput;