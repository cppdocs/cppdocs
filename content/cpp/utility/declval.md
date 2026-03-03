---
title: "std::declval"
source_path: "cpp/utility/declval"
header: "<utility>"
category: "utility"
---

Helper template for writing expressions that appear in [unevaluated contexts](/cpp/language/expressions/#Potentially-evaluated_expressions), typically the operand of [decltype](/cpp/language/decltype/). In unevaluated context, this helper template converts any type T (which may be an incomplete type) to an expression of that type, making it possible to use member functions of T without the need to go through constructors.

## Declarations
```cpp
template< class T >
typename std::add_rvalue_reference<T>::type declval() noexcept;
```
_(since C++11) (until C++14) (unevaluated-only)_

```cpp
template< class T >
std::add_rvalue_reference_t<T> declval() noexcept;
```
_(since C++14) (unevaluated-only)_

## Return value
Cannot be evaluated and thus never returns a value. The return type is T&& (reference collapsing rules apply) unless T is (possibly cv-qualified) void, in which case the return type is T.

## Notes
std::declval is commonly used in templates where acceptable template parameters may have no constructor in common, but have the same member function whose return type is needed.

## Example
```cpp
#include <iostream>
#include <utility>
 
struct Default
{
    int foo() const { return 1; }
};
 
struct NonDefault
{
    NonDefault() = delete;
    int foo() const { return 1; }
};
 
int main()
{
    decltype(Default().foo())               n1 = 1;     // type of n1 is int
    decltype(std::declval<Default>().foo()) n2 = 1;     // same
 
//  decltype(NonDefault().foo())               n3 = n1; // error: no default constructor
    decltype(std::declval<NonDefault>().foo()) n3 = n1; // type of n3 is int
 
    std::cout << "n1 = " << n1 << '\n'
              << "n2 = " << n2 << '\n'
              << "n3 = " << n3 << '\n';
}
```

## See also
- [decltype specifier](/cpp/language/decltype/)
- [result_ofinvoke_result](/cpp/types/result_of/)
