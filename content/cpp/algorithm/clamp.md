---
title: "std::clamp"
source_path: "cpp/algorithm/clamp"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

If the value of v is within [lo,hi], returns v; otherwise returns the nearest boundary.

## Declarations
```cpp
template< class T >
constexpr const T& clamp( const T& v, const T& lo, const T& hi );
```
_(since C++17)_

```cpp
template< class T, class Compare >
constexpr const T& clamp( const T& v, const T& lo, const T& hi,
Compare comp );
```
_(since C++17)_

## Parameters
- `v`: the value to clamp
- `lo, hi`: the boundaries to clamp v to
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type T can be implicitly converted to both of them.

## Return value
Reference to lo if v is less than lo, reference to hi if hi is less than v, otherwise reference to v.

## Notes
If v compares equivalent to either bound, returns a reference to v, not the bound.

## Example
```cpp
#include <algorithm>
#include <cstdint>
#include <iomanip>
#include <iostream>
 
int main()
{
    std::cout << "[raw] "
                 "[" << INT8_MIN << ',' << INT8_MAX << "] "
                 "[0," << UINT8_MAX << "]\n";
 
    for (const int v : {-129, -128, -1, 0, 42, 127, 128, 255, 256})
        std::cout << std::setw(4) << v
                  << std::setw(11) << std::clamp(v, INT8_MIN, INT8_MAX)
                  << std::setw(8) << std::clamp(v, 0, UINT8_MAX) << '\n';
}
```

## See also
- [min](/cpp/algorithm/min/)
- [max](/cpp/algorithm/max/)
- [in_range](/cpp/utility/in_range/)
- [ranges::clamp](/cpp/algorithm/ranges/clamp/)
