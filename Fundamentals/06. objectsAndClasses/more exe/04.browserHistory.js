function historyProcessing(input, actions) {
    let browser = input;

    for (let data of actions) {
        if (data === "Clear History and Cache") {
            browser["Open Tabs"] = [];
            browser["Recently Closed"] = [];
            browser["Browser Logs"] = [];
            continue;
        }
        let [action, info] = data.split(" ");

        if (action === "Close") {
            if (browser["Open Tabs"].includes(info)) {
                let indexOf = browser["Open Tabs"].indexOf(info);
                browser["Open Tabs"].splice(indexOf, 1);
                browser["Recently Closed"].push(info);
                let logInfo = `${action} ${info}`;
                browser["Browser Logs"].push(logInfo);
            }
        } else if (action === "Open") {
            browser["Open Tabs"].push(info);
            let logInfo = `${action} ${info}`;
            browser["Browser Logs"].push(logInfo);
        }
    }

    console.log(browser["Browser Name"]);

    for (let [entry, values] of Object.entries(browser)) {
        if (entry === "Browser Name") {
            continue;
        }
        console.log(`${entry}: ${values.join(", ")}`);
    }
}

historyProcessing({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);
console.log("------------");
historyProcessing({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);