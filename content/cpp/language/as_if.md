---
title: "The as-if rule"
source_path: "cpp/language/as_if"
category: "language"
---

Allows any and all code transformations that do not change the observable behavior of the program.

## Notes
Because the compiler is (usually) unable to analyze the code of an external library to determine whether it does or does not perform I/O or volatile access, third-party library calls also aren't affected by optimization. However, standard library calls may be replaced by other calls, eliminated, or added to the program during optimization. Statically-linked third-party library code may be subject to link-time optimization.

Programs with [undefined behavior](/cpp/language/ub/), e.g. due to access to an array out of bounds, modification of a const object, [evaluation order](/cpp/language/eval_order/) violations, etc, are free from the as-if rule: they often change observable behavior when recompiled with different optimization settings. For example, if a test for signed integer overflow relies on the result of that overflow, e.g. if (n + 1 < n) abort();, [it is removed entirely by some compilers](https://blog.llvm.org/2011/05/what-every-c-programmer-should-know_14.html) because [signed overflow is undefined behavior](/cpp/language/operator_arithmetic/#Overflows) and the optimizer is free to assume it never happens and the test is redundant.

[Copy elision](/cpp/language/copy_elision/) is an exception from the as-if rule: the compiler may remove calls to move- and copy-constructors and the matching calls to the destructors of temporary objects even if those calls have observable side effects.

[New-expression](/cpp/language/new/#Allocation) has another exception from the as-if rule: the compiler may remove calls to the [replaceable allocation functions](/cpp/memory/new/operator_new/) even if a user-defined replacement is provided and has observable side-effects.

The count and order of floating-point exceptions can be changed by optimization as long as the state as observed by the next floating-point operation is as if no optimization took place:

## Example
```cpp
int& preinc(int& n) { return ++n; }
int add(int n, int m) { return n + m; }
 
// volatile input to prevent constant folding
volatile int input = 7;
 
// volatile output to make the result a visible side-effect
volatile int result;
 
int main()
{
    int n = input;
// using built-in operators would invoke undefined behavior
//  int m = ++n + ++n;
// but using functions makes sure the code executes as-if 
// the functions were not overlapped
    int m = add(preinc(n), preinc(n));
    result = m;
}
```

## See also
- [copy elision](/cpp/language/copy_elision/)
- [C documentation](/c/language/as_if/)
