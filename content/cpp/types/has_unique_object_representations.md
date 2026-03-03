---
title: "std::has_unique_object_representations"
source_path: "cpp/types/has_unique_object_representations"
header: "<type_traits>"
category: "types"
since: "C++17"
---

std::has_unique_object_representations is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct has_unique_object_representations;
```
_(since C++17)_

## Notes
This trait was introduced to make it possible to determine whether a type can be correctly hashed by hashing its object representation as a byte array.

## Example
```cpp
#include <cstdint>
#include <type_traits>
 
struct unpadded
{
    std::uint32_t a, b;
};
 
struct likely_padded
{
    std::uint8_t c;
    std::uint16_t st;
    std::uint32_t i;
};
 
int main()
{
    // Every value of a char corresponds to exactly one object representation.
    static_assert(std::has_unique_object_representations_v<char>);
    // For IEC 559 floats, assertion passes because the value NaN has
    // multiple object representations.
    static_assert(!std::has_unique_object_representations_v<float>);
 
    // Should succeed in any sane implementation because unpadded
    // is typically not padded, and std::uint32_t cannot contain padding bits.
    static_assert(std::has_unique_object_representations_v<unpadded>);
    // Fails in most implementations because padding bits are inserted
    // between the data members c and st for the purpose of aligning st to 16 bits.
    static_assert(!std::has_unique_object_representations_v<likely_padded>);
 
    // Notable architectural divergence:
    static_assert(std::has_unique_object_representations_v<bool>);  // x86
 // static_assert(!std::has_unique_object_representations_v<bool>); // ARM
}
```

## See also
- [is_standard_layout](/cpp/types/is_standard_layout/)
- [standard-layout](/cpp/language/data_members/#Standard-layout)
- [hash](/cpp/utility/hash/)
