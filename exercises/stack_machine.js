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

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

function minilang(commandList) {
  const cpu = {
    stack : [],
    register : 0,
    PUSH : function () {
      cpu.stack.push(cpu.register);
    },
    POP : function () {
      cpu.register = cpu.stack.pop();
    },
    setRegister : function (num) {
      cpu.register = num;
    },
    ADD : function () {
      cpu.register += cpu.stack.pop();
    },
    SUB : function () {
      cpu.register -= cpu.stack.pop();
    },
    MULT : function () {
      cpu.register *= cpu.stack.pop();
    },
    DIV : function () {
      cpu.register = Math.floor(cpu.register / cpu.stack.pop());
    },
    REMAINDER : function () {
      cpu.register %= cpu.stack.pop();
    },
    PRINT : function () {
      console.log(cpu.register);
    }
  };

  function isNumber(value) {
    return !isNaN(value);
  }

  let parsedCommandList = commandList.split(' ');
  parsedCommandList.forEach(token => {
    if (isNumber(token)) {
      cpu.setRegister(Number(token));
    } else {
      cpu[token] ();
    }
  });
}

