---
title: "noexcept specifier (since C++11)"
source_path: "cpp/language/noexcept_spec"
category: "language"
since: "C++11"
---

Specifies whether a function could throw exceptions.

## Notes
One of the uses of the constant expression is (along with the [noexcept operator](/cpp/language/noexcept/)) to define function templates that declare noexcept for some types but not others.

Note that a noexcept specification on a function is not a compile-time check; it is merely a method for a programmer to inform the compiler whether or not a function should throw exceptions. The compiler can use this information to enable certain optimizations on non-throwing functions as well as enable the [noexcept operator](/cpp/language/noexcept/), which can check at compile time if a particular expression is declared to throw any exceptions. For example, containers such as [std::vector](/cpp/container/vector/) will move their elements if the elements' move constructor is noexcept, and copy otherwise (unless the copy constructor is not accessible, but a potentially throwing move constructor is, in which case the strong exception guarantee is waived).

noexcept is an improved version of [throw()](/cpp/language/except_spec/), which is deprecated in C++11. Unlike pre-C++17 [throw()](/cpp/language/except_spec/), noexcept will not call [std::unexpected](/cpp/error/unexpected/), may or may not unwind the stack, and will call [std::terminate](/cpp/error/terminate/), which potentially allows the compiler to implement noexcept without the runtime overhead of [throw()](/cpp/language/except_spec/). As of C++17, throw() is redefined to be an exact equivalent of noexcept(true).

## Example
```cpp
// whether foo is declared noexcept depends on if the expression
// T() will throw any exceptions
template<class T>
void foo() noexcept(noexcept(T())) {}
 
void bar() noexcept(true) {}
void baz() noexcept { throw 42; } // noexcept is the same as noexcept(true)
 
int main() 
{
    foo<int>(); // noexcept(noexcept(int())) => noexcept(true), so this is fine
 
    bar(); // fine
    baz(); // compiles, but at runtime this calls std::terminate
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1330 | C++11 | an exception specification might be eagerly instantiated | it is only instantiated only if needed |
| CWG 1740 | C++11 | a ( following noexcept might start an initializer | it can only be a part ofnoexcept specification |
| CWG 2039 | C++11 | only the expression before conversion is required to be constant | the conversion must also bevalid in a constant expression |

## See also
- [noexcept operator](/cpp/language/noexcept/)
- [Dynamic exception specification](/cpp/language/except_spec/)
- [throw expression](/cpp/language/throw/)
- [move_if_noexcept](/cpp/utility/move_if_noexcept/)
