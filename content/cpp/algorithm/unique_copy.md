---
title: "std::unique_copy"
source_path: "cpp/algorithm/unique_copy"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Copies the elements from the range [first,last), to another range beginning at d_first in such a way that there are no consecutive equal elements. Only the first element of each group of equal elements is copied.

## Declarations
```cpp
template< class InputIt, class OutputIt >
OutputIt unique_copy( InputIt first, InputIt last, OutputIt d_first );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt1, class ForwardIt2 >
ForwardIt2 unique_copy( ExecutionPolicy&& policy, ForwardIt1 first,
ForwardIt1 last, ForwardIt2 d_first );
```
_(since C++17)_

```cpp
template< class InputIt, class OutputIt, class BinaryPred >
OutputIt unique_copy( InputIt first, InputIt last,
OutputIt d_first, BinaryPred p );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt1,
class ForwardIt2, class BinaryPred >
ForwardIt2 unique_copy( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 d_first, BinaryPred p );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to process
- `d_first`: the beginning of the destination range
- `policy`: the execution policy to use
- `p`: binary predicate which returns true if the elements should be treated as equal. The signature of the predicate function should be equivalent to the following: bool pred(const Type1 &a, const Type2 &b); While the signature does not need to have const &, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1 & is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type InputIt can be dereferenced and then implicitly converted to both of them.

## Return value
Output iterator to the element past the last written element.

## Notes
If InputIt satisfies [LegacyForwardIterator](/cpp/named_req/forwarditerator/), this function rereads the input in order to detect duplicates.

Otherwise, if OutputIt satisfies [LegacyForwardIterator](/cpp/named_req/forwarditerator/), and the value type of InputIt is the same as that of OutputIt, this function compare *d_first to *first.

Otherwise, this function compares *first to a local element copy.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <string>
 
int main()
{
    std::string s1 {"A string with mmmany letters!"};
    std::cout << "Before: " << s1 << '\n';
 
    std::string s2;
    std::unique_copy(s1.begin(), s1.end(), std::back_inserter(s2),
                     [](char c1, char c2) { return c1 == 'm' && 'm' == c2; });
 
    std::cout << "After:  " << s2 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 239 | C++98 | the predicate was applied std::distance(first, last) times | applied one time fewer(for non-empty ranges) |
| LWG 241 | C++98 | the value type of InputIt was not required to be CopyConstructible | conditionally required |
| LWG 538 | C++98 | the value type of InputIt was not required to be CopyAssignable | conditionally required |
| LWG 2439 | C++98 | the value type of InputIt was not required to beCopyConstructible if OutputIt is a LegacyForwardIterator | conditionally required |

## See also
- [adjacent_find](/cpp/algorithm/adjacent_find/)
- [unique](/cpp/algorithm/unique/)
- [copycopy_if](/cpp/algorithm/copy/)
- [ranges::unique_copy](/cpp/algorithm/ranges/unique_copy/)
