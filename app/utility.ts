class Utility {
    static getInputValue(elementId:string): string | undefined {
        const inputElement :HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
        if(inputElement.value === ''){
            return undefined;
        }
        else{
            return inputElement.value;
        }
    }
}