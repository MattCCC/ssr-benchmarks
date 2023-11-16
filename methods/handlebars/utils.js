import fs from "fs";

export const getMean = (data) => {
    return data.reduce(function (a, b) {
        return Number(a) + Number(b);
    }) / data.length;
}

export const getStandardDevitation = (data) => {
    const m = getMean(data);
    return Math.sqrt(data.reduce(function (sq, n) {
        return sq + Math.pow(n - m, 2);
    }, 0) / (data.length - 1));
}


export const writeResult = (methodName, time) => {
    console.info("================ RESULT ================");
    const durations = time.map(t => (t[0] + t[1] / 1e9) * 1e3);

    durations.forEach((d, i) => {
        console.info(`Run ${i} took `, d, "ms");
    });

    console.info("================ SUMMARY ================");
    console.info(`[${methodName}]`);
    console.info(
        "Average is:",
        durations.reduce((a, b) => a + b) / durations.length,
        "ms"
    );

    const stdev = getStandardDevitation(durations);
    console.info("Stdev is:", stdev, "ms");

    fs.writeFileSync("./dist/result.json", JSON.stringify({
        name: methodName,
        average: durations.reduce((a, b) => a + b) / durations.length,
        stdev: stdev,
    }));
}
