---
title: "std::copy, std::copy_if"
source_path: "cpp/algorithm/copy"
header: "<algorithm>"
category: "algorithm"
since: "C++98"
---

Copies elements from a source range into a destination range.

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
- `pred`: unary predicate used by `copy_if`; for each `v` of type (possibly const) `VT` where `VT` is the value type of `InputIt`, `pred(v)` must be valid, convertible to `bool`, and must not modify `v`

Type requirements:
- `InputIt` must satisfy [LegacyInputIterator](/cpp/named_req/InputIterator/).
- `OutputIt` must satisfy [LegacyOutputIterator](/cpp/named_req/OutputIterator/).
- `ForwardIt1` and `ForwardIt2` must satisfy [LegacyForwardIterator](/cpp/named_req/ForwardIterator/).
- `UnaryPred` must satisfy [Predicate](/cpp/named_req/Predicate/).

## Return value
Output iterator to the element in the destination range, one past the last element copied.

## Complexity
Let `N = std::distance(first, last)`.
- `copy`: exactly `N` assignments
- `copy_if`: exactly `N` predicate applications and at most `N` assignments

## Exceptions
For overloads taking an execution policy:
- if a function invoked as part of the algorithm throws and the policy is one of the standard execution policies, `std::terminate` is called
- for other execution-policy types, behavior is implementation-defined
- if allocation fails, `std::bad_alloc` may be thrown

## Notes
In practice, implementations of std::copy avoid multiple assignments and use bulk copy functions such as [std::memmove](/cpp/string/byte/memmove/) if the value type is [TriviallyCopyable](/cpp/named_req/triviallycopyable/) and the iterator types satisfy [LegacyContiguousIterator](/cpp/named_req/contiguousiterator/).

The destination range must have enough space for the copied elements unless an inserting iterator such as [`std::back_inserter`](/cpp/iterator/back_inserter/) is used.

Both algorithms preserve the relative order of copied elements.

If source and destination ranges overlap, the destination start must not be inside `[first, last)`. For right-shift overlap cases, use [copy_backward](/cpp/algorithm/copy_backward/).

## Possible implementation
```cpp
template<class InputIt, class OutputIt>
constexpr OutputIt copy(InputIt first, InputIt last, OutputIt d_first)
{
    for (; first != last; (void)++first, ++d_first)
        *d_first = *first;
    return d_first;
}

template<class InputIt, class OutputIt, class UnaryPred>
constexpr OutputIt copy_if(InputIt first, InputIt last,
                           OutputIt d_first, UnaryPred pred)
{
    for (; first != last; ++first)
        if (pred(*first))
        {
            *d_first = *first;
            ++d_first;
        }
    return d_first;
}
```

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
- [remove_copy, remove_copy_if](/cpp/algorithm/remove_copy/)
- [ranges::copy, ranges::copy_if](/cpp/algorithm/ranges/copy/)
