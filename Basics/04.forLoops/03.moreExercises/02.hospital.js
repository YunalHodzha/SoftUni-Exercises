function hospital(input) {
    let period = Number(input[0]);
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let doctors = 7;

    for ( let i=1; i <= period; i++) {
        if (input[i] <= doctors ) {
            if ( i % 3 == 0) {
                if (treatedPatients < untreatedPatients) {
                    doctors ++;
                }
            }
            treatedPatients += Number(input[i]);
        }else if (input[i] > doctors) {
            if ( i % 3 == 0) {
                if (treatedPatients < untreatedPatients) {
                    doctors ++;
                }
            }
            treatedPatients += doctors;
            untreatedPatients += (Number(input[i]) - doctors)
            
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`)
}

hospital(["3", "7", "7", "7"])