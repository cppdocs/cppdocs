---
title: "std::hash<std::bitset>"
source_path: "cpp/utility/bitset/hash"
header: "<bitset>"
category: "utility"
since: "C++11"
---

The template specialization of [std::hash](/cpp/utility/hash/) for [std::bitset](/cpp/utility/bitset/)<N> allows users to obtain hashes of objects of type [std::bitset](/cpp/utility/bitset/)<N>.

## Declarations
```cpp
template< std::size_t N >
struct hash<std::bitset<N>>;
```
_(since C++11)_

## Example
```cpp
#include <bitset>
#include <functional>
#include <iostream>
 
int main()
{
    std::bitset<4> b1{0}, b2{42};
    std::bitset<8> b3{0}, b4{42};
 
    std::hash<std::bitset<4>> hash_fn4;
    std::hash<std::bitset<8>> hash_fn8;
    using bin64 = std::bitset<64>;
 
    std::cout << std::hex
              << bin64{hash_fn4(b1)} << " = " << hash_fn4(b1) << '\n'
              << bin64{hash_fn4(b2)} << " = " << hash_fn4(b2) << '\n'
              << bin64{hash_fn8(b3)} << " = " << hash_fn8(b3) << '\n'
              << bin64{hash_fn8(b4)} << " = " << hash_fn8(b4) << '\n';
}
```

## See also
- [hash](/cpp/utility/hash/)
