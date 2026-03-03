---
title: "asm declaration"
source_path: "cpp/language/asm"
category: "language"
---

asm-declaration gives the ability to embed assembly language source code within a C++ program. This declaration is conditionally-supported and(since C++11)implementation defined,
meaning that it may not be present and, even when provided by the implementation,(since C++11)it does not have a fixed meaning.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_constexpr
201907L
(C++20)
Trivial default initialization and asm-declaration in constexpr functions

## Example
```cpp
#include <iostream>
 
extern "C" int func(int x);
// the definition of func is written in assembly language
// raw string literal could be very useful
asm(R"(
.globl func
    .type func, @function
    func:
    .cfi_startproc
    movl %edi, %eax /* x is in RDI, see x86-64 calling convention */
    addl $1, %eax
    ret
    .cfi_endproc
)");
 
int main()
{
    int n = func(0110);
    // formerly non-standard inline assembly, made comforming by P2361R6
    asm ("leal (%0,%0,4),%0"
         : "=r" (n)
         : "0" (n));
    std::cout << "73*5 = " << n << std::endl; // flush is intentional
 
    // standard inline assembly
    asm ("movq $60, %rax\n" // the exit syscall number on Linux
         "movq $2,  %rdi\n" // this program returns 2
         "syscall");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 195 | C++98 | it was required to support all asm declarations | made conditionally-supported |
| CWG 2262 | C++11 | attributes could not be applied to asm declarations | allowed |

## See also
- [C++ ABIs](/cpp/links/#C.2B.2B_ABIs)
- [C documentation](/c/language/asm/)
