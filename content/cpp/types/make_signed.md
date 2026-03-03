---
title: "std::make_signed"
source_path: "cpp/types/make_signed"
header: "<type_traits>"
category: "types"
since: "C++11"
---

If T is an integral (except bool) or enumeration type, provides the member typedef type which is the signed integer type corresponding to T, with the same cv-qualifiers.

## Declarations
```cpp
template< class T >
struct make_signed;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
enum struct E : unsigned short {};
 
int main()
{
    using char_type = std::make_signed_t<unsigned char>;
    using int_type  = std::make_signed_t<unsigned int>;
    using long_type = std::make_signed_t<volatile unsigned long>;
    using enum_type = std::make_signed_t<E>;
 
    static_assert(
        std::is_same_v<char_type, signed char> and
        std::is_same_v<int_type, signed int> and
        std::is_same_v<long_type, volatile signed long> and
        std::is_same_v<enum_type, signed short>
    );
}
```

## See also
- [is_signed](/cpp/types/is_signed/)
- [is_unsigned](/cpp/types/is_unsigned/)
- [make_unsigned](/cpp/types/make_unsigned/)
