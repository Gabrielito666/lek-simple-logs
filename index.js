class LekSimpleLogs{
    constructor(){
        this._color = '\x1b[33m';
        this._line = Array(100).fill('-').join('');
    }
    get line(){
        console.log(this._color + this._line);
        return this
    }
    get lines(){
        Array(10).fill(null).forEach(_=> { console.log(this._color + this._line) })
        return this
    }
    get enter(){
        console.log('\n');
        return this;
    }
    get enters(){
        Array(10).fill(null).forEach(_=> { console.log('\n') });
        return this;
    }
    get red(){
        this._color = '\x1b[31m';
        return this;
    }
    get green(){
        this._color = '\x1b[32m';
        return this;
    }
    get yellow(){
        this._color = '\x1b[33m';
        return this;
    }
    get blue(){
        this._color = '\x1b[34m';
        return this;
    }
    label(label){

        const label_100 = (98 - label.length);
        const isPar = label_100 % 2 === 0;

        const [first, second] = isPar ?
        [ (label_100 / 2), (label_100 / 2) ] : [ ((label_100 - 1) / 2), ((label_100 + 1) / 2) ];
        
        const firstLine = Array(first).fill('-').join('');
        const secondLine = Array(second).fill('-').join('');

        console.log(this._color + this._line);
        console.log(this._color + firstLine, label, secondLine);
        console.log(this._color + this._line)

        return this
    };
    log(log){
        console.log(this._color + log);
        return this;
    }
    color(color){
        this._color = color
        return this;
    }
}

const lek_simple_logs = new LekSimpleLogs();

module.exports = lek_simple_logs;