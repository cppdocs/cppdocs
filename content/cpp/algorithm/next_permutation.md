---
title: "std::next_permutation"
source_path: "cpp/algorithm/next_permutation"
header: "<algorithm>"
category: "algorithm"
---

Permutes the range [first,last) into the next [permutation](https://en.wikipedia.org/wiki/permutation). Returns true if such a “next permutation” exists; otherwise transforms the range into the lexicographically first permutation (as if by [std::sort](/cpp/algorithm/sort/)) and returns false.

## Declarations
```cpp
template< class BidirIt >
bool next_permutation( BidirIt first, BidirIt last );
```
_(constexpr since C++20)_

```cpp
template< class BidirIt, class Compare >
bool next_permutation( BidirIt first, BidirIt last, Compare comp );
```
_(constexpr since C++20)_

## Parameters
- `first, last`: the range of elements to permute
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type BidirIt can be dereferenced and then implicitly converted to both of them.

## Return value
true if the new permutation is lexicographically greater than the old. false if the last permutation was reached and the range was reset to the first permutation.

## Notes
Averaged over the entire sequence of permutations, typical implementations use about 3 comparisons and 1.5 swaps per call.

Implementations (e.g. [MSVC STL](https://github.com/microsoft/STL/blob/main/stl/src/vector_algorithms.cpp)) may enable vectorization when the iterator type satisfies [LegacyContiguousIterator](/cpp/named_req/contiguousiterator/) and swapping its value type calls neither non-trivial special member function nor [ADL](/cpp/language/adl/)-found swap.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string>
 
int main()
{
    std::string s = "aba";
 
    do
    {
        std::cout << s << '\n';
    }
    while (std::next_permutation(s.begin(), s.end()));
 
    std::cout << s << '\n';
}
```

## See also
- [is_permutation](/cpp/algorithm/is_permutation/)
- [prev_permutation](/cpp/algorithm/prev_permutation/)
- [ranges::next_permutation](/cpp/algorithm/ranges/next_permutation/)
