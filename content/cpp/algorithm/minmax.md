---
title: "std::minmax"
source_path: "cpp/algorithm/minmax"
header: "<algorithm>"
category: "algorithm"
---

Returns the lowest and the greatest of the given values.

## Declarations
```cpp
template< class T >
std::pair<const T&, const T&> minmax( const T& a, const T& b );
```
_(since C++11) (constexpr since C++14)_

```cpp
template< class T, class Compare >
std::pair<const T&, const T&> minmax( const T& a, const T& b,
Compare comp );
```
_(since C++11) (constexpr since C++14)_

```cpp
template< class T >
std::pair<T, T> minmax( std::initializer_list<T> ilist );
```
_(since C++11) (constexpr since C++14)_

```cpp
template< class T, class Compare >
std::pair<T, T> minmax( std::initializer_list<T> ilist,
Compare comp );
```
_(since C++11) (constexpr since C++14)_

## Parameters
- `a, b`: the values to compare
- `ilist`: initializer list with the values to compare
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type T can be implicitly converted to both of them.

## Notes
For overloads ([1,2](#Version_1)), if one of the parameters is a temporary, the reference returned becomes a dangling reference at the end of the full expression that contains the call to minmax:

## Example
```cpp
#include <algorithm>
#include <cstdlib>
#include <ctime>
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> v{3, 1, 4, 1, 5, 9, 2, 6};
    std::srand(std::time(0));
    std::pair<int, int> bounds = std::minmax(std::rand() % v.size(),
                                             std::rand() % v.size());
 
    std::cout << "v[" << bounds.first << "," << bounds.second << "]: ";
    for (int i = bounds.first; i < bounds.second; ++i)
        std::cout << v[i] << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2239 | C++11 | T was required to be LessThanComparable for overloads (2,4) | not required |

## See also
- [min](/cpp/algorithm/min/)
- [max](/cpp/algorithm/max/)
- [minmax_element](/cpp/algorithm/minmax_element/)
- [ranges::minmax](/cpp/algorithm/ranges/minmax/)
