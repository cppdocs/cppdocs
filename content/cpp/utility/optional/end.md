---
title: "std::optional<T>::end"
source_path: "cpp/utility/optional/end"
category: "utility"
since: "C++26"
---

Returns a past-the-end iterator. Equivalent to return begin() + has_value();.

## Declarations
```cpp
constexpr iterator end() noexcept;
```
_(since C++26)_

```cpp
constexpr const_iterator end() const noexcept;
```
_(since C++26)_

## Return value
Past-the-end iterator

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_optional_range_support
202406L
(C++26)
Range support for std::optional

## Example
```cpp
#include <optional>
#include <print>
 
int main()
{
    constexpr std::optional<int> none = std::nullopt; // optional @1
    constexpr std::optional<int> some = 42;           // optional @2
 
    static_assert(none.begin() == none.end());
    static_assert(some.begin() != some.end());
 
    // ranged-for loop support
    for (int i : none)
        std::println("Optional @1 has a value of {}", i);
 
    for (int i : some)
        std::println("Optional @2 has a value of {}", i);
}
```

## See also
- [begin](/cpp/utility/optional/begin/)
