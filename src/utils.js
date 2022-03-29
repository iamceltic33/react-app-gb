let maxNumbers = 4,
    idNumber = 0;

export function nextId() {
    let id = "";
    let idNumStr = idNumber.toString();
    while (id.length <= maxNumbers - idNumStr.length) {
        id += "0";
    }
    id = "c" + id + idNumStr;
    idNumber++;
    return id;
}
