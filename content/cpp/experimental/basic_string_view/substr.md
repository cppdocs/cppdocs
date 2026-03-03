---
title: "std::experimental::basic_string_view<CharT,Traits>::substr"
source_path: "cpp/experimental/basic_string_view/substr"
category: "experimental"
---

Returns a view of the substring [pos, pos + rcount), where rcount is the smaller of count and size() - pos.

## Declarations
```cpp
constexpr basic_string_view
substr(size_type pos = 0, size_type count = npos ) const;
```

## Parameters
- `pos`: position of the first character
- `count`: requested length

## Return value
View of the substring [pos, pos + rcount).

## See also
- [copy](/cpp/experimental/basic_string_view/copy/)
- [find](/cpp/experimental/basic_string_view/find/)
