---
title: "std::to_underlying"
source_path: "cpp/utility/to_underlying"
header: "<utility>"
category: "utility"
since: "C++23"
---

Converts an enumeration to its underlying type. Equivalent to return static_cast<[std::underlying_type_t](/cpp/types/underlying_type/)<Enum>>(e);.

## Declarations
```cpp
template< class Enum >
constexpr std::underlying_type_t<Enum> to_underlying( Enum e ) noexcept;
```
_(since C++23)_

## Parameters
- `e`: enumeration value to convert

## Return value
The integer value of the underlying type of Enum, converted from e.

## Notes
std::to_underlying can be used to avoid converting an enumeration to an integer type other than its underlying type.

## Example
```cpp
#include <cstdint>
#include <iomanip>
#include <iostream>
#include <type_traits>
#include <utility>
 
enum class E1 : char { e };
static_assert(std::is_same_v<char, decltype(std::to_underlying(E1::e))>);
 
enum struct E2 : long { e };
static_assert(std::is_same_v<long, decltype(std::to_underlying(E2::e))>);
 
enum E3 : unsigned { e };
static_assert(std::is_same_v<unsigned, decltype(std::to_underlying(e))>);
 
int main()
{
    enum class ColorMask : std::uint32_t
    {
        red = 0xFF, green = (red << 8), blue = (green << 8), alpha = (blue << 8)
    };
 
    std::cout << std::hex << std::uppercase << std::setfill('0')
              << std::setw(8) << std::to_underlying(ColorMask::red) << '\n'
              << std::setw(8) << std::to_underlying(ColorMask::green) << '\n'
              << std::setw(8) << std::to_underlying(ColorMask::blue) << '\n'
              << std::setw(8) << std::to_underlying(ColorMask::alpha) << '\n';
 
//  std::underlying_type_t<ColorMask> x = ColorMask::alpha; // Error: no known conversion
    [[maybe_unused]]
    std::underlying_type_t<ColorMask> y = std::to_underlying(ColorMask::alpha); // OK
}
```

## See also
- [underlying_type](/cpp/types/underlying_type/)
- [is_enum](/cpp/types/is_enum/)
- [is_scoped_enum](/cpp/types/is_scoped_enum/)
