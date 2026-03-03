---
title: "std::is_permutation"
source_path: "cpp/algorithm/is_permutation"
header: "<algorithm>"
category: "algorithm"
---

Checks whether [first1,last1) is a [permutation](https://en.wikipedia.org/wiki/permutation) of a range starting from first2:

## Declarations
```cpp
template< class ForwardIt1, class ForwardIt2 >
bool is_permutation( ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2 );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ForwardIt1, class ForwardIt2,
class BinaryPredicate >
bool is_permutation( ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, BinaryPredicate p );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ForwardIt1, class ForwardIt2 >
bool is_permutation( ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2 );
```
_(since C++14) (constexpr since C++20)_

```cpp
template< class ForwardIt1, class ForwardIt2,
class BinaryPredicate >
bool is_permutation( ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2,
BinaryPredicate p );
```
_(since C++14) (constexpr since C++20)_

## Parameters
- `first1, last1`: the range of elements to compare
- `first2, last2`: the second range to compare
- `p`: binary predicate which returns true if the elements should be treated as equal. The signature of the predicate function should be equivalent to the following: bool pred(const Type1 &a, const Type2 &b); While the signature does not need to have const &, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1 & is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that objects of types InputIt1 and InputIt2 can be dereferenced and then implicitly converted to Type1 and Type2 respectively.

## Return value
true if the range [first1,last1) is a permutation of the range [first2,last2), false otherwise.

## Example
```cpp
#include <algorithm>
#include <iostream>
 
template<typename Os, typename V>
Os& operator<<(Os& os, const V& v)
{
    os << "{ ";
    for (const auto& e : v)
        os << e << ' ';
    return os << '}';
}
 
int main()
{
    static constexpr auto v1 = {1, 2, 3, 4, 5};
    static constexpr auto v2 = {3, 5, 4, 1, 2};
    static constexpr auto v3 = {3, 5, 4, 1, 1};
 
    std::cout << v2 << " is a permutation of " << v1 << ": " << std::boolalpha
              << std::is_permutation(v1.begin(), v1.end(), v2.begin()) << '\n'
              << v3 << " is a permutation of " << v1 << ": "
              << std::is_permutation(v1.begin(), v1.end(), v3.begin()) << '\n';
}
```

## See also
- [next_permutation](/cpp/algorithm/next_permutation/)
- [prev_permutation](/cpp/algorithm/prev_permutation/)
- [equivalence_relation](/cpp/concepts/equivalence_relation/)
- [relation](/cpp/concepts/relation/)
- [ranges::is_permutation](/cpp/algorithm/ranges/is_permutation/)
