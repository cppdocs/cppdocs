---
title: "std::make_pair"
source_path: "cpp/utility/pair/make_pair"
header: "<utility>"
category: "utility"
since: "C++20"
---

Creates a [std::pair](/cpp/utility/pair/) object, deducing the target type from the types of arguments.

## Declarations
```cpp
template< class T1, class T2 >
std::pair<T1, T2> make_pair( T1 x, T2 y );
```
_(until C++11)_

```cpp
template< class T1, class T2 >
std::pair</*V1*/, /*V2*/> make_pair( T1&& x, T2&& y );
```
_(since C++11) (constexpr since C++14) (until C++20)_

```cpp
template< class T1, class T2 >
constexpr std::pair<std::unwrap_ref_decay_t<T1>,
std::unwrap_ref_decay_t<T2>>
make_pair( T1&& x, T2&& y );
```
_(since C++20)_

## Parameters
- `x, y`: the values to construct the pair from

## Return value
[std::pair](/cpp/utility/pair/)<T1, T2>(x, y)

## Example
```cpp
#include <functional>
#include <iostream>
#include <utility>
 
int main()
{
    int n = 1;
    int a[5] = {1, 2, 3, 4, 5};
 
    // build a pair from two ints
    auto p1 = std::make_pair(n, a[1]);
    std::cout << "The value of p1 is "
              << '(' << p1.first << ", " << p1.second << ")\n";
 
    // build a pair from a reference to int and an array (decayed to pointer)
    auto p2 = std::make_pair(std::ref(n), a);
    n = 7;
    std::cout << "The value of p2 is "
              << '(' << p2.first << ", " << *(p2.second + 2) << ")\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 181 | C++98 | the parameter types were const-referencetypes, which made passing arrays impossible | changed thesetypes to value types |
