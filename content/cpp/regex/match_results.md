---
title: "std::match_results"
source_path: "cpp/regex/match_results"
header: "<regex>"
category: "regex"
since: "C++11"
---

The class template std::match_results holds a collection of character sequences that represent the result of a regular expression match.

## Declarations
```cpp
template<
class BidirIt,
class Alloc = std::allocator<std::sub_match<BidirIt>>
> class match_results;
```
_(since C++11)_

```cpp
namespace pmr {
template <class BidirIt>
using match_results = std::match_results<BidirIt,
std::pmr::polymorphic_allocator<
std::sub_match<BidirIt>>>;
}
```
_(since C++17)_
