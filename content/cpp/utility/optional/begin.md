---
title: "std::optional<T>::begin"
source_path: "cpp/utility/optional/begin"
category: "utility"
since: "C++26"
---

If *this contains a value, returns an iterator to the contained value. Otherwise, a past-the-end iterator value.

## Declarations
```cpp
constexpr iterator begin() noexcept;
```
_(since C++26)_

```cpp
constexpr const_iterator begin() const noexcept;
```
_(since C++26)_

## Return value
Iterator to the contained value if has_value() is true. Otherwise, a past-the-end iterator.

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
#include <vector>
 
int main()
{
    constexpr std::optional<int> none = std::nullopt;
    constexpr std::optional<int> some = 42;
 
    static_assert(none.begin() == none.end());
    static_assert(some.begin() != some.end());
 
    // ranged-for loop support
    for (int i : none)
        std::println("'none' has a value of {}", i);
 
    for (int i : some)
        std::println("'some' has a value of {}", i);
 
    std::optional<std::vector<int>> many({0, 1, 2});
    for (const auto& v : many)
        std::println("'many' has a value of {}", v);
}
```

## See also
- [end](/cpp/utility/optional/end/)
