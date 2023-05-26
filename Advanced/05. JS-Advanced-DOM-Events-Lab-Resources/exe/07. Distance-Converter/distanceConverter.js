function attachEventsListeners() {
    // capture button
    const convertBtn = document.getElementById("convert");
    const RATIOS_METRIC = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }



    convertBtn.addEventListener("click", convert);
    function convert(e) {
        //capture input data
        const inputDistance = Number(document.getElementById("inputDistance").value);
        const outputResult = document.getElementById("outputDistance");

        const inputUnit = document.getElementById("inputUnits").value;
        const outputUnit = document.getElementById("outputUnits").value;

        const convertedDistance = (inputDistance * RATIOS_METRIC[inputUnit]) / RATIOS_METRIC[outputUnit];
        outputResult.value = convertedDistance;
    }
}