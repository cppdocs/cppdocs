---
title: "std::less"
source_path: "cpp/utility/functional/less"
header: "<functional>"
category: "utility"
since: "C++14"
---

Function object for performing comparisons. The main template invokes operator< on type T.

## Declarations
```cpp
template< class T >
struct less;
```
_(until C++14)_

```cpp
template< class T = void >
struct less;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to compare

## Return value
lhs < rhs.

## Example
```cpp
#include <functional>
 
template<typename A, typename B, typename C = std::less<>>
constexpr bool fun(A a, B b, C cmp = C{})
{
    return cmp(a, b);
}
 
static_assert(fun(1, 2) == true);
static_assert(fun(1.0, 1) == false);
static_assert(fun(1, 2.0) == true);
static_assert(std::less<int>{}(5, 5.6) == false);   // 5 < 5 (warn: implicit conversion)
static_assert(std::less<double>{}(5, 5.6) == true); // 5.0 < 5.6
static_assert(std::less<int>{}(5.6, 5.7) == false); // 5 < 5 (warn: implicit conversion)
static_assert(std::less{}(5, 5.6) == true);         // less<void>: 5.0 < 5.6
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2562 | C++98 | the pointer total order might be inconsistent | guaranteed to be consistent |

## See also
- [equal_to](/cpp/utility/functional/equal_to/)
- [greater](/cpp/utility/functional/greater/)
- [ranges::less](/cpp/utility/functional/ranges/less/)
