---
title: "std::format_kind"
source_path: "cpp/utility/format/format_kind"
header: "<format>"
category: "utility"
since: "C++23"
---

The variable template format_kind selects an appropriate std::range_format for a range R.

## Declarations
```cpp
template< class R >
constexpr /* unspecified */ format_kind = /* unspecified */;
```
_(since C++23)_

```cpp
template< ranges::input_range R >
requires std::same_as<R, std::remove_cvref_t<R>>
constexpr range_format format_kind<R> = /* see description */;
```
_(since C++23)_

## Example
```cpp
#include <filesystem>
#include <format>
#include <map>
#include <set>
#include <vector>
 
struct A {};
 
static_assert(std::format_kind<std::vector<int>> == std::range_format::sequence);
static_assert(std::format_kind<std::map<int>> == std::range_format::map);
static_assert(std::format_kind<std::set<int>> == std::range_format::set);
static_assert(std::format_kind<std::filesystem::path> == std::range_format::disabled);
// ill-formed:
// static_assert(std::format_kind<A> == std::range_format::disabled);
 
int main() {}
```

## See also
- [range_format](/cpp/utility/format/range_format/)
