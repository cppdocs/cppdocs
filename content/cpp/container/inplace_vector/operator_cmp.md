---
title: "operator==,<=>(std::inplace_vector)"
source_path: "cpp/container/inplace_vector/operator_cmp"
category: "container"
since: "C++26"
---

Compares the contents of two std::inplace_vectors.

## Declarations
```cpp
constexpr friend bool operator==( const std::inplace_vector<T, N>& lhs,
const std::inplace_vector<T, N>& rhs );
```
_(since C++26)_

```cpp
constexpr friend synth-three-way-result<T>
operator<=>( const std::inplace_vector<T, N>& lhs,
const std::inplace_vector<T, N>& rhs );
```
_(since C++26)_

## Parameters
- `lhs, rhs`: std::inplace_vectors whose contents to compare

## Notes
The relational operators are defined in terms of [synth-three-way](/cpp/standard_library/synth-three-way/), which uses operator<=> if possible, or operator< otherwise.

Notably, if the element does not itself provide operator<=>, but is implicitly convertible to a three-way comparable type, that conversion will be used instead of operator<.

## Example
```cpp
#include <inplace_vector>
 
int main()
{
    constexpr std::inplace_vector<int, 4>
        a{1, 2, 3},
        b{1, 2, 3},
        c{7, 8, 9, 10};
 
    static_assert
    (""
        "Compare equal containers:" &&
        (a != b) == false &&
        (a == b) == true &&
        (a < b) == false &&
        (a <= b) == true &&
        (a > b) == false &&
        (a >= b) == true &&
        (a <=> b) >= 0 &&
        (a <=> b) <= 0 &&
        (a <=> b) == 0 &&
 
        "Compare non equal containers:" &&
        (a != c) == true &&
        (a == c) == false &&
        (a < c) == true &&
        (a <= c) == true &&
        (a > c) == false &&
        (a >= c) == false &&
        (a <=> c) < 0 &&
        (a <=> c) != 0 &&
        (a <=> c) <= 0 &&
    "");
}
```
