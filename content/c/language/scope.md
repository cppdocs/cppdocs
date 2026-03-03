---
title: "Scope"
source_path: "c/language/scope"
category: "c"
---

Each [identifier](/c/language/identifier/) that appears in a C program is visible (that is, may be used) only in some possibly discontiguous portion of the source code called its scope.

## Notes
Prior to C89, identifiers with external linkage had file scope even when introduced within a block, and because of that, a C89 compiler is not required to diagnose the use of an extern identifier that has gone out of scope (such use is undefined behavior).

Local variables within a loop body can hide variables declared in the init clause of a [for](/c/language/for/) loop in C (their scope is nested), but cannot do that in C++.

Unlike C++, C has no struct scope: names declared within a struct/union/enum declaration are in the same scope as the struct declaration (except that data members are in their own [member name space](/c/language/name_space/)):

## See also
- [C++ documentation](/cpp/language/scope/)
