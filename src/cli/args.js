const parseArgs = () => {
    const args = process.argv.slice(2)

    args.forEach((val, index, arr) => {
        if (val.startsWith('--')) {
            console.log(`${val} = ${arr[index + 1]}`)
        }
    })
};

parseArgs();