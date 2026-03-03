---
title: "std::make_unsigned"
source_path: "cpp/types/make_unsigned"
header: "<type_traits>"
category: "types"
since: "C++11"
---

If T is an integral (except bool) or enumeration type, provides the member typedef type which is the unsigned integer type corresponding to T, with the same cv-qualifiers.

## Declarations
```cpp
template< class T >
struct make_unsigned;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
int main()
{
    using uchar_type = std::make_unsigned_t<char>;
    using uint_type  = std::make_unsigned_t<int>;
    using ulong_type = std::make_unsigned_t<volatile long>;
 
    static_assert(
        std::is_same_v<uchar_type, unsigned char> and
        std::is_same_v<uint_type, unsigned int> and
        std::is_same_v<ulong_type, volatile unsigned long>
    );
}
```

## See also
- [is_signed](/cpp/types/is_signed/)
- [is_unsigned](/cpp/types/is_unsigned/)
- [make_signed](/cpp/types/make_signed/)
