---
title: "C++ keyword: asm"
source_path: "cpp/keyword/asm"
category: "keyword"
---

[Declaration of an inline assembly block](/cpp/language/asm/)

## Example
```cpp
#include <cstring>
 
int main() noexcept
{
    const char* const c_string = "Hello, world!\n";
    asm
    (R"(
        movq $1, %%rax                 # syscall number for sys_write
        movq $1, %%rdi                 # file descriptor 1 (stdout)
        movq %0, %%rsi                 # pointer to the c‐string
        movq %1, %%rdx                 # length of the c‐string
        syscall                        # invokes an OS system-call handler
    )"
    :                                  // no output operands
    :   "r"(c_string),                 // input: pointer to the c‐string
        "r"(std::strlen(c_string))     // input: size of the c‐string
    :   "%rax", "%rdi", "%rsi", "%rdx" // clobbered registers
    );
}
```
