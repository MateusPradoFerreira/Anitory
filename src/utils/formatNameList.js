export default function formatNameList(list) {
    var res = '';
    var i = 0;
    list.map((iten) => {
        if (i === 0) {
            res = res + iten.name;
        } else {
            res = res + ' | ' + iten.name;
        }
        i++;
    });
    return res;
}