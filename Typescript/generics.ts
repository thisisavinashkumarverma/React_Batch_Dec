// function mergeValues(a1:number, a2:number):number {
//     var result = 0;
//     result = a1 + a2;
//     return result;
// }

// function mergeValues2(a1:string, a2: string):string {
//     var result = '';
//     result = a1 + a2;
//     return result;
// }

function mergeValues<T>(a1: T, a2:T):[] {
    var result;
    result = a1 + ' ' + a2;
    console.log(result);
    return [];
}

function displayStduentDetails<T, S, K>(fval:T, svalue:S, thirdValue:K):T {
    
}

displayStduentDetails<number, string, boolean>(20, 'Krish', true);

displayStduentDetails<object, string, number>({}, 'Krish', 10);

mergeValues<number>(10, 20);


mergeValues<string>("Krishna ", "Sai");