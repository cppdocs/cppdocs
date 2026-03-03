---
title: "std::optional<T>::or_else"
source_path: "cpp/utility/optional/or_else"
category: "utility"
since: "C++23"
---

Returns *this if it contains a value. Otherwise, returns the result of f.

## Declarations
```cpp
template< class F >
constexpr optional or_else( F&& f ) const&;
```
_(since C++23)_

```cpp
template< class F >
constexpr optional or_else( F&& f ) &&;
```
_(since C++23)_

## Parameters
- `f`: a function or Callable object that returns an std::optional<T>

## Return value
*this or the result of f, as described above.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_optional
202110L
(C++23)
Monadic operations in std::optional

## Example
```cpp
#include <iostream>
#include <optional>
#include <string>
 
int main()
{
    using maybe_int = std::optional<int>;
 
    auto valueless = []
    {
        std::cout << "Valueless: ";
        return maybe_int{0};
    };
 
    maybe_int x;
    std::cout << x.or_else(valueless).value() << '\n';
 
    x = 42;
    std::cout << "Has value: ";
    std::cout << x.or_else(valueless).value() << '\n';
 
    x.reset();
    std::cout << x.or_else(valueless).value() << '\n';
}
```

## See also
- [value_or](/cpp/utility/optional/value_or/)
- [and_then](/cpp/utility/optional/and_then/)
- [transform](/cpp/utility/optional/transform/)
