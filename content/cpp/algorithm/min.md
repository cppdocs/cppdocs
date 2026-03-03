---
title: "std::min"
source_path: "cpp/algorithm/min"
header: "<algorithm>"
category: "algorithm"
---

Returns the smaller of the given values.

## Declarations
```cpp
template< class T >
const T& min( const T& a, const T& b );
```
_(constexpr since C++14)_

```cpp
template< class T, class Compare >
const T& min( const T& a, const T& b, Compare comp );
```
_(constexpr since C++14)_

```cpp
template< class T >
T min( std::initializer_list<T> ilist );
```
_(since C++11) (constexpr since C++14)_

```cpp
template< class T, class Compare >
T min( std::initializer_list<T> ilist, Compare comp );
```
_(since C++11) (constexpr since C++14)_

## Parameters
- `a, b`: the values to compare
- `ilist`: initializer list with the values to compare
- `cmp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if a is less than b. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type T can be implicitly converted to both of them.

## Notes
Capturing the result of std::min by reference produces a dangling reference if one of the parameters is a temporary and that parameter is returned:

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string_view>
 
int main()
{
    std::cout << "smaller of 10 and 010 is " << std::min(10, 010) << '\n'
              << "smaller of 'd' and 'b' is '" << std::min('d', 'b') << "'\n"
              << "shortest of \"foo\", \"bar\", and \"hello\" is \""
              << std::min({"foo", "bar", "hello"},
                          [](const std::string_view s1, const std::string_view s2)
                          {
                              return s1.size() < s2.size();
                          }) << "\"\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 281 | C++98 | T was required to be CopyConstructible for overloads (1,2) | not required |
| LWG 2239 | C++98C++11 | 1. T was required to be LessThanComparable for overloads (2) (C++98) and (4) (C++11)2. the complexity requirements were missing | 1. not required2. added the requirements |

## See also
- [max](/cpp/algorithm/max/)
- [minmax](/cpp/algorithm/minmax/)
- [min_element](/cpp/algorithm/min_element/)
- [clamp](/cpp/algorithm/clamp/)
- [ranges::min](/cpp/algorithm/ranges/min/)
