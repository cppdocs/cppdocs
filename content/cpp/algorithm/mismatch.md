---
title: "std::mismatch"
source_path: "cpp/algorithm/mismatch"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Returns a pair of iterators to the first mismatching of elements from [first1,last1) and a range starting from first2:

## Declarations
```cpp
template< class InputIt1, class InputIt2 >
std::pair<InputIt1, InputIt2>
mismatch( InputIt1 first1, InputIt1 last1,
InputIt2 first2 );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt1, class ForwardIt2 >
std::pair<ForwardIt1, ForwardIt2>
mismatch( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2 );
```
_(since C++17)_

```cpp
template< class InputIt1, class InputIt2, class BinaryPred >
std::pair<InputIt1, InputIt2>
mismatch( InputIt1 first1, InputIt1 last1,
InputIt2 first2, BinaryPred p );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class BinaryPred >
std::pair<ForwardIt1, ForwardIt2>
mismatch( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, BinaryPred p );
```
_(since C++17)_

```cpp
template< class InputIt1, class InputIt2 >
std::pair<InputIt1, InputIt2>
mismatch( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2 );
```
_(since C++14) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt1, class ForwardIt2 >
std::pair<ForwardIt1, ForwardIt2>
mismatch( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2 );
```
_(since C++17)_

```cpp
template< class InputIt1, class InputIt2, class BinaryPred >
std::pair<InputIt1, InputIt2>
mismatch( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2, BinaryPred p );
```
_(since C++14) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class BinaryPred >
std::pair<ForwardIt1, ForwardIt2>
mismatch( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2, BinaryPred p );
```
_(since C++17)_

## Parameters
- `first1, last1`: the first range of the elements
- `first2, last2`: the second range of the elements
- `policy`: the execution policy to use
- `p`: binary predicate which returns true if the elements should be treated as equal. The signature of the predicate function should be equivalent to the following: bool pred(const Type1 &a, const Type2 &b); While the signature does not need to have const &, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1 & is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that objects of types InputIt1 and InputIt2 can be dereferenced and then implicitly converted to Type1 and Type2 respectively.

## Return value
[std::pair](/cpp/utility/pair/) with iterators to the first two non-equal elements.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string>
 
std::string mirror_ends(const std::string& in)
{
    return std::string(in.begin(),
                       std::mismatch(in.begin(), in.end(), in.rbegin()).first);
}
 
int main()
{
    std::cout << mirror_ends("abXYZba") << '\n'
              << mirror_ends("abca") << '\n'
              << mirror_ends("aba") << '\n';
}
```

## See also
- [equal](/cpp/algorithm/equal/)
- [findfind_iffind_if_not](/cpp/algorithm/find/)
- [lexicographical_compare](/cpp/algorithm/lexicographical_compare/)
- [search](/cpp/algorithm/search/)
- [ranges::mismatch](/cpp/algorithm/ranges/mismatch/)
