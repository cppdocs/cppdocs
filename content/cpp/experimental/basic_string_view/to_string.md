---
title: "std::experimental::basic_string_view<CharT,Traits>::to_string, std::experimental::basic_string_view<CharT,Traits>::operator basic_string"
source_path: "cpp/experimental/basic_string_view/to_string"
category: "experimental"
---

Creates a basic_string with a copy of the content of the current view.

## Declarations
```cpp
template<class Allocator = allocator<CharT>>
basic_string<CharT, Traits, Allocator>
to_string(const Allocator& a = Allocator()) const;
```
_(library fundamentals TS)_

```cpp
template<class Allocator>
explicit operator basic_string<CharT, Traits, Allocator>() const;
```
_(library fundamentals TS)_

## Parameters
- `a`: Allocator instance to use for allocating the new string

## Return value
A basic_string containing a copy of the characters of the current view.
