---
title: "operator==,!=(std::istreambuf_iterator<CharT,Traits>)"
source_path: "cpp/iterator/istreambuf_iterator/operator_cmp"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Checks whether both lhs and rhs are valid, or both are invalid, regardless of the stream buffer objects they use.

## Declarations
```cpp
template< class CharT, class Traits >
bool operator==( const std::istreambuf_iterator<CharT,Traits>& lhs,
const std::istreambuf_iterator<CharT,Traits>& rhs );
```

```cpp
template< class CharT, class Traits >
bool operator!=( const std::istreambuf_iterator<CharT,Traits>& lhs,
const std::istreambuf_iterator<CharT,Traits>& rhs );
```
_(until C++20)_

```cpp
friend bool operator==( const istreambuf_iterator& lhs,
std::default_sentinel_t );
```
_(since C++20)_

## Parameters
- `lhs, rhs`: stream buffer iterators to compare
