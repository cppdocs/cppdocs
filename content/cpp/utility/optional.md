---
title: "std::optional"
source_path: "cpp/utility/optional"
header: "<optional>"
category: "utility"
since: "C++17"
---

The class template std::optional manages an optional contained value, i.e. a value that may or may not be present.

## Declarations
```cpp
template< class T >
class optional;
```
_(since C++17)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_optional
201606L
(C++17)
std::optional
202106L
(C++23)(DR20)
Fully constexpr
202110L
(C++23)
Monadic operations
__cpp_lib_optional_range_support
202406L
(C++26)
Range support for std::optional

## Example
```cpp
#include <iostream>
#include <optional>
#include <string>
 
// optional can be used as the return type of a factory that may fail
std::optional<std::string> create(bool b)
{
    if (b)
        return "Godzilla";
    return {};
}
 
// std::nullopt can be used to create any (empty) std::optional
auto create2(bool b)
{
    return b ? std::optional<std::string>{"Godzilla"} : std::nullopt;
}
 
int main()
{
    std::cout << "create(false) returned "
              << create(false).value_or("empty") << '\n';
 
    // optional-returning factory functions are usable as conditions of while and if
    if (auto str = create2(true))
        std::cout << "create2(true) returned " << *str << '\n';
}
```

## See also
- [variant](/cpp/utility/variant/)
- [any](/cpp/utility/any/)
- [CopyConstructible](/cpp/named_req/copyconstructible/)
- [expected](/cpp/utility/expected/)
- [ranges::single_viewviews::single](/cpp/ranges/single_view/)
- [view](/cpp/ranges/view/)
- [ranges::empty_viewviews::empty](/cpp/ranges/empty_view/)
- [view](/cpp/ranges/view/)
