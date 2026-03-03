---
title: "std::experimental::basic_string_view<CharT,Traits>::size, std::experimental::basic_string_view<CharT,Traits>::length"
source_path: "cpp/experimental/basic_string_view/size"
category: "experimental"
---

Returns the number of CharT elements in the view, i.e. [std::distance](/cpp/iterator/distance/)(begin(), end()).

## Declarations
```cpp
constexpr size_type size() const noexcept;
```
_(library fundamentals TS)_

```cpp
constexpr size_type length() const noexcept;
```
_(library fundamentals TS)_

## Return value
The number of CharT elements in the view.

## See also
- [empty](/cpp/experimental/basic_string_view/empty/)
- [max_size](/cpp/experimental/basic_string_view/max_size/)
