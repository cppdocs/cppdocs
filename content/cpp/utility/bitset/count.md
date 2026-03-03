---
title: "std::bitset<N>::count"
source_path: "cpp/utility/bitset/count"
category: "utility"
---

Returns the number of bits that are set to true.

## Declarations
```cpp
std::size_t count() const;
```
_(noexcept since C++11) (constexpr since C++23)_

## Return value
Number of bits that are set to true.

## Example
```cpp
#include <bitset>
#include <iostream>
 
constexpr auto popcount(unsigned x) noexcept
{
    unsigned num{};
    for (; x; ++num, x &= (x - 1));
    return num;
};
static_assert(popcount(0b101010) == std::bitset<8>{0b101010}.count());
 
int main()
{
    std::bitset<8> b("00010010");
    std::cout << "Initial value: " << b << '\n';
 
    // Find the first unset bit
    std::size_t idx = 0;
    while (idx < b.size() && b.test(idx))
        ++idx;
 
    // Continue setting bits until half the bitset is filled
    while (idx < b.size() && b.count() < b.size() / 2)
    {
        b.set(idx);
        std::cout << "Setting bit " << idx << ": " << b << '\n';
        while (idx < b.size() && b.test(idx))
            ++idx;
    }
}
```

## See also
- [size](/cpp/utility/bitset/size/)
- [popcount](/cpp/numeric/popcount/)
