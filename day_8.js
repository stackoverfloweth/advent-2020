//const input = [{instruction:'nop', amount:+0},{instruction:'acc', amount:+1},{instruction:'jmp', amount:+4},{instruction:'acc', amount:+3},{instruction:'jmp', amount:-3},{instruction:'acc', amount:-99},{instruction:'acc', amount:+1},{instruction:'jmp', amount:-4},{instruction:'acc', amount:+6}]
const input = [{instruction:'acc', amount:-9},{instruction:'jmp', amount:+1},{instruction:'acc', amount:+3},{instruction:'acc', amount:+32},{instruction:'jmp', amount:+118},{instruction:'acc', amount:+8},{instruction:'nop', amount:+405},{instruction:'jmp', amount:+179},{instruction:'acc', amount:+43},{instruction:'acc', amount:+24},{instruction:'acc', amount:+11},{instruction:'jmp', amount:+545},{instruction:'acc', amount:+26},{instruction:'acc', amount:-6},{instruction:'acc', amount:+24},{instruction:'jmp', amount:+560},{instruction:'acc', amount:+39},{instruction:'acc', amount:+42},{instruction:'jmp', amount:+1},{instruction:'jmp', amount:+457},{instruction:'acc', amount:+36},{instruction:'acc', amount:+7},{instruction:'jmp', amount:+190},{instruction:'acc', amount:-12},{instruction:'acc', amount:-10},{instruction:'acc', amount:+30},{instruction:'jmp', amount:+110},{instruction:'acc', amount:+20},{instruction:'acc', amount:+22},{instruction:'acc', amount:+20},{instruction:'jmp', amount:+513},{instruction:'acc', amount:+7},{instruction:'jmp', amount:+110},{instruction:'acc', amount:+35},{instruction:'acc', amount:+4},{instruction:'jmp', amount:+51},{instruction:'acc', amount:+42},{instruction:'acc', amount:+23},{instruction:'jmp', amount:+158},{instruction:'acc', amount:+7},{instruction:'jmp', amount:+156},{instruction:'acc', amount:-15},{instruction:'acc', amount:-7},{instruction:'acc', amount:+27},{instruction:'jmp', amount:+30},{instruction:'jmp', amount:+141},{instruction:'acc', amount:+33},{instruction:'jmp', amount:+12},{instruction:'acc', amount:+5},{instruction:'acc', amount:+4},{instruction:'nop', amount:+49},{instruction:'jmp', amount:+296},{instruction:'acc', amount:+46},{instruction:'nop', amount:+358},{instruction:'acc', amount:-3},{instruction:'jmp', amount:+276},{instruction:'acc', amount:-1},{instruction:'acc', amount:+22},{instruction:'jmp', amount:+220},{instruction:'nop', amount:+178},{instruction:'acc', amount:+34},{instruction:'jmp', amount:+363},{instruction:'jmp', amount:+4},{instruction:'acc', amount:+2},{instruction:'jmp', amount:+173},{instruction:'jmp', amount:+484},{instruction:'acc', amount:+26},{instruction:'acc', amount:+2},{instruction:'acc', amount:-10},{instruction:'jmp', amount:+58},{instruction:'nop', amount:+137},{instruction:'acc', amount:-17},{instruction:'acc', amount:+15},{instruction:'jmp', amount:-14},{instruction:'acc', amount:+27},{instruction:'jmp', amount:+512},{instruction:'jmp', amount:+415},{instruction:'jmp', amount:+489},{instruction:'jmp', amount:-12},{instruction:'acc', amount:+34},{instruction:'acc', amount:+31},{instruction:'jmp', amount:+438},{instruction:'acc', amount:+4},{instruction:'acc', amount:+31},{instruction:'acc', amount:+47},{instruction:'jmp', amount:+302},{instruction:'nop', amount:+446},{instruction:'acc', amount:-8},{instruction:'acc', amount:+42},{instruction:'jmp', amount:+305},{instruction:'nop', amount:+504},{instruction:'jmp', amount:+89},{instruction:'acc', amount:+25},{instruction:'acc', amount:-2},{instruction:'nop', amount:+279},{instruction:'acc', amount:+5},{instruction:'jmp', amount:+19},{instruction:'acc', amount:+38},{instruction:'jmp', amount:+121},{instruction:'jmp', amount:+87},{instruction:'acc', amount:+26},{instruction:'acc', amount:-18},{instruction:'acc', amount:-18},{instruction:'acc', amount:+34},{instruction:'jmp', amount:+500},{instruction:'acc', amount:+0},{instruction:'acc', amount:-1},{instruction:'acc', amount:+38},{instruction:'jmp', amount:+1},{instruction:'jmp', amount:-46},{instruction:'acc', amount:+39},{instruction:'acc', amount:-14},{instruction:'acc', amount:+48},{instruction:'acc', amount:+19},{instruction:'jmp', amount:+480},{instruction:'acc', amount:-3},{instruction:'acc', amount:-7},{instruction:'nop', amount:+316},{instruction:'jmp', amount:+1},{instruction:'jmp', amount:+406},{instruction:'acc', amount:-3},{instruction:'jmp', amount:-44},{instruction:'acc', amount:+21},{instruction:'acc', amount:-5},{instruction:'acc', amount:-3},{instruction:'jmp', amount:+447},{instruction:'jmp', amount:+478},{instruction:'jmp', amount:+53},{instruction:'acc', amount:-2},{instruction:'nop', amount:+202},{instruction:'jmp', amount:+264},{instruction:'acc', amount:-17},{instruction:'acc', amount:+16},{instruction:'jmp', amount:+405},{instruction:'acc', amount:+28},{instruction:'jmp', amount:+393},{instruction:'jmp', amount:+320},{instruction:'acc', amount:+35},{instruction:'acc', amount:+38},{instruction:'acc', amount:-19},{instruction:'acc', amount:+11},{instruction:'jmp', amount:+86},{instruction:'acc', amount:-8},{instruction:'jmp', amount:-97},{instruction:'jmp', amount:+350},{instruction:'jmp', amount:+35},{instruction:'nop', amount:+448},{instruction:'acc', amount:+7},{instruction:'acc', amount:-6},{instruction:'acc', amount:+6},{instruction:'jmp', amount:+444},{instruction:'acc', amount:+11},{instruction:'acc', amount:+42},{instruction:'acc', amount:-15},{instruction:'acc', amount:+44},{instruction:'jmp', amount:+145},{instruction:'acc', amount:+1},{instruction:'jmp', amount:+46},{instruction:'acc', amount:-6},{instruction:'acc', amount:+1},{instruction:'nop', amount:+183},{instruction:'acc', amount:+20},{instruction:'jmp', amount:+413},{instruction:'acc', amount:+42},{instruction:'acc', amount:-9},{instruction:'jmp', amount:+391},{instruction:'jmp', amount:+197},{instruction:'acc', amount:+27},{instruction:'acc', amount:+7},{instruction:'jmp', amount:+68},{instruction:'acc', amount:-11},{instruction:'jmp', amount:-140},{instruction:'acc', amount:+11},{instruction:'jmp', amount:+238},{instruction:'acc', amount:-11},{instruction:'acc', amount:+33},{instruction:'acc', amount:+41},{instruction:'jmp', amount:+391},{instruction:'acc', amount:+2},{instruction:'jmp', amount:+389},{instruction:'jmp', amount:-134},{instruction:'acc', amount:+2},{instruction:'acc', amount:+29},{instruction:'jmp', amount:+1},{instruction:'acc', amount:+34},{instruction:'jmp', amount:+358},{instruction:'acc', amount:+39},{instruction:'acc', amount:+2},{instruction:'acc', amount:-12},{instruction:'acc', amount:+16},{instruction:'jmp', amount:+97},{instruction:'acc', amount:+25},{instruction:'jmp', amount:+412},{instruction:'acc', amount:+42},{instruction:'jmp', amount:+129},{instruction:'jmp', amount:-21},{instruction:'acc', amount:+39},{instruction:'acc', amount:-9},{instruction:'jmp', amount:+130},{instruction:'acc', amount:+21},{instruction:'jmp', amount:+1},{instruction:'acc', amount:+5},{instruction:'jmp', amount:-97},{instruction:'acc', amount:-16},{instruction:'jmp', amount:-188},{instruction:'acc', amount:+15},{instruction:'jmp', amount:+72},{instruction:'jmp', amount:-76},{instruction:'acc', amount:-2},{instruction:'acc', amount:+33},{instruction:'acc', amount:+13},{instruction:'jmp', amount:-175},{instruction:'jmp', amount:+250},{instruction:'acc', amount:+4},{instruction:'acc', amount:+25},{instruction:'jmp', amount:-163},{instruction:'jmp', amount:+184},{instruction:'acc', amount:-17},{instruction:'jmp', amount:-195},{instruction:'acc', amount:+20},{instruction:'acc', amount:+45},{instruction:'jmp', amount:-18},{instruction:'acc', amount:+28},{instruction:'acc', amount:+48},{instruction:'acc', amount:+43},{instruction:'nop', amount:+53},{instruction:'jmp', amount:-111},{instruction:'nop', amount:+51},{instruction:'acc', amount:-15},{instruction:'acc', amount:-16},{instruction:'acc', amount:+46},{instruction:'jmp', amount:+150},{instruction:'nop', amount:+121},{instruction:'acc', amount:+46},{instruction:'acc', amount:+11},{instruction:'nop', amount:-65},{instruction:'jmp', amount:-62},{instruction:'acc', amount:+37},{instruction:'acc', amount:-7},{instruction:'acc', amount:-16},{instruction:'jmp', amount:+19},{instruction:'jmp', amount:+1},{instruction:'jmp', amount:+187},{instruction:'acc', amount:+6},{instruction:'acc', amount:-2},{instruction:'jmp', amount:+217},{instruction:'nop', amount:+32},{instruction:'nop', amount:+186},{instruction:'acc', amount:+5},{instruction:'jmp', amount:-134},{instruction:'acc', amount:-3},{instruction:'acc', amount:+49},{instruction:'acc', amount:+19},{instruction:'jmp', amount:-34},{instruction:'nop', amount:-127},{instruction:'acc', amount:+0},{instruction:'acc', amount:-4},{instruction:'acc', amount:+43},{instruction:'jmp', amount:+253},{instruction:'acc', amount:-18},{instruction:'nop', amount:-183},{instruction:'acc', amount:+6},{instruction:'acc', amount:+32},{instruction:'jmp', amount:+76},{instruction:'nop', amount:-37},{instruction:'acc', amount:+0},{instruction:'nop', amount:+65},{instruction:'acc', amount:+12},{instruction:'jmp', amount:+275},{instruction:'jmp', amount:+263},{instruction:'acc', amount:+22},{instruction:'acc', amount:+38},{instruction:'jmp', amount:+59},{instruction:'acc', amount:-10},{instruction:'acc', amount:+14},{instruction:'acc', amount:-7},{instruction:'jmp', amount:+141},{instruction:'jmp', amount:+156},{instruction:'acc', amount:+3},{instruction:'acc', amount:+20},{instruction:'acc', amount:-11},{instruction:'jmp', amount:-74},{instruction:'acc', amount:-1},{instruction:'acc', amount:+0},{instruction:'acc', amount:+35},{instruction:'acc', amount:+48},{instruction:'jmp', amount:+57},{instruction:'acc', amount:-16},{instruction:'acc', amount:+27},{instruction:'jmp', amount:+1},{instruction:'acc', amount:-2},{instruction:'jmp', amount:+82},{instruction:'acc', amount:+34},{instruction:'acc', amount:+5},{instruction:'acc', amount:+12},{instruction:'nop', amount:+233},{instruction:'jmp', amount:+32},{instruction:'jmp', amount:+79},{instruction:'acc', amount:+27},{instruction:'jmp', amount:-30},{instruction:'jmp', amount:+1},{instruction:'nop', amount:+210},{instruction:'acc', amount:-18},{instruction:'jmp', amount:+84},{instruction:'jmp', amount:+221},{instruction:'nop', amount:-297},{instruction:'acc', amount:+35},{instruction:'jmp', amount:+1},{instruction:'jmp', amount:+304},{instruction:'jmp', amount:+266},{instruction:'acc', amount:+26},{instruction:'acc', amount:+2},{instruction:'acc', amount:+16},{instruction:'acc', amount:+14},{instruction:'jmp', amount:-148},{instruction:'nop', amount:-193},{instruction:'acc', amount:-9},{instruction:'jmp', amount:-181},{instruction:'jmp', amount:-282},{instruction:'acc', amount:+16},{instruction:'jmp', amount:+1},{instruction:'acc', amount:+18},{instruction:'jmp', amount:+102},{instruction:'acc', amount:-17},{instruction:'nop', amount:+70},{instruction:'jmp', amount:-109},{instruction:'nop', amount:-83},{instruction:'jmp', amount:+4},{instruction:'jmp', amount:+128},{instruction:'acc', amount:+34},{instruction:'jmp', amount:+172},{instruction:'acc', amount:+47},{instruction:'acc', amount:+7},{instruction:'jmp', amount:-121},{instruction:'nop', amount:-107},{instruction:'acc', amount:-6},{instruction:'acc', amount:-12},{instruction:'nop', amount:-206},{instruction:'jmp', amount:+187},{instruction:'acc', amount:+35},{instruction:'acc', amount:+44},{instruction:'jmp', amount:-68},{instruction:'jmp', amount:+87},{instruction:'jmp', amount:-185},{instruction:'acc', amount:-6},{instruction:'acc', amount:+50},{instruction:'jmp', amount:-3},{instruction:'acc', amount:+40},{instruction:'jmp', amount:-79},{instruction:'acc', amount:+14},{instruction:'nop', amount:-50},{instruction:'acc', amount:-5},{instruction:'jmp', amount:-286},{instruction:'acc', amount:+39},{instruction:'jmp', amount:+44},{instruction:'acc', amount:+3},{instruction:'acc', amount:+40},{instruction:'acc', amount:-17},{instruction:'acc', amount:+41},{instruction:'jmp', amount:-318},{instruction:'jmp', amount:+131},{instruction:'jmp', amount:+1},{instruction:'jmp', amount:-220},{instruction:'acc', amount:+22},{instruction:'acc', amount:+11},{instruction:'acc', amount:+35},{instruction:'acc', amount:+48},{instruction:'jmp', amount:-7},{instruction:'acc', amount:+34},{instruction:'acc', amount:-10},{instruction:'acc', amount:+45},{instruction:'nop', amount:+233},{instruction:'jmp', amount:-202},{instruction:'acc', amount:+38},{instruction:'jmp', amount:-27},{instruction:'jmp', amount:+193},{instruction:'nop', amount:-345},{instruction:'acc', amount:+0},{instruction:'jmp', amount:-109},{instruction:'acc', amount:+24},{instruction:'jmp', amount:-357},{instruction:'acc', amount:+15},{instruction:'jmp', amount:-72},{instruction:'acc', amount:-15},{instruction:'nop', amount:+10},{instruction:'nop', amount:-126},{instruction:'jmp', amount:-309},{instruction:'acc', amount:+2},{instruction:'jmp', amount:-35},{instruction:'acc', amount:+7},{instruction:'acc', amount:+31},{instruction:'jmp', amount:+1},{instruction:'nop', amount:-313},{instruction:'jmp', amount:+145},{instruction:'acc', amount:-19},{instruction:'nop', amount:+209},{instruction:'jmp', amount:+98},{instruction:'jmp', amount:-282},{instruction:'jmp', amount:-80},{instruction:'jmp', amount:-203},{instruction:'jmp', amount:+41},{instruction:'acc', amount:+33},{instruction:'acc', amount:-1},{instruction:'jmp', amount:+108},{instruction:'acc', amount:+15},{instruction:'jmp', amount:-306},{instruction:'acc', amount:+9},{instruction:'acc', amount:+8},{instruction:'acc', amount:+28},{instruction:'acc', amount:-3},{instruction:'jmp', amount:-324},{instruction:'acc', amount:-10},{instruction:'jmp', amount:-242},{instruction:'acc', amount:-11},{instruction:'acc', amount:+14},{instruction:'acc', amount:+35},{instruction:'jmp', amount:-85},{instruction:'acc', amount:-7},{instruction:'acc', amount:+24},{instruction:'acc', amount:+38},{instruction:'jmp', amount:-341},{instruction:'acc', amount:+21},{instruction:'acc', amount:-15},{instruction:'jmp', amount:-92},{instruction:'acc', amount:+18},{instruction:'acc', amount:-14},{instruction:'jmp', amount:-148},{instruction:'nop', amount:-341},{instruction:'jmp', amount:+166},{instruction:'jmp', amount:+82},{instruction:'acc', amount:-13},{instruction:'acc', amount:+36},{instruction:'jmp', amount:+100},{instruction:'acc', amount:+18},{instruction:'acc', amount:+40},{instruction:'acc', amount:+1},{instruction:'jmp', amount:-384},{instruction:'acc', amount:+26},{instruction:'nop', amount:+87},{instruction:'acc', amount:+28},{instruction:'jmp', amount:-298},{instruction:'acc', amount:+35},{instruction:'nop', amount:-132},{instruction:'acc', amount:+19},{instruction:'acc', amount:+24},{instruction:'jmp', amount:+57},{instruction:'acc', amount:-4},{instruction:'acc', amount:+17},{instruction:'acc', amount:-7},{instruction:'jmp', amount:+83},{instruction:'acc', amount:+36},{instruction:'jmp', amount:-208},{instruction:'nop', amount:-429},{instruction:'acc', amount:+0},{instruction:'acc', amount:+19},{instruction:'jmp', amount:-432},{instruction:'acc', amount:+24},{instruction:'acc', amount:-19},{instruction:'nop', amount:-406},{instruction:'jmp', amount:-209},{instruction:'acc', amount:+19},{instruction:'jmp', amount:-98},{instruction:'acc', amount:+33},{instruction:'acc', amount:+30},{instruction:'nop', amount:-328},{instruction:'jmp', amount:-238},{instruction:'acc', amount:+41},{instruction:'acc', amount:+9},{instruction:'acc', amount:-14},{instruction:'acc', amount:-11},{instruction:'jmp', amount:-139},{instruction:'jmp', amount:+145},{instruction:'acc', amount:+18},{instruction:'nop', amount:+102},{instruction:'acc', amount:+38},{instruction:'jmp', amount:-132},{instruction:'acc', amount:-3},{instruction:'acc', amount:+6},{instruction:'jmp', amount:-386},{instruction:'acc', amount:+7},{instruction:'acc', amount:+3},{instruction:'acc', amount:+6},{instruction:'jmp', amount:-430},{instruction:'acc', amount:+32},{instruction:'acc', amount:+28},{instruction:'acc', amount:+40},{instruction:'acc', amount:+0},{instruction:'jmp', amount:-83},{instruction:'acc', amount:+0},{instruction:'jmp', amount:+1},{instruction:'jmp', amount:-283},{instruction:'acc', amount:+11},{instruction:'jmp', amount:-299},{instruction:'jmp', amount:-224},{instruction:'nop', amount:+34},{instruction:'acc', amount:+21},{instruction:'nop', amount:-34},{instruction:'acc', amount:-10},{instruction:'jmp', amount:+27},{instruction:'acc', amount:-7},{instruction:'acc', amount:+8},{instruction:'jmp', amount:+67},{instruction:'nop', amount:-436},{instruction:'acc', amount:-15},{instruction:'acc', amount:+3},{instruction:'jmp', amount:-22},{instruction:'acc', amount:-12},{instruction:'nop', amount:-421},{instruction:'acc', amount:-13},{instruction:'acc', amount:-18},{instruction:'jmp', amount:-388},{instruction:'acc', amount:+30},{instruction:'acc', amount:+13},{instruction:'jmp', amount:-408},{instruction:'acc', amount:-3},{instruction:'acc', amount:-9},{instruction:'acc', amount:+34},{instruction:'acc', amount:+0},{instruction:'jmp', amount:-137},{instruction:'acc', amount:+4},{instruction:'acc', amount:+22},{instruction:'acc', amount:+7},{instruction:'acc', amount:+48},{instruction:'jmp', amount:+61},{instruction:'jmp', amount:+70},{instruction:'jmp', amount:-484},{instruction:'acc', amount:+19},{instruction:'jmp', amount:-382},{instruction:'acc', amount:+45},{instruction:'jmp', amount:+75},{instruction:'acc', amount:+34},{instruction:'jmp', amount:-144},{instruction:'jmp', amount:-381},{instruction:'jmp', amount:+1},{instruction:'acc', amount:+48},{instruction:'acc', amount:+48},{instruction:'acc', amount:+0},{instruction:'jmp', amount:-108},{instruction:'acc', amount:+0},{instruction:'jmp', amount:+1},{instruction:'jmp', amount:-477},{instruction:'acc', amount:+48},{instruction:'jmp', amount:+62},{instruction:'acc', amount:+1},{instruction:'jmp', amount:+1},{instruction:'jmp', amount:+49},{instruction:'acc', amount:-13},{instruction:'acc', amount:+20},{instruction:'jmp', amount:-406},{instruction:'acc', amount:+48},{instruction:'acc', amount:+3},{instruction:'acc', amount:-9},{instruction:'acc', amount:+32},{instruction:'jmp', amount:-124},{instruction:'acc', amount:-16},{instruction:'jmp', amount:-131},{instruction:'acc', amount:+27},{instruction:'acc', amount:-4},{instruction:'acc', amount:+36},{instruction:'acc', amount:-12},{instruction:'jmp', amount:-255},{instruction:'acc', amount:+0},{instruction:'jmp', amount:+1},{instruction:'acc', amount:+8},{instruction:'acc', amount:+41},{instruction:'jmp', amount:-407},{instruction:'jmp', amount:-543},{instruction:'jmp', amount:-73},{instruction:'nop', amount:+4},{instruction:'acc', amount:-6},{instruction:'jmp', amount:-504},{instruction:'jmp', amount:-28},{instruction:'nop', amount:-450},{instruction:'jmp', amount:-226},{instruction:'jmp', amount:-274},{instruction:'acc', amount:+1},{instruction:'jmp', amount:-568},{instruction:'acc', amount:+29},{instruction:'jmp', amount:-570},{instruction:'jmp', amount:+1},{instruction:'jmp', amount:-494},{instruction:'acc', amount:+29},{instruction:'acc', amount:-12},{instruction:'jmp', amount:-127},{instruction:'acc', amount:+32},{instruction:'jmp', amount:-135},{instruction:'jmp', amount:-383},{instruction:'nop', amount:-59},{instruction:'acc', amount:-19},{instruction:'acc', amount:+2},{instruction:'acc', amount:+26},{instruction:'jmp', amount:-446},{instruction:'acc', amount:+47},{instruction:'jmp', amount:+1},{instruction:'acc', amount:-18},{instruction:'acc', amount:-10},{instruction:'acc', amount:+32},{instruction:'nop', amount:-423},{instruction:'jmp', amount:-476},{instruction:'acc', amount:+39},{instruction:'acc', amount:+27},{instruction:'acc', amount:-9},{instruction:'acc', amount:+28},{instruction:'jmp', amount:-325},{instruction:'acc', amount:+37},{instruction:'acc', amount:+28},{instruction:'nop', amount:-81},{instruction:'jmp', amount:-310},{instruction:'acc', amount:-2},{instruction:'acc', amount:+8},{instruction:'acc', amount:+28},{instruction:'jmp', amount:-43},{instruction:'jmp', amount:-141},{instruction:'acc', amount:+5},{instruction:'nop', amount:-2},{instruction:'jmp', amount:-457},{instruction:'acc', amount:+25},{instruction:'acc', amount:+13},{instruction:'acc', amount:+0},{instruction:'jmp', amount:+1},{instruction:'jmp', amount:+1},]

const history = []
let index = 0
let accumulator = 0

const actions = {
    acc: (set) => {
        accumulator += set.amount
        index++
    },
    jmp: (set) => {
        index += set.amount        
    },
    nop: (set) => {
        index++
    }
}

try {
    executeNext()
} catch(e) {
    console.log(e)
}

function executeNext(){
    const set = input[index]
    console.log(set, index)
    actions[set.instruction](set)

    if(checkRepeat()){
        throw `stackoverflow: ${accumulator}`
    }

    history.push(index)
    executeNext()
}

function checkRepeat(){
    return history.indexOf(index) > -1
}