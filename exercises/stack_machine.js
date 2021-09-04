/* eslint-disable max-lines-per-function */
// JS101
// Medium 1
// Stack Machine Interpretation

// Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
// REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.
// All operations are integer operations (which is only important with DIV and REMAINDER).

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)

function minilang(commandList) {
  const cpu = {
    stack : [],
    register : 0,
    push : function (num) {
      cpu.stack.push(num);
    },
    pop : function () {
      return cpu.stack.pop();
    },
    setRegister : function (num) {
      cpu.register = num;
    },
    add : function () {
      cpu.register += cpu.pop();
    },
    sub : function () {
      cpu.register -= cpu.pop();
    },
    mult : function () {
      cpu.register *= cpu.pop();
    },
    div : function () {
      cpu.register = Math.floor(cpu.register / cpu.pop());
    },
    remainder : function () {
      cpu.register %= cpu.pop();
    },
    print : function () {
      console.log(cpu.register);
    }
  };

  function isNumber(value) {
    return parseInt(value) === Number(value);
  }
  debugger;
  let parsedCommandList = commandList.split(' ');
  parsedCommandList.forEach(op => {
    debugger;
    if (isNumber(op)) {
      debugger;
      console.log('is number');
      cpu.setRegister(Number(op));
    } else {
      let command = op.toLowerCase();
      cpu[command] ();
      // cpu['print']();
    }
  });
}

// minilang('-3 PUSH 5 SUB PRINT');

// const obj = {
//   firstName: 'John',
//   lastName: 'Smith',
//   combine: function () {
//     console.log('xxx');
//     return obj.firstName + ' ' + obj.lastName;
//   }
// };

// let prop = 'firstName';
// obj[prop];

// prop = 'combine';
// obj[prop;

minilang('-3 PUSH 5 SUB PRINT');