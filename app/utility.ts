class Utility {

    static getInputValue(elementID: string): string {
  
      const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
      return inputElement.value;
    }

    static generatedropDown( shapes: Shape[] ): void {
      const dropdownElement: HTMLElement = document.getElementById('dropdownElement')!;
      for(let i = 0; i < shapes.length; i++) {
        let option = shapes[i].name;
        let element = document.createElement('option');
        element.textContent = option;
        element.value = option;
        element.setAttribute('id', i.toString());
        dropdownElement.appendChild(element);
      }
    }
  }

