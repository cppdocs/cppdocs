---
title: "std::copy, std::copy_if"
source_path: "cpp/algorithm/copy"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Copies the elements in the range, defined by [first,last), to another range beginning at d_first (copy destination range).

## Declarations
```cpp
template< class InputIt, class OutputIt >
OutputIt copy( InputIt first, InputIt last,
OutputIt d_first );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2 >
ForwardIt2 copy( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 d_first );
```
_(since C++17)_

```cpp
template< class InputIt, class OutputIt, class UnaryPred >
OutputIt copy_if( InputIt first, InputIt last,
OutputIt d_first, UnaryPred pred );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class UnaryPred >
ForwardIt2 copy_if( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 d_first, UnaryPred pred );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to copy
- `d_first`: the beginning of the destination range
- `policy`: the execution policy to use
- `pred`: unary predicate which returns true for the required elements. The expression pred(v) must be convertible to bool for every argument v of type (possibly const) VT, where VT is the value type of InputIt, regardless of value category, and must not modify v. Thus, a parameter type of VT&is not allowed, nor is VT unless for VT a move is equivalent to a copy(since C++11).

## Return value
Output iterator to the element in the destination range, one past the last element copied.

## Notes
In practice, implementations of std::copy avoid multiple assignments and use bulk copy functions such as [std::memmove](/cpp/string/byte/memmove/) if the value type is [TriviallyCopyable](/cpp/named_req/triviallycopyable/) and the iterator types satisfy [LegacyContiguousIterator](/cpp/named_req/contiguousiterator/).

When copying overlapping ranges, std::copy is appropriate when copying to the left (beginning of the destination range is outside the source range) while std::copy_backward is appropriate when copying to the right (end of the destination range is outside the source range).

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <numeric>
#include <vector>
 
int main()
{
    std::vector<int> from_vector(10);
    std::iota(from_vector.begin(), from_vector.end(), 0);
 
    std::vector<int> to_vector;
    std::copy(from_vector.begin(), from_vector.end(),
              std::back_inserter(to_vector));
// or, alternatively,
//  std::vector<int> to_vector(from_vector.size());
//  std::copy(from_vector.begin(), from_vector.end(), to_vector.begin());
// either way is equivalent to
//  std::vector<int> to_vector = from_vector;
 
    std::cout << "to_vector contains: ";
 
    std::copy(to_vector.begin(), to_vector.end(),
              std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
 
    std::cout << "odd numbers in to_vector are: ";
 
    std::copy_if(to_vector.begin(), to_vector.end(),
                 std::ostream_iterator<int>(std::cout, " "),
                 [](int x) { return x % 2 != 0; });
    std::cout << '\n';
 
    std::cout << "to_vector contains these multiples of 3: ";
 
    to_vector.clear();
    std::copy_if(from_vector.begin(), from_vector.end(),
                 std::back_inserter(to_vector),
                 [](int x) { return x % 3 == 0; });
 
    for (const int x : to_vector)
        std::cout << x << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2039 | C++11 | the return value of std::copy_if was not specified | specified |
| LWG 2044 | C++11 | the stability of std::copy_if was not defined | defined |

## See also
- [copy_backward](/cpp/algorithm/copy_backward/)
- [reverse_copy](/cpp/algorithm/reverse_copy/)
- [copy_n](/cpp/algorithm/copy_n/)
- [fill](/cpp/algorithm/fill/)
- [remove_copyremove_copy_if](/cpp/algorithm/remove_copy/)
- [ranges::copyranges::copy_if](/cpp/algorithm/ranges/copy/)
