---
title: "std::ranges::reverse_copy, std::ranges::reverse_copy_result"
source_path: "cpp/algorithm/ranges/reverse_copy"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Copies the elements from the source range [first,last) to the destination range [result,result + N), where N is [ranges::distance](/cpp/iterator/ranges/distance/)(first, last), in such a way that the elements in the new range are in reverse order. Behaves as if by executing the assignment *(result + N - 1 - i) = *(first + i) once for each integer i in [0,N). The behavior is undefined if the source and destination ranges overlap.

## Declarations
```cpp
Call signature
```

```cpp
template< std::bidirectional_iterator I, std::sentinel_for<I> S,
std::weakly_incrementable O >
requires std::indirectly_copyable<I, O>
constexpr reverse_copy_result<I, O>
reverse_copy( I first, S last, O result );
```
_(since C++20)_

```cpp
template< ranges::bidirectional_range R, std::weakly_incrementable O >
requires std::indirectly_copyable<ranges::iterator_t<R>, O>
constexpr reverse_copy_result<ranges::borrowed_iterator_t<R>, O>
reverse_copy( R&& r, O result );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I, class O >
using reverse_copy_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to copy
- `r`: the range of elements to copy
- `result`: the beginning of the destination range.

## Return value
{last, result + N}.

## Notes
Implementations (e.g. [MSVC STL](https://github.com/microsoft/STL/blob/main/stl/src/vector_algorithms.cpp)) may enable vectorization when the both iterator types model [contiguous_iterator](/cpp/iterator/contiguous_iterator/) and have the same value type, and the value type is [TriviallyCopyable](/cpp/named_req/triviallycopyable/).

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string>
 
int main()
{
    std::string x {"12345"}, y(x.size(), ' ');
    std::cout << x << " → ";
    std::ranges::reverse_copy(x.begin(), x.end(), y.begin());
    std::cout << y << " → ";
    std::ranges::reverse_copy(y, x.begin());
    std::cout << x << '\n';
}
```

## See also
- [ranges::reverse](/cpp/algorithm/ranges/reverse/)
- [reverse_copy](/cpp/algorithm/reverse_copy/)
