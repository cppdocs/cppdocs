---
title: "std::as_const"
source_path: "cpp/utility/as_const"
header: "<utility>"
category: "utility"
since: "C++17"
---

1) Forms lvalue reference to const type of t.

## Declarations
```cpp
template< class T >
constexpr std::add_const_t<T>& as_const( T& t ) noexcept;
```
_(since C++17)_

```cpp
template< class T >
void as_const( const T&& ) = delete;
```
_(since C++17)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_as_const
201510L
(C++17)
std::as_const

## Example
```cpp
#include <cassert>
#include <string>
#include <type_traits>
#include <utility>
 
int main()
{
    std::string mutableString = "Hello World!";
    auto&& constRef = std::as_const(mutableString);
 
    mutableString.clear(); // OK
//  constRef.clear(); // Error: 'constRef' is 'const' qualified,
                      //        but 'clear' is not marked const
 
    assert(&constRef == &mutableString);
    assert(&std::as_const(mutableString) == &mutableString);
 
    using ExprType = std::remove_reference_t<decltype(std::as_const(mutableString))>;
 
    static_assert(std::is_same_v<std::remove_const_t<ExprType>, std::string>,
                  "ExprType should be some kind of string.");
    static_assert(!std::is_same_v<ExprType, std::string>,
                  "ExprType shouldn't be a mutable string.");
}
```

## See also
- [is_const](/cpp/types/is_const/)
- [add_cvadd_constadd_volatile](/cpp/types/add_cv/)
- [remove_cvremove_constremove_volatile](/cpp/types/remove_cv/)
- [ranges::as_const_viewviews::as_const](/cpp/ranges/as_const_view/)
- [view](/cpp/ranges/view/)
- [constant_range](/cpp/ranges/constant_range/)
