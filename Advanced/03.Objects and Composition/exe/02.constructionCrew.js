function solve(worker) {
    if(worker.dizziness === true) {
        let hydrationNeeded = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += hydrationNeeded;
        worker.dizziness = false;
        return worker;
    } else {
        return worker;
    }
}

const worker = { weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
   

solve(worker)

