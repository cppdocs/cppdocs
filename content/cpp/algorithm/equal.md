---
title: "std::equal"
source_path: "cpp/algorithm/equal"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Checks whether [first1,last1) and a range starting from first2 are equal:

## Declarations
```cpp
template< class InputIt1, class InputIt2 >
bool equal( InputIt1 first1, InputIt1 last1,
InputIt2 first2 );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt1, class ForwardIt2 >
bool equal( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2 );
```
_(since C++17)_

```cpp
template< class InputIt1, class InputIt2, class BinaryPred >
bool equal( InputIt1 first1, InputIt1 last1,
InputIt2 first2, BinaryPred p );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class BinaryPred >
bool equal( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, BinaryPred p );
```
_(since C++17)_

```cpp
template< class InputIt1, class InputIt2 >
bool equal( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2 );
```
_(since C++14) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt1, class ForwardIt2 >
bool equal( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2 );
```
_(since C++17)_

```cpp
template< class InputIt1, class InputIt2, class BinaryPred >
bool equal( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2, BinaryPred p );
```
_(since C++14) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class BinaryPred >
bool equal( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2, BinaryPred p );
```
_(since C++17)_

## Parameters
- `first1, last1`: the first range of the elements to compare
- `first2, last2`: the second range of the elements to compare
- `policy`: the execution policy to use
- `p`: binary predicate which returns true if the elements should be treated as equal. The signature of the predicate function should be equivalent to the following: bool pred(const Type1 &a, const Type2 &b); While the signature does not need to have const &, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1 & is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that objects of types InputIt1 and InputIt2 can be dereferenced and then implicitly converted to Type1 and Type2 respectively.

## Notes
std::equal should not be used to compare the ranges formed by the iterators from [std::unordered_set](/cpp/container/unordered_set/), [std::unordered_multiset](/cpp/container/unordered_multiset/), [std::unordered_map](/cpp/container/unordered_map/), or [std::unordered_multimap](/cpp/container/unordered_multimap/) because the order in which the elements are stored in those containers may be different even if the two containers store the same elements.

When comparing entire containers or string views(since C++17) for equality, operator== for the corresponding type are usually preferred.

Sequential std::equal is not guaranteed to be short-circuit. E.g. if the first pair elements of both ranges do not compare equal, the rest of elements may also be compared. Non-short-circuit comparison may happen when the ranges are compared with [std::memcmp](/cpp/string/byte/memcmp/) or implementation-specific vectorized algorithms.

## Example
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>
#include <string_view>
 
constexpr bool is_palindrome(const std::string_view& s)
{
    return std::equal(s.cbegin(), s.cbegin() + s.size() / 2, s.crbegin());
}
 
void test(const std::string_view& s)
{
    std::cout << std::quoted(s)
              << (is_palindrome(s) ? " is" : " is not")
              << " a palindrome\n";
}
 
int main()
{
    test("radar");
    test("hello");
}
```

## See also
- [findfind_iffind_if_not](/cpp/algorithm/find/)
- [lexicographical_compare](/cpp/algorithm/lexicographical_compare/)
- [mismatch](/cpp/algorithm/mismatch/)
- [search](/cpp/algorithm/search/)
- [ranges::equal](/cpp/algorithm/ranges/equal/)
- [equal_to](/cpp/utility/functional/equal_to/)
- [equal_range](/cpp/algorithm/equal_range/)
