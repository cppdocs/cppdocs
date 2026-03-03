---
title: "std::span<T,Extent>::size_bytes"
source_path: "cpp/container/span/size_bytes"
category: "container"
since: "C++20"
---

Returns the size of the sequence in bytes.

## Declarations
```cpp
constexpr size_type size_bytes() const noexcept;
```
_(since C++20)_

## Return value
The size of the sequence in bytes, i.e., size() * sizeof(element_type).

## Example
```cpp
#include <cstdint>
#include <span>
 
int main()
{
    constexpr static std::int32_t a[]{1, 2, 3, 4, 5};
    constexpr static std::span s{a};
 
    static_assert
    (
        sizeof(int32_t) == 4 &&
        std::size(a) == 5 &&
        sizeof a == 20 &&
        s.size() == 5 &&
        s.size_bytes() == 20
    );
}
```

## See also
- [size](/cpp/container/span/size/)
