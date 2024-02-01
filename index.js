class LekSimpleLogs{
    constructor(){
        this._line = Array(100).fill('-').join('');
    }
    get line(){
        console.log(this._line);
        return true
    }
    get lines(){
        Array(10).fill(null).forEach(_=> { console.log(this._line) })
        return true
    }
    label(label){

        const labelLength = label.length;
        const isPar = labelLength % 2 === 0;
        const numLines = isPar ? 50 : 49;
        const numLabel = isPar ? labelLength : (labelLength + 1);
        const lineLength = numLines - ( numLabel / 2 );
        const mediumLine = Array(lineLength).fill('-').join('');

        console.log(this._line);
        console.log(mediumLine, label, mediumLine + '-');
        console.log(this._line)
    };
}

const lek_simple_logs = new LekSimpleLogs();

module.exports = lek_simple_logs;