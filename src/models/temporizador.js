function getSecs() {

    let sSecs;
    let sMins;
    let sHors;

    sSecs++;


    if (sSecs === 60) {
        sSecs = 0;
        sMins++;
    }
    if (sMins === 60) {
        sMins = 0;
        sHors++;
    }
    if (sSecs <= 9) {
        sSecs = "0" + sSecs;
    }
    if (sMins <= 9) {
        sMins = "0" + sMins;
    }
    if (sHors <= 9) {
        sHors = "0" + sHors;
    }

    console.log(sSecs, sMins, sHors);

}
