class SuperMath {
  math(X, Y, znak) {
    let result;
    switch (znak) {
      case '+':
        result = X + Y;
        break;
      case '-':
        result = X - Y;
        break;
      case '/':
        result = X / Y;
        break;
      case '*':
        result = X * Y;
        break;
      case '%':
        result = X % Y;
        break;
      default:
        return 0;
    }
    return result;
  }

  validateZnak(znak) {
    const valid = ['+', '-', '/', '*', '%'];
    return valid.includes(znak);
  }

  check(obj = {}) {
    const { X = 0, Y = 0, znak = '' } = obj;

    if (this.validateZnak(znak)) {
      const conf = confirm(`${X}${znak}${Y}?`);

      if (conf) {
        const result = this.math(X, Y, znak);
        console.log(`${result}`);
      } else {
        this.input();
      }
    } else {
      this.input();
    }
  }

  input() {
    const X = +prompt('X');
    const Y = +prompt('Y');
    const znak = prompt('znak');

    const obj = { X, Y, znak };
    this.check(obj);
  }
}

const p = new SuperMath();
const obj = { X: 12, Y: 4, znak: '/' };
p.check(obj);
p.check();
