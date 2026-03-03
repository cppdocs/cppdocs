---
title: "std::pair<T1,T2>::swap"
source_path: "cpp/utility/pair/swap"
category: "utility"
since: "C++20"
---

Swaps first with other.first and second with other.second, as if by using [std::swap](/cpp/algorithm/swap/); swap(first, other.first); swap(second, other.second);.

## Declarations
```cpp
void swap( pair& other ) noexcept(/* see below */);
```
_(since C++11) (until C++20)_

```cpp
constexpr void swap( pair& other ) noexcept(/* see below */);
```
_(since C++20)_

```cpp
constexpr void swap( const pair& other ) const noexcept(/* see below */);
```
_(since C++23)_

## Parameters
- `other`: pair of values to swap

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <utility>
#include <string>
int main()
{
    std::pair<int, std::string> p1(10, "test"), p2;
    p2.swap(p1);
    std::cout << "(" << p2.first << ", " << p2.second << ")\n";
 
#if __cpp_lib_ranges_zip >= 202110L
    // Using the C++23 const qualified swap overload
    // (swap is no longer propagating pair constness)
    int i1 = 10, i2{};
    std::string s1("test"), s2;
    const std::pair<int&, std::string&> r1(i1, s1), r2(i2, s2);
    r2.swap(r1);
    std::cout << "(" << i2 << ", " << s2 << ")\n";
#endif
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2456 | C++11 | the noexcept specification is ill-formed | made to work |

## See also
- [swap](/cpp/utility/swap/)
- [swap](/cpp/utility/tuple/swap/)
