import React from "react";

function ResultDisplay({result}) {
    return(
        <div>
            <h3>Resultado:</h3>
            <pre>{result}</pre>
        </div>
    );
}

export default ResultDisplay;