---
title: "std::variant"
source_path: "cpp/utility/variant"
header: "<variant>"
category: "utility"
since: "C++17"
---

The class template std::variant represents a type-safe [union](/cpp/language/union/). An instance of std::variant at any given time either holds a value of one of its alternative types, or in the case of error - no value (this state is hard to achieve, see [valueless_by_exception](/cpp/utility/variant/valueless_by_exception/)).

## Declarations
```cpp
template< class... Types >
class variant;
```
_(since C++17)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_variant
201606L
(C++17)
std::variant: a type-safe union
202102L
(C++23)(DR17)
std::visit for classes derived from std::variant
202106L
(C++23)(DR20)
Fully constexpr std::variant
202306L
(C++26)
Member visit

## Example
```cpp
#include <cassert>
#include <iostream>
#include <string>
#include <variant>
 
int main()
{
    std::variant<int, float> v, w;
    v = 42; // v contains int
    int i = std::get<int>(v);
    assert(42 == i); // succeeds
    w = std::get<int>(v);
    w = std::get<0>(v); // same effect as the previous line
    w = v; // same effect as the previous line
 
//  std::get<double>(v); // error: no double in [int, float]
//  std::get<3>(v);      // error: valid index values are 0 and 1
 
    try
    {
        std::get<float>(w); // w contains int, not float: will throw
    }
    catch (const std::bad_variant_access& ex)
    {
        std::cout << ex.what() << '\n';
    }
 
    using namespace std::literals;
 
    std::variant<std::string> x("abc");
    // converting constructors work when unambiguous
    x = "def"; // converting assignment also works when unambiguous
 
    std::variant<std::string, void const*> y("abc");
    // casts to void const* when passed a char const*
    assert(std::holds_alternative<void const*>(y)); // succeeds
    y = "xyz"s;
    assert(std::holds_alternative<std::string>(y)); // succeeds
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2901 | C++17 | specialization of std::uses_allocator provided,but std::variant cannot properly support allocators | specialization removed |
| LWG 3990 | C++17 | a program could declare an explicit orpartial specialization of std::variant | the program is ill-formed in thiscase (no diagnostic required) |

## See also
- [in_placein_place_typein_place_indexin_place_tin_place_type_tin_place_index_t](/cpp/utility/in_place/)
- [optional](/cpp/utility/optional/)
- [any](/cpp/utility/any/)
- [CopyConstructible](/cpp/named_req/copyconstructible/)
