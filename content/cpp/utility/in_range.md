---
title: "std::in_range"
source_path: "cpp/utility/in_range"
header: "<utility>"
category: "utility"
since: "C++20"
---

Returns true if the value of t is in the range of values that can be represented in R, that is, if t can be converted to R in a value-preserving manner.

## Declarations
```cpp
template< class R, class T >
constexpr bool in_range( T t ) noexcept;
```
_(since C++20)_

## Parameters
- `t`: value to test

## Return value
true if the value of t is representable in R, false otherwise.

## Notes
This function cannot be used with [enums](/cpp/language/enum/) (including [std::byte](/cpp/types/byte/)), char, char8_t, char16_t, char32_t, wchar_t and bool.

## Example
```cpp
#include <iostream>
#include <utility>
 
int main()
{
    std::cout << std::boolalpha;
 
    std::cout << std::in_range<std::size_t>(-1) << '\n';
    std::cout << std::in_range<std::size_t>(42) << '\n';
}
```

## See also
- [ranges::min](/cpp/algorithm/ranges/min/)
- [ranges::max](/cpp/algorithm/ranges/max/)
- [ranges::clamp](/cpp/algorithm/ranges/clamp/)
- [lerp](/cpp/numeric/lerp/)
