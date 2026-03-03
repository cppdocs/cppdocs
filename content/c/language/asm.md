---
title: "Inline assembly"
source_path: "c/language/asm"
category: "c"
---

Inline assembly (typically introduced by the asm keyword) gives the ability to embed assembly language source code within a C program.

## Notes
MSVC does not support inline assembly on the ARM and x64 processors, and only support the form introduced by __asm on x86 processors.

When compiling in ISO C mode by GCC or Clang (e.g. with option -std=c11), __asm__ must be used instead of asm.

## See also
- [C++ documentation](/cpp/language/asm/)
