---
title: "std::fill"
source_path: "cpp/algorithm/fill"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

1) Assigns the given value to all elements in the range [first,last).

## Declarations
```cpp
template< class ForwardIt, class T >
void fill( ForwardIt first, ForwardIt last, const T& value );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class ForwardIt, class T = typename std::iterator_traits
<ForwardIt>::value_type >
constexpr void fill( ForwardIt first, ForwardIt last,
const T& value );
```
_(since C++26)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class T >
void fill( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, const T& value );
```
_(since C++17) (until C++26)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class T = typename std::iterator_traits
<ForwardIt>::value_type >
void fill( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, const T& value );
```
_(since C++26)_

## Parameters
- `first, last`: the range of elements to modify
- `value`: the value to be assigned
- `policy`: the execution policy to use

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_algorithm_default_value_type
202403
(C++26)
List-initialization for algorithms (1,2)

## Example
```cpp
#include <algorithm>
#include <complex>
#include <iostream>
#include <vector>
 
void println(const auto& seq)
{
    for (const auto& e : seq)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::vector<int> v{0, 1, 2, 3, 4, 5, 6, 7, 8};
    println(v);
 
    // set all of the elements to 8
    std::fill(v.begin(), v.end(), 8);
    println(v);
 
    std::vector<std::complex<double>> nums{{1, 3}, {2, 2}, {4, 8}};
    println(nums);
    #ifdef __cpp_lib_algorithm_default_value_type
        std::fill(nums.begin(), nums.end(), {4, 2});
    #else
        std::fill(nums.begin(), nums.end(), std::complex<double>{4, 2});
    #endif
    println(nums);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 283 | C++98 | T was required to be CopyAssignable, butT is not always writable to ForwardIt | required to be writable instead |

## See also
- [fill_n](/cpp/algorithm/fill_n/)
- [copycopy_if](/cpp/algorithm/copy/)
- [generate](/cpp/algorithm/generate/)
- [transform](/cpp/algorithm/transform/)
- [ranges::fill](/cpp/algorithm/ranges/fill/)
