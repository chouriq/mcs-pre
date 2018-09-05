function toRna(sequence) {
    let rna = "";
    let invalid_input = false;
    for (let i=0;i<sequence.length;i++) {
        switch(sequence[i]) {
            case 'G':
                rna += 'C';
                break;
            case 'C':
                rna += 'G';
                break;
            case 'T':
                rna += 'A';
                break;
            case 'A':
                rna += 'U';
                break;
            default:
                invalid_input=true;
        }
        if (invalid_input) return "Invalid input!";
    }
    return rna;
}
let str = prompt("Give me some DNA sequence:");
document.body.innerHTML = "<h3>RNA sequence: "+toRna(str)+"</h3>";